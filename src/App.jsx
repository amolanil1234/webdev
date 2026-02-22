import React from 'react'
import './App.css'

const artForms = [
  { name: 'Lippan Art', desc: 'Transform simple surfaces into textured masterpieces.', icon: '◇' },
  { name: 'Texture Art', desc: 'Explore touch and dimension through layered creativity.', icon: '◆' },
  { name: '3D Art', desc: 'Bring ideas to life with depth and imagination.', icon: '▣' },
  { name: 'Boho Art', desc: 'Free-spirited patterns and natural, earthy expression.', icon: '✿' },
  { name: 'Doodle Art', desc: 'Playful lines and whimsical stories on paper.', icon: '✎' },
  { name: 'Bottle Painting', desc: 'Turn everyday bottles into beautiful keepsakes.', icon: '◐' },
  { name: 'Fabric Painting', desc: 'Wearable art and soft surfaces come alive.', icon: '▤' },
  { name: 'Pot Painting', desc: 'Classic ceramics with a personal, colorful touch.', icon: '◎' },
  { name: 'Fluid Art', desc: 'Flowing colors and surprising, magical results.', icon: '◉' },
]

const trustPoints = [
  'Safe and child-friendly environment',
  'Small batch sizes for personal attention',
  'All materials provided',
  'Beginner-friendly and fun',
  'Encouraging and positive teaching style',
  'Final exhibition or showcase for kids',
]

const testimonials = [
  { text: 'My child\'s confidence has grown so much! She looks forward to every session.', author: 'Parent of Anaya, 8', stars: 5, image: 'testimonial-1.jpg' },
  { text: 'The best decision we made this summer. So much more than just art — it\'s expression.', author: 'Parent of Rohan, 10', stars: 5, image: 'testimonial-2.jpg' },
  { text: 'Small batches meant real attention. My son finally found something he loves beyond screens.', author: 'Parent of Arjun, 7', stars: 5, image: 'testimonial-3.jpg' },
]

// Add your photo filenames here (place files in public/images/)
const galleryImages = [
  'image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg',
  'image6.jpeg', 'image7.jpeg', 'image8.jpeg', 'image9.jpeg', 'image10.jpeg',
]
const heroImage = 'hero.jpg' // optional: kids painting / natural light

// Web3Forms: submissions go to amol.eng@gmail.com
const WEB3FORMS_ACCESS_KEY = 'eed602cb-cb07-439c-a33d-bb3bd5001a39'
const FORM_READY = true

export default function App() {
  const base = import.meta.env.BASE_URL // e.g. '/webdev/' on GitHub Pages so images load
  return (
    <div className="app">
      {/* Hero */}
      <header className="hero texture-bg">
        <div className="hero-bg-pattern" aria-hidden />
        <img
          src={`${base}images/${heroImage}`}
          alt="Children enjoying art camp"
          className="hero-photo"
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="container hero-inner">
          <p className="hero-badge">✨ Summer Art Camp</p>
          <h1 className="hero-title">Unleash Your Child's Creativity This Summer</h1>
          <p className="hero-sub">Where imagination meets colors, textures, and joyful expression.</p>
          <p className="hero-para">
            This summer, give your child more than just activities — give them confidence, creativity,
            and a space to express their unique imagination through hands-on art experiences.
          </p>
          <div className="hero-cta">
            <a href="#enroll" className="btn btn-primary">Enroll Now</a>
            <a href="#contact" className="btn btn-secondary">Book a Free Demo Class</a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section about" id="about">
        <div className="container">
          <div className="paint-stroke" />
          <span className="section-badge" aria-hidden>💛</span>
          <h2 className="section-title">About Our Summer Art Camp</h2>
          <p className="section-subtitle">Warm, reassuring, and nurturing — for every young artist.</p>
          <div className="about-content">
            <p>
              Our camp is designed to help children build creativity and focus, improve fine motor skills,
              and develop patience and artistic confidence. Through guided projects, kids learn to express
              emotions through art and enjoy meaningful time away from screens in a supportive, joyful space.
            </p>
            <ul className="about-list">
              <li>Build creativity and focus</li>
              <li>Improve fine motor skills</li>
              <li>Develop patience and artistic confidence</li>
              <li>Express emotions through art</li>
              <li>Reduce screen time meaningfully</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Art Forms */}
      <section className="section art-forms" id="art-forms">
        <div className="container texture-bg art-forms-inner">
          <div className="paint-stroke" />
          <span className="section-badge" aria-hidden>🎨</span>
          <h2 className="section-title">Art Forms We Offer</h2>
          <p className="section-subtitle">Something magical for every interest.</p>
          <div className="art-grid">
            {artForms.map((item, i) => (
              <article key={i} className="art-card">
                <span className="art-icon">{item.icon}</span>
                <h3 className="art-name">{item.name}</h3>
                <p className="art-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Love */}
      <section className="section why-parents" id="why">
        <div className="container">
          <div className="why-decoration" aria-hidden />
          <div className="paint-stroke" />
          <span className="section-badge" aria-hidden>💚</span>
          <h2 className="section-title">Why Parents Love This Camp</h2>
          <p className="section-subtitle">Trust, care, and results.</p>
          <div className="trust-grid">
            {trustPoints.map((point, i) => (
              <div key={i} className="trust-card">
                <span className="trust-check">✓</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camp Details */}
      <section className="section camp-details" id="details">
        <div className="container">
          <div className="paint-stroke" />
          <h2 className="section-title">Camp Details</h2>
          <p className="section-subtitle">Everything you need to know.</p>
          <div className="details-grid">
            <div className="detail-card">
              <h4>Age Groups</h4>
              <p>5–8 years · 9–12 years · 13–15 years</p>
            </div>
            <div className="detail-card">
              <h4>Batch Timings</h4>
              <p>Morning: 10:00 AM – 12:00 PM<br />Afternoon: 2:00 PM – 4:00 PM</p>
            </div>
            <div className="detail-card">
              <h4>Duration</h4>
              <p>4 weeks · 3 sessions per week</p>
            </div>
            <div className="detail-card">
              <h4>Location</h4>
              <p>Offline (in-studio) · Online option available</p>
            </div>
            <div className="detail-card highlight">
              <h4>Fees</h4>
              <p>Contact for current batch pricing. All materials included.</p>
            </div>
            <div className="detail-card highlight early-bird">
              <h4>Early Bird</h4>
              <p>Enroll before the deadline and save. Limited seats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="paint-stroke" />
          <span className="section-badge" aria-hidden>📸</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Joy, colors, and proud creations.</p>
          <div className="gallery-grid">
            {galleryImages.map((filename, i) => (
              <div key={filename} className="gallery-item" style={{ '--delay': i + 1 }}>
                <img
                  src={`${base}images/${filename}`}
                  alt={`Camp gallery ${i + 1}`}
                  className="gallery-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling?.classList.add('show')
                  }}
                />
                <div className="gallery-placeholder">
                  <span>Art & smiles</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-sec" id="testimonials">
        <div className="container">
          <div className="paint-stroke" />
          <span className="section-badge" aria-hidden>⭐</span>
          <h2 className="section-title">What Parents Say</h2>
          <p className="section-subtitle">Real stories from real families.</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial-card">
                <div className="testimonial-image-wrap">
                  <img
                    src={`${base}images/${t.image}`}
                    alt=""
                    className="testimonial-image"
                    onError={(e) => e.target.parentElement?.classList.add('hide')}
                  />
                </div>
                <div className="stars" aria-label={`${t.stars} stars`}>
                  {'★'.repeat(t.stars)}
                </div>
                <p>"{t.text}"</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Enrollment */}
      <section className="section contact texture-bg" id="contact">
        <div className="container">
          <div className="paint-stroke" />
          <h2 className="section-title">Reserve Your Child's Spot Today</h2>
          <p className="contact-lead">
            Seats are limited. Let your child explore their artistic side this summer.
          </p>
          <div className="contact-wrap">
            <div className="contact-info">
              <a href="tel:+919834842052" className="contact-link">📞 +91 98348 42052</a>
              <a href="https://wa.me/919834842052" className="btn btn-primary whatsapp" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <div className="social-links">
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Facebook">Facebook</a>
              </div>
            </div>
            {FORM_READY ? (
              <form
                className="enroll-form"
                id="enroll"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="Summer Art Camp – Reserve a spot" />
                <input type="text" name="parent_name" placeholder="Parent's name" required />
                <input type="tel" name="phone" placeholder="Phone" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="child_name_age" placeholder="Child's name & age" required />
                <button type="submit" className="btn btn-primary btn-full">Reserve a Spot</button>
              </form>
            ) : (
              <div className="enroll-form enroll-form-fallback">
                <p className="enroll-fallback-text">Reserve your spot by calling or WhatsApp — we'll get you registered.</p>
                <a href="tel:+919834842052" className="btn btn-primary btn-full">Call +91 98348 42052</a>
                <a href="https://wa.me/919834842052" className="btn btn-secondary btn-full" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="footer-heart">Made with care for creative families 💛</p>
          <p className="footer-copy">© Summer Art Camp for Kids</p>
        </div>
      </footer>
    </div>
  )
}
