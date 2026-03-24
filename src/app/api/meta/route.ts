import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createHash } from 'crypto';

const PIXEL_ID = '813273174536553';

function hash(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    // 1. GDPR Consent Check
    const cookieStore = await cookies();
    const consentCookie = cookieStore.get('koala_cookie_consent');

    if (!consentCookie) {
      return NextResponse.json({ status: 'ignored', reason: 'No consent cookie' });
    }

    let consent;
    try {
      consent = JSON.parse(decodeURIComponent(consentCookie.value));
    } catch {
      return NextResponse.json({ status: 'ignored', reason: 'Invalid consent cookie' });
    }

    if (!consent?.marketing) {
      return NextResponse.json({ status: 'ignored', reason: 'Marketing consent not granted' });
    }

    // 2. Parse Event Data
    const body = await req.json();
    const { eventName, eventId, pageUrl, contents, value, currency, email } = body;

    const accessToken = process.env.META_ACCESS_TOKEN;
    if (!accessToken) {
      console.warn('Missing META_ACCESS_TOKEN in Vercel environment variables.');
      return NextResponse.json({ status: 'error', reason: 'Missing Access Token' }, { status: 500 });
    }

    // 3. Build Meta CAPI payload
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '';
    const userAgent = req.headers.get('user-agent') || '';
    const fbp = cookieStore.get('_fbp')?.value || '';
    const fbc = cookieStore.get('_fbc')?.value || '';

    const userData: Record<string, string> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    };
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;
    if (email) userData.em = hash(email);

    const metaPayload = {
      data: [
        {
          event_name: eventName,
          event_id: eventId,
          event_time: Math.floor(Date.now() / 1000),
          event_source_url: pageUrl,
          action_source: 'website',
          user_data: userData,
          custom_data: {
            currency: currency || 'SEK',
            value: value,
            contents: contents,
            content_type: 'product',
          },
        },
      ],
    };

    // 4. Send to Meta
    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metaPayload),
      }
    );

    const data = await response.json();
    if (data.error) {
      console.error('Meta CAPI Error:', data.error);
      return NextResponse.json({ status: 'error', reason: data.error.message }, { status: 400 });
    }

    return NextResponse.json({ status: 'success', data });
  } catch (error: any) {
    console.error('Meta Events route error:', error);
    return NextResponse.json({ status: 'error', reason: error.message }, { status: 500 });
  }
}
