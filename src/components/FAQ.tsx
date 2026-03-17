'use client';

import { useState } from 'react';

const faqs = [
  { q: 'När tar man dem?', a: 'Ta 2 gummies cirka 30–60 minuter före läggdags som en del av din kvällsrutin.' },
  { q: 'Passar den om mitt största problem är att jag inte kan stänga av tankarna?', a: 'Ja, den är utvecklad för kvällar när kroppen känns trött men huvudet fortfarande går på högvarv. Målet är inte att kännas “knockad”, utan att hjälpa dig varva ner och komma till ro lättare.' },
  { q: 'Kommer jag känna mig groggy nästa dag?', a: 'Produkten är framtagen för en mjukare kvällsrutin och bättre morgonkänsla, inte för att lämna dig tung eller seg dagen efter. Samtidigt reagerar alla olika, så börja gärna enligt rekommenderad användning och se hur den känns för dig.' },
  { q: 'Är det här bara ännu en vanlig sömngummy?', a: 'Nej — vår formula är byggd för ett mer specifikt problem: kvällar när tankarna inte stänger av. Många vanliga sömngummies säljer breda löften om bättre sömn, men vår positionering är tydligare: hjälpa dig varva ner, komma till ro och få en mjukare väg in i sömn.' },
  { q: 'Hjälper den bara att somna, eller också att komma till ro?', a: 'Den är byggd för båda delarna: att hjälpa dig varva ner på kvällen och göra övergången till sömn mjukare.' },
  { q: 'Kan den ge konstiga eller intensiva drömmar?', a: 'Sömnrutiner och kosttillskott kan upplevas olika från person till person. Därför är det alltid smart att börja enligt rekommenderad användning och känna efter hur din kropp reagerar.' },
  { q: 'Är den beroendeframkallande?', a: 'Den är framtagen som en enkel kvällsrutin, inte som en tung “knockout”-lösning. Många kunder söker just ett alternativ som känns mildare och enklare än starkare sömnhjälpmedel.' },
  { q: 'Passar den alla?', a: 'Rekommenderas för vuxna. Inte lämplig för gravida, ammande eller personer under 18 år. Konsultera läkare vid medicinering.' },
  { q: 'Hur många gummies finns i en burk?', a: 'Varje burk innehåller 60 gummies, vilket motsvarar 30 portioner vid 2 gummies per kväll.' },
  { q: 'Vad gör Koala Calm System™ annorlunda?', a: 'Koala Calm System™ är vår kvällsformula för lugnare sinne, mjukare insomning och bättre morgnar — särskilt för dig som känner dig trött i kroppen men klarvaken i huvudet.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #160d2a 0%, #0d0818 100%)' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          FAQ
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.75rem' }}>
          Vanliga frågor innan man testar
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Tveksam? Vi förstår. Här är svar på det folk oftast undrar.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: '#1d1235',
              border: `1px solid ${open === i ? 'rgba(139,92,246,0.4)' : 'rgba(139,92,246,0.15)'}`,
              borderRadius: '1rem',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.25rem 1.5rem',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  gap: '1rem',
                  textAlign: 'left',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                <span style={{ color: '#f0eaff', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <span style={{
                  color: '#8b5cf6',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease',
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  fontWeight: 300,
                  lineHeight: 1,
                }}>
                  +
                </span>
              </button>

              {open === i && (
                <div style={{ padding: '0 1.5rem 1.25rem' }}>
                  <p style={{ color: '#a899c4', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
