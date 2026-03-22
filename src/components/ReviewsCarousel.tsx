'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Review {
  name: string;
  age: number;
  text: string;
  image: string;
}

const WOMEN_REVIEWS: Review[] = [
  {
    name: 'Sara',
    age: 34,
    text: '“Jag är ofta helt slut i kroppen på kvällen men så fort jag lägger mig börjar hjärnan gå igenom allt jag inte hunnit med. De här hjälpte mig faktiskt att varva ner utan att jag kände mig helt borta. Det bästa är att jag inte vaknar med den där tunga känslan dagen efter.”',
    image: '/images/Person_35_years_202603201143 (2).jpg',
  },
  {
    name: 'Emma',
    age: 41,
    text: '“Har testat flera sömnprodukter tidigare och många har bara gjort mig seg eller konstig morgonen efter. Det här känns mycket mjukare. Jag somnar lättare och kvällarna känns mindre stressiga.”',
    image: '/images/Person_35_years_202603201143 (1).jpg',
  },
  {
    name: 'Lina',
    age: 29,
    text: '“För mig är problemet inte att jag inte är trött, utan att tankarna aldrig stänger av. Det här är första gången jag känt att en produkt faktiskt passar just det problemet. Inte som att bli knockad, mer att man kommer ner i varv på ett normalt sätt.”',
    image: '/images/Person_35_years_202603201143.jpg',
  },
];

const MEN_REVIEWS: Review[] = [
  {
    name: 'Johan',
    age: 37,
    text: '“Jag brukar ligga och tänka på jobb, saker jag måste göra dagen efter och hur få timmar sömn jag kommer få om jag inte somnar snart. Med de här känns det lättare att släppa kvällen. Jag gillar också att jag inte känner mig groggy morgonen efter.”',
    image: '/images/Man_35_years_202603201144.jpg',
  },
  {
    name: 'Markus',
    age: 32,
    text: '“Jag var rätt skeptisk eftersom mycket i den här kategorin känns som samma sak i olika burkar. Men de här kändes faktiskt annorlunda. Kvällen blir lugnare och jag vaknar inte lika förstörd som jag gjort av andra grejer jag testat.”',
    image: '/images/Man_27_years_202603201147.jpg',
  },
];

const ALL_REVIEWS: Review[] = [
  WOMEN_REVIEWS[0],
  MEN_REVIEWS[0],
  WOMEN_REVIEWS[1],
  MEN_REVIEWS[1],
  WOMEN_REVIEWS[2],
];

export default function ReviewsCarousel() {
  return (
    <section className="rc-section">
      <div className="rc-container">
        <div className="rc-scroll-container">
          {ALL_REVIEWS.map((review, index) => (
            <div key={index} className="rc-card">
              <div className="rc-image-container">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="rc-main-image"
                />
              </div>
              <div className="rc-content">
                <div className="rc-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                  ))}
                </div>
                <p className="rc-text">{review.text}</p>
                <div className="rc-footer">
                  <span className="rc-name">{review.name}, {review.age}</span>
                  <span className="rc-verified">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    Verifierad köpare
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Swipe indicator for mobile */}
        <div className="rc-swipe-hint">
          Svep för att se fler →
        </div>
      </div>

      <style jsx>{`
        .rc-section {
          padding: 4rem 0;
          background: #0d0818;
          overflow: hidden;
        }
        .rc-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        .rc-scroll-container {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding: 1rem 0.5rem 2rem;
          scroll-snap-type: x mandatory;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
        .rc-scroll-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .rc-card {
          flex: 0 0 350px;
          scroll-snap-align: start;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .rc-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          background: rgba(255, 255, 255, 0.03);
        }
        .rc-image-container {
          width: 100%;
          border-radius: 1rem;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
        }
        .rc-main-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .rc-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 0.25rem;
        }
        .rc-text {
          color: #d4c8ee;
          font-size: 0.95rem;
          line-height: 1.6;
          font-style: italic;
          flex: 1;
        }
        .rc-footer {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .rc-name {
          color: #f0eaff;
          font-weight: 700;
          font-size: 1.05rem;
        }
        .rc-verified {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #8b5cf6;
          font-size: 0.7rem;
          font-weight: 600;
        }
        .rc-swipe-hint {
          text-align: center;
          color: #a899c4;
          font-size: 0.8rem;
          margin-top: 1rem;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .rc-card {
            flex: 0 0 300px;
          }
          .rc-section {
            padding: 3rem 0;
          }
        }
      `}</style>
    </section>
  );
}
