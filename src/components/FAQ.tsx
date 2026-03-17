'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Kommer jag känna mig groggy nästa dag?',
    a: 'Vår formula är skapad just för att undvika den där tunga, "bakfulla" känslan som många upplever av vanliga sömnprodukter. Du ska vakna och känna dig som dig själv.',
  },
  {
    q: 'Kan den ge konstiga eller intensiva drömmar?',
    a: 'Medan vissa standardgummies är kända för att ge märkliga drömmar på grund av onödigt höga doser av enstaka ingredienser, är Koala Ritual balanserad för att ge ett lugnt och mjukt stöd utan extremer.',
  },
  {
    q: 'Passar den om mitt största problem är att jag inte kan stänga av tankarna?',
    a: 'Ja, absolut. Den är byggd exakt för "trött i kroppen, klarvaken i huvudet"-känslan. Ingredienserna är utvalda för att hjälpa dig varva ner och bryta tankeströmmen på kvällen.',
  },
  {
    q: 'Hjälper den bara att somna, eller också att komma till ro under natten?',
    a: 'Medan första steget är att hjälpa dig somna in lättare, är formulan (Koala Calm System™) utformad för att ge ett jämnt stöd under hela nattens återhämtningsperiod för bättre helhetskvalitet.',
  },
  {
    q: 'Vad gör den annorlunda än vanliga sömngummies?',
    a: 'De flesta vanliga gummies slänger in stora mängder melatonin för att bara "knocka" dig. Vi fokuserar på roten till problemet — att hjälpa hjärnan varva ner och få en naturligare övergång till sömn, utan starka biverkningar.',
  },
  {
    q: 'Hur många gummies finns i en burk?',
    a: 'En burk innehåller 60 gummies, vilket räcker till en hel månad (30 kvällar) vid den rekommenderade dosen på 2 stycken per natt.',
  },
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
