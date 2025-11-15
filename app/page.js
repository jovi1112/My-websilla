'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    let count = localStorage.getItem('visitorCount') || 0
    count = parseInt(count) + 1
    localStorage.setItem('visitorCount', count)
    setVisitorCount(count)
  }, [])

  return (
    <div style={{
      fontFamily: "'Nunito', sans-serif",
      background: 'linear-gradient(135deg, #e6f0ff 0%, #f0f8ff 100%)',
      minHeight: '100vh',
      color: '#4A5568'
    }}>
      <header style={{
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(5px)',
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 0'
          }}>
            <div style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#779ECB',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-cloud"></i>
              Chill Space
              <span style={{
                background: '#C1E1C1',
                color: '#4A5568',
                padding: '6px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                marginLeft: '10px'
              }}>SIN PRESIONES</span>
            </div>
            <button onClick={() => window.open('https://discord.gg/P6GMvVbj', '_blank')} style={{
              padding: '8px 20px',
              borderRadius: '50px',
              fontWeight: '600',
              background: '#779ECB',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Entrar Tranquil@
            </button>
          </div>
        </div>
      </header>

      <section style={{ padding: '130px 0 60px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div>
            <img 
              src="https://cdn.discordapp.com/icons/1436879314544103558/dc86943efd6024aef70b8c204256ed8e.png?size=2048" 
              alt="Chill Community 2025" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '20px',
                margin: '0 auto 30px',
                border: '3px solid #C1E1C1',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            />
            <div style={{
              background: 'linear-gradient(45deg, #C1E1C1, #A7C7E7)',
              color: '#4A5568',
              padding: '8px 20px',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '700',
              display: 'inline-block',
              marginBottom: '20px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              Fundada en 2025
            </div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#4A5568', fontWeight: '700' }}>
              Comunidad Chill & Relajada
            </h1>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '25px',
              color: '#4A5568',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Un espacio sin prisas donde puedes ser tú mismo. Sin actividad obligatoria, sin presión.
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '15px 25px',
              borderRadius: '15px',
              margin: '20px auto',
              maxWidth: '300px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              borderLeft: '4px solid #C1E1C1'
            }}>
              <h3 style={{ fontSize: '0.9rem', marginBottom: '5px', color: '#4A5568', opacity: '0.8' }}>
                Personas que han visto esta página:
              </h3>
              <div style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#779ECB',
                fontFamily: 'Courier New, monospace'
              }}>
                {visitorCount.toLocaleString()}
              </div>
            </div>

            <a href="https://discord.gg/P6GMvVbj" target="_blank" style={{
              background: '#5865F2',
              color: 'white',
              padding: '14px 30px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '15px',
              fontSize: '1rem',
              boxShadow: '0 6px 20px rgba(88, 101, 242, 0.2)'
            }}>
              <i className="fab fa-discord"></i>
              Unirse cuando quieras
            </a>
          </div>
        </div>
      </section>

      <footer style={{
        background: '#4A5568',
        color: 'white',
        padding: '30px 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '15px'
          }}>
            <i className="fas fa-cloud"></i>
            Chill Space 2025
          </div>
          <p>Un espacio tranquilo en internet para gente tranquila</p>
          <p style={{ opacity: '0.7', fontSize: '0.9rem', marginTop: '10px' }}>
            Fundada en 2025 • Sin prisa, sin pausa
          </p>
        </div>
      </footer>
    </div>
  )
}
