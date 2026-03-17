'use client';

import { useEffect, useRef, useState } from 'react';

const items = [
  {
    title: 'Tystare kvällar',
    text: 'När tankarna fortsätter trots att kroppen är trött.',
    fill: 0.92,
  },
  {
    title: 'Mjukare insomning',
    text: 'För kvällar när det är svårt att komma ner i varv.',
    fill: 0.88,
  },
  {
    title: 'Bättre morgnar',
    text: 'Utan tung eller seg känsla nästa dag.',
    fill: 0.85,
  },
  {
    title: 'En enklare rutin',
    text: 'Mjuka gummies som känns lättare än ännu ett piller.',
    fill: 0.95,
  },
];

function BarItem({ title, text, fill, index }: { title: string; text: string; fill: number; index: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), index * 120);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="bar-item">
      <div className="bar-header">
        <div>
          <p className="bar-title">{title}</p>
          <p className="bar-text">{text}</p>
        </div>
      </div>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: animated ? `${fill * 100}%` : '0%' }}
        />
      </div>

      <style jsx>{`
        .bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid rgba(139, 92, 246, 0.1);
        }
        .bar-item:last-child {
          border-bottom: none;
        }
        .bar-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .bar-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #f0eaff;
          font-weight: 600;
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
        }
        .bar-text {
          font-size: 0.875rem;
          color: #7b6fa0;
          margin: 0;
          line-height: 1.5;
        }
        .bar-track {
          width: 100%;
          height: 6px;
          background: rgba(139, 92, 246, 0.12);
          border-radius: 100px;
          overflow: hidden;
        }
        .bar-fill {
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(90deg, #7c3aed, #a78bfa);
          transition: width 1.1s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
        }
      `}</style>
    </div>
  );
}

export default function BenefitCards() {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: '#0d0818',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p style={{
          textAlign: 'center',
          color: '#8b5cf6',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          Kundupplevelse
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          color: '#f0eaff',
          textAlign: 'center',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}>
          Det kunderna uppskattar mest
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#a899c4',
          maxWidth: '480px',
          margin: '0 auto 3rem',
          fontSize: '1rem',
          lineHeight: 1.7,
        }}>
          Baserat på feedback från våra kunder — vad de märker av mest i vardagen.
        </p>

        <div style={{
          background: '#1d1235',
          border: '1px solid rgba(139, 92, 246, 0.18)',
          borderRadius: '1.5rem',
          padding: '0.5rem 2.5rem 1rem',
        }} className="bars-card">
          {items.map((item, i) => (
            <BarItem key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 3.5rem 1.25rem !important;
          }
          .bars-card {
            padding: 0.5rem 1.25rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
