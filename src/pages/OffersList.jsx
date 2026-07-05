import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const OFFERS = [
  { icon: '🏦', name: 'Т-Банк', desc: 'Дебетовые и кредитные карты', slug: 'tbank', reward: '500–1000 ₽' },
  { icon: '🏛️', name: 'СберБанк', desc: 'Кредиты и вклады', slug: 'sber', reward: '300–2000 ₽' },
  { icon: '🎰', name: 'Fonbet', desc: 'Букмекерская контора', slug: 'fonbet', reward: '500–1500 ₽' },
  { icon: '📊', name: 'БК Леон', desc: 'Спортивные ставки', slug: 'leon', reward: '400–1200 ₽' },
  { icon: '💳', name: 'МФО', desc: 'Микрозаймы онлайн', slug: 'mfo', reward: '200–500 ₽' },
  { icon: '📈', name: 'Брокеры', desc: 'Инвестиционные платформы', slug: 'brokers', reward: '500–3000 ₽' },
  { icon: '🪙', name: 'Крипто', desc: 'Обменники и биржи', slug: 'crypto', reward: '300–1500 ₽' },
  { icon: '🎮', name: 'Казино', desc: 'Лицензированные операторы', slug: 'casino', reward: '500–5000 ₽' },
]

const TG_CHANNEL = 'https://t.me/zarabotq'

export default function OffersList() {
  return (
    <>
      <Helmet>
        <title>Все задания — Заработай Сейчас</title>
        <meta name="description" content="Список доступных заданий от всех партнёров. Выбери своё и получи выплату на карту." />
      </Helmet>

      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>ЗАРАБОТАЙ</Link>
          <Link to="/" className="header-btn" style={{ textDecoration: 'none' }}>На главную</Link>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1>Все <span>задания</span></h1>
          <p className="hero-subtitle">
            Выбери партнёра, выполни инструкцию и получи деньги на карту.
          </p>
          <button className="cta-btn" onClick={() => window.open(TG_CHANNEL, '_blank')}>
            👉 Перейти в Telegram
          </button>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="partners-grid">
            {OFFERS.map((p) => (
              <Link to={`/offer/${p.slug}`} className="partner-card" key={p.slug} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="partner-icon">{p.icon}</div>
                <div className="partner-name">{p.name}</div>
                <div className="partner-desc">{p.desc}</div>
                <div style={{ marginTop: 8, fontWeight: 700, color: '#22c55e' }}>{p.reward}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link to="/">Главная</Link>
            <a href={TG_CHANNEL} target="_blank" rel="noopener">Telegram</a>
          </div>
          <p style={{ marginTop: 16 }}>
            © 2026 — Заработай Сейчас. ООО ОРИОН ИНН 7720951034, ООО АТЛАС ЛЮКС 9727100734
          </p>
        </div>
      </footer>
    </>
  )
}
