import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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
    const { eventName, eventId, pageUrl, contents, value, currency } = body;
    
    const accessToken = process.env.TIKTOK_ACCESS_TOKEN;
    const pixelId = 'D700JIJC77U4GR00FPA0'; 

    if (!accessToken) {
      console.warn('Missing TIKTOK_ACCESS_TOKEN in Vercel environment variables.');
      return NextResponse.json({ status: 'error', reason: 'Missing Access Token' }, { status: 500 });
    }

    // 3. TikTok Events API format
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '127.0.0.1';
    const userAgent = req.headers.get('user-agent') || '';

    // TTClick ID and Pixel hash for advanced matching
    const ttclid = cookieStore.get('ttclid')?.value || '';
    const ttp = cookieStore.get('_ttp')?.value || '';

    const tiktokPayload = {
      pixel_code: pixelId,
      events: [
        {
          event: eventName,
          event_id: eventId,
          event_time: Math.floor(Date.now() / 1000),
          page: {
            url: pageUrl
          },
          user: {
            ip: ip,
            user_agent: userAgent,
            ...(ttclid ? { ttclid: ttclid } : {}),
            ...(ttp ? { ttp: ttp } : {})
          },
          properties: {
            contents: contents,
            value: value,
            currency: currency
          }
        }
      ]
    };

    // 4. Send to TikTok
    const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/pixel/track/', {
      method: 'POST',
      headers: {
        'Access-Token': accessToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tiktokPayload)
    });

    const data = await response.json();
    
    // Pass back success or inner error from TikTok
    if (data.code !== 0) {
      console.error('TikTok API Error:', data.message);
      return NextResponse.json({ status: 'error', reason: data.message }, { status: 400 });
    }

    return NextResponse.json({ status: 'success', data });
  } catch (error: any) {
    console.error('Events API route error:', error);
    return NextResponse.json({ status: 'error', reason: error.message }, { status: 500 });
  }
}
