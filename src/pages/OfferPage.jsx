import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const OFFERS = [
  {
    slug: 'tbank',
    name: 'Т-Банк',
    icon: '🏦',
    title: 'Задания с Т-Банком | Заработай Сейчас',
    desc: 'Оформи дебетовую или кредитную карту Т-Банка по инструкции и получи до 1000₽ на карту.',
    steps: ['Перейди по ссылке на сайт Т-Банка', 'Заполни онлайн-заявку на карту', 'Дождись одобрения (обычно 2-5 минут)', 'Сообщи нам — выплата сразу на карту'],
    reward: '500–1000 ₽',
    time: '5 минут',
  },
  {
    slug: 'sber',
    name: 'СберБанк',
    icon: '🏛️',
    title: 'Задания со СберБанком | Заработай Сейчас',
    desc: 'Оформи кредит или открой вклад в СберБанке и получи выплату.',
    steps: ['Перейди по ссылке на предложение Сбера', 'Заполни заявку онлайн', 'Дождись одобрения', 'Получи выплату на карту'],
    reward: '300–2000 ₽',
    time: '5-7 минут',
  },
  {
    slug: 'fonbet',
    name: 'Fonbet',
    icon: '🎰',
    title: 'Задания с Fonbet | Заработай Сейчас',
    desc: 'Зарегистрируйся в букмекерской конторе Fonbet, пополни счёт и получи бонус + выплату от нас.',
    steps: ['Пройди регистрацию на сайте Fonbet', 'Пополни счёт на минимальную сумму', 'Сделай ставку по инструкции', 'Получи выплату'],
    reward: '500–1500 ₽',
    time: '5 минут',
  },
  {
    slug: 'leon',
    name: 'БК Леон',
    icon: '📊',
    title: 'Задания с БК Леон | Заработай Сейчас',
    desc: 'Зарегистрируйся в БК Леон и получи приветственный бонус + нашу выплату.',
    steps: ['Зарегистрируйся на сайте Леон', 'Пополни счёт', 'Выполни условия акции', 'Забери выплату'],
    reward: '400–1200 ₽',
    time: '5 минут',
  },
  {
    slug: 'mfo',
    name: 'МФО',
    icon: '💳',
    title: 'Задания с МФО | Заработай Сейчас',
    desc: 'Оформи микрозайм онлайн в партнёрских МФО. Получи деньги от нас за выполнение.',
    steps: ['Выбери МФО из списка', 'Заполни заявку онлайн (паспорт)', 'Дождись одобрения', 'Получи выплату на карту'],
    reward: '200–500 ₽',
    time: '3-5 минут',
  },
  {
    slug: 'brokers',
    name: 'Брокеры',
    icon: '📈',
    title: 'Задания с брокерами | Заработай Сейчас',
    desc: 'Открой инвестиционный счёт у проверенного брокера и получи выплату.',
    steps: ['Выбери брокера из списка', 'Пройди регистрацию и верификацию', 'Открой ИИС или брокерский счёт', 'Получи выплату'],
    reward: '500–3000 ₽',
    time: '10 минут',
  },
  {
    slug: 'crypto',
    name: 'Крипто',
    icon: '🪙',
    title: 'Задания с криптобиржами | Заработай Сейчас',
    desc: 'Зарегистрируйся на криптобирже, пройди верификацию и получи выплату.',
    steps: ['Зарегистрируйся на бирже', 'Пройди KYC-верификацию', 'Выполни задание по инструкции', 'Получи выплату'],
    reward: '300–1500 ₽',
    time: '5-10 минут',
  },
  {
    slug: 'casino',
    name: 'Казино',
    icon: '🎮',
    title: 'Задания с казино | Заработай Сейчас',
    desc: 'Зарегистрируйся в лицензированном онлайн-казино и получи бонус + выплату.',
    steps: ['Пройди регистрацию', 'Подтверди аккаунт', 'Активируй бонус', 'Получи выплату'],
    reward: '500–5000 ₽',
    time: '5 минут',
  },
]

export default function OfferPage() {
  const { slug } = useParams()
  const offer = OFFERS.find(o => o.slug === slug)

  if (!offer) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
        <Helmet><title>Задание не найдено — Заработай Сейчас</title></Helmet>
        <h2>Задание не найдено</h2>
        <p style={{ margin: '16px 0' }}>
          Такого задания нет. Перейди в список доступных заданий.
        </p>
        <Link to="/offers" className="cta-btn">Ко всем заданиям</Link>
      </div>
    )
  }

  const TG_CHANNEL = 'https://t.me/zarabotq'

  return (
    <>
      <Helmet>
        <title>{offer.title}</title>
        <meta name="description" content={offer.desc} />
        <meta property="og:title" content={offer.title} />
        <meta property="og:description" content={offer.desc} />
      </Helmet>

      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>ЗАРАБОТАЙ</Link>
          <Link to="/" className="header-btn" style={{ textDecoration: 'none' }}>На главную</Link>
        </div>
      </header>

      <section className="hero" style={{ paddingBottom: 60 }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>{offer.icon}</div>
          <h1>
            Заработай на <span>{offer.name}</span>
          </h1>
          <p className="hero-subtitle">{offer.desc}</p>

          <div className="hero-stats" style={{ justifyContent: 'center', marginBottom: 32 }}>
            <div>
              <div className="stat-value">{offer.reward}</div>
              <div className="stat-label">Выплата</div>
            </div>
            <div>
              <div className="stat-value">{offer.time}</div>
              <div className="stat-label">Время выполнения</div>
            </div>
          </div>

          <button className="cta-btn" onClick={() => window.open(TG_CHANNEL, '_blank')}>
            Получить задание
          </button>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-label">Инструкция</div>
          <h2 className="section-title">Что нужно сделать</h2>
          <div className="steps">
            {offer.steps.map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Готов начать?</h2>
          <p>Переходи в Telegram, выбирай задание и получай деньги на карту.</p>
          <button className="cta-btn" onClick={() => window.open(TG_CHANNEL, '_blank')}>
            👉 Начать зарабатывать
          </button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link to="/">Главная</Link>
            <Link to="/offers">Все задания</Link>
            <a href={TG_CHANNEL} target="_blank" rel="noopener">Telegram</a>
          </div>
          <p style={{ marginTop: 16 }}>
            © 2026 — Заработай Сейчас. ИП Евдокимов Артем Алексеевич ИНН 590428520767.
          </p>
        </div>
      </footer>
    </>
  )
}
