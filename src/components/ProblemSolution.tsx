'use client';

export default function ProblemSolution() {
  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(180deg, #0d0818 0%, #160d2a 100%)',
    }}>
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
      }}>
        {/* Text */}
        <div>
          <span style={{
            background: 'rgba(139,92,246,0.15)',
            border: '1px solid rgba(139,92,246,0.3)',
            color: '#c4b5fd',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.35rem 1rem',
            borderRadius: '100px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '1.5rem',
          }}>
            Känner du igen det här?
          </span>

          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#f0eaff',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>
            När kroppen är trött men <em style={{ fontStyle: 'italic', color: '#c4b5fd' }}>hjärnan vägrar stänga av</em>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              'Du vet känslan. Du är slut i kroppen — men så fort huvudet landar på kudden börjar tankarna gå.',
              'Dagens stress. Morgondagens måsten. Timräkningen. Frustrationen.',
              'Och till slut handlar kvällen inte bara om sömnbrist — utan om att du redan börjar oroa dig för hur du ska må imorgon.',
            ].map((text, i) => (
              <p key={i} style={{
                color: '#a899c4',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0,
              }}>
                {text}
              </p>
            ))}
          </div>

          <div style={{
            marginTop: '2.5rem',
            padding: '1.5rem',
            background: 'rgba(139,92,246,0.08)',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '1rem',
            borderLeft: '3px solid #8b5cf6',
          }}>
            <p style={{
              color: '#d4c8ee',
              fontSize: '1rem',
              lineHeight: 1.7,
              margin: 0,
              fontStyle: 'italic',
            }}>
              Koala Ritual Sleep Gummies är skapade just för dessa nätter. För att hjälpa hjärnan varva ner och kroppen att hitta ro — utan att du känner dig tung eller förstörd dagen efter.
            </p>
          </div>
        </div>

      </div>


    </section>
  );
}
