'use client';

import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: 'Varva ner',
    text: 'Ta 2 gummies 30–60 minuter före läggdags. Låt kvällen övergå i ett lugnare tempo.',
    img: '/images/steps.jpg',
  },
  {
    num: '02',
    title: 'Kom till ro',
    text: 'Ingredienser som stöttar en mjukare övergång från dag till natt, när tankarna stannar av.',
    img: '/images/steps.jpg',
  },
  {
    num: '03',
    title: 'Vakna mer utvilad',
    text: 'Stötta en bättre natt — så morgonen känns lättare och du slipper tung grogginess.',
    img: '/images/steps.jpg',
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: '#0d0818',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Så fungerar det
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.75rem' }}>
          Så hjälper Koala Calm System dig komma till ro
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '500px', margin: '0 auto 3.5rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Ingen komplicerad rutin. Bara ett enkelt, naturligt tillägg till din kväll.
        </p>



        {/* Step cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1.5rem',
        }} className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.num} style={{
              position: 'relative',
              background: '#1d1235',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '1.25rem',
              padding: '2rem 1.5rem',
            }}>
              {/* Connector line */}
              {i < 2 && (
                <div className="connector" style={{
                  position: 'absolute',
                  top: '2.5rem',
                  right: '-0.75rem',
                  width: '1.5rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(139,92,246,0.4), transparent)',
                  zIndex: 1,
                }} />
              )}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(124,58,237,0.4)',
                }}>
                  <span style={{ fontFamily: 'Playfair Display, serif', color: '#fff', fontWeight: 700, fontSize: '1rem' }}>
                    {step.num}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#f0eaff', margin: 0 }}>
                  {step.title}
                </h3>
              </div>
              <p style={{ color: '#a899c4', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .steps-grid { grid-template-columns: repeat(3,1fr); }
        .connector { display: block; }
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
