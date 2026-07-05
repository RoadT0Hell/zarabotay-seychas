import { useEffect } from 'react'
import Faq from './components/Faq.jsx'

const PARTNERS = [
  { icon: '🏦', name: 'Т-Банк', desc: 'Дебетовые и кредитные карты' },
  { icon: '🏛️', name: 'СберБанк', desc: 'Кредиты и вклады' },
  { icon: '🎰', name: 'Fonbet', desc: 'Букмекерская контора' },
  { icon: '📊', name: 'БК Леон', desc: 'Спортивные ставки' },
  { icon: '💳', name: 'МФО', desc: 'Микрозаймы онлайн' },
  { icon: '📈', name: 'Брокеры', desc: 'Инвестиционные платформы' },
  { icon: '🪙', name: 'Крипто', desc: 'Обменники и биржи' },
  { icon: '🎮', name: 'Казино', desc: 'Лицензированные операторы' },
]

const STEPS = [
  { num: '01', title: 'Выбираешь задание', desc: 'Просматривай список доступных заданий от наших партнёров.' },
  { num: '02', title: 'Выполняешь по инструкции', desc: 'Чёткая пошаговая инструкция — справится каждый. Никакой магии.' },
  { num: '03', title: 'Получаешь выплату', desc: 'Деньги приходят на карту сразу после выполнения. Без задержек.' },
]

const BENEFITS = [
  { icon: '⚡', title: 'Мгновенные выплаты', desc: 'Деньги на карту любого банка сразу после выполнения задания.' },
  { icon: '📋', title: 'Простые действия', desc: 'Никаких сложных схем. Регистрация, заявка — 5 минут твоего времени.' },
  { icon: '🔒', title: 'Без рисков', desc: 'Работаем только с официальными партнёрами. Все прозрачно и легально.' },
  { icon: '📈', title: 'Растущий доход', desc: 'Чем больше заданий — тем выше заработок. Доступны бонусы за активность.' },
  { icon: '🎯', title: 'Понятные инструкции', desc: 'Каждый шаг расписан. Просто повторяй и получай деньги.' },
  { icon: '🌐', title: 'Доступно всем', desc: 'Из любой точки России. Нужен только телефон и паспорт.' },
]

const FAQ_DATA = [
  {
    q: 'Что это за проект?',
    a: 'Мы — партнёрская сеть. Компании (банки, букмекеры, МФО) платят нам за привлечение новых клиентов. Мы делимся этими деньгами с тобой. Ты выполняешь действие — мы получаем выплату и отдаём бóльшую часть тебе.',
  },
  {
    q: 'Сколько можно заработать?',
    a: 'За одно задание можно получить от 200 до 5000+ рублей, в зависимости от сложности и партнёра. При регулярном выполнении выходит 30 000–70 000 ₽ в месяц. Активные пользователи зарабатывают больше.',
  },
  {
    q: 'Как я получу деньги?',
    a: 'Выплаты на карту любого банка РФ. Деньги приходят сразу после того, как задание подтверждено. Минималка — от 100 рублей.',
  },
  {
    q: 'Это вообще законно?',
    a: 'Да. Мы работаем в рамках партнёрских программ официальных компаний. Ты добровольно пользуешься их услугами, а мы получаем комиссию за рекомендацию. Никакого мошенничества.',
  },
  {
    q: 'Какие задания бывают?',
    a: 'Оформить дебетовую карту, зарегистрироваться в букмекерской конторе, оставить заявку на кредит, пополнить баланс, открыть вклад — всё по инструкции. Выбираешь то, что удобно.',
  },
  {
    q: 'Сколько времени занимает одно задание?',
    a: 'В среднем 3–7 минут. Некоторые задания делаются за 1–2 минуты. Инструкция ведёт тебя по шагам.',
  },
  {
    q: 'Нужно ли вкладывать свои деньги?',
    a: 'Некоторые задания требуют минимальных вложений (например, пополнение на 100₽), но сумма возвращается с выплатой. Есть и полностью бесплатные задания.',
  },
  {
    q: 'Куда обращаться, если есть вопросы?',
    a: 'Telegram-канал и чат поддержки. Ссылка — ниже на странице. Отвечаем быстро.',
  },
]

function scrollToHash() {
  const hash = window.location.hash
  if (hash) {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function App() {
  useEffect(() => {
    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  const TG_CHANNEL = 'https://t.me/zarabotq'

  const handleCta = () => {
    window.open(TG_CHANNEL, '_blank')
  }

  const handleTgChannel = () => {
    window.open(TG_CHANNEL, '_blank')
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <span className="logo">ЗАРАБОТАЙ</span>
          <button className="header-btn" onClick={handleCta}>Приступить</button>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🔥 25 000+ пользователей уже с нами</div>
          <h1>
            Забери свой кусок<br />
            <span>рекламного бюджета</span>
          </h1>
          <p className="hero-subtitle">
            Банки, букмекеры и финансовые сервисы тратят <strong>100+ миллиардов рублей</strong> на рекламу.
            Они платят за новых клиентов. <strong>Стань клиентом — получи деньги.</strong>
          </p>
          <button className="cta-btn" onClick={handleCta}>
            👉 Забрать свой кусок
          </button>
          <div className="hero-stats">
            <div>
              <div className="stat-value">25 000+</div>
              <div className="stat-label">Пользователей</div>
            </div>
            <div>
              <div className="stat-value">10 мин</div>
              <div className="stat-label">Среднее время задания</div>
            </div>
            <div>
              <div className="stat-value">200–5000₽</div>
              <div className="stat-label">За одно задание</div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section id="about">
        <div className="container">
          <div className="section-label">Статистика</div>
          <h2 className="section-title">Цифры, которые говорят сами за себя</h2>
          <p className="section-desc">
            Компании ежегодно вливают огромные бюджеты в рекламу. Теперь свою часть с этого бюджета можешь забрать и ты.
          </p>
          <div className="numbers-grid">
            <div className="number-card">
              <div className="stat-value">100+ млрд ₽</div>
              <div className="stat-label">Годовой рекламный бюджет партнёров</div>
            </div>
            <div className="number-card">
              <div className="stat-value">25 000+</div>
              <div className="stat-label">Довольных пользователей</div>
            </div>
            <div className="number-card">
              <div className="stat-value">50+</div>
              <div className="stat-label">Активных партнёров</div>
            </div>
            <div className="number-card">
              <div className="stat-value">97%</div>
              <div className="stat-label">Положительных отзывов</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="container">
          <div className="section-label">Как это работает</div>
          <h2 className="section-title">Три простых шага</h2>
          <p className="section-desc">
            Никакой магии. Только конкретные действия и реальные деньги.
          </p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step-card" key={s.num}>
                <div className="step-number">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section>
        <div className="container">
          <div className="section-label">Партнёры</div>
          <h2 className="section-title">С кем мы работаем</h2>
          <p className="section-desc">
            Только официальные компании с проверенными партнёрскими программами.
          </p>
          <div className="partners-grid">
            {PARTNERS.map((p) => (
              <div className="partner-card" key={p.name}>
                <div className="partner-icon">{p.icon}</div>
                <div className="partner-name">{p.name}</div>
                <div className="partner-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <div className="container">
          <div className="section-label">Преимущества</div>
          <h2 className="section-title">Почему выбирают нас</h2>
          <p className="section-desc">
            Мы честно делимся с тобой деньгами, которые компании тратят на привлечение клиентов.
          </p>
          <div className="benefits-grid">
            {BENEFITS.map((b) => (
              <div className="benefit-card" key={b.title}>
                <div className="benefit-icon">{b.icon}</div>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Часто задаваемые вопросы</h2>
          <p className="section-desc">
            Всё, что ты хотел спросить, но стеснялся.
          </p>
          <Faq items={FAQ_DATA} />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ты — причина, по которой существуют рекламные бюджеты</h2>
          <p>
            Хочешь ты этого или нет — ты всё равно станешь чьим-то клиентом.
            Так почему бы не получить за это деньги?
          </p>
          <div>
            <button className="cta-btn" onClick={handleCta}>
              👉 Забрать свой кусок
            </button>
            <button className="cta-btn cta-btn-secondary" onClick={handleTgChannel}>
              📢 Telegram-канал
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#about">О проекте</a>
            <a href="#faq">FAQ</a>
            <a href={TG_CHANNEL} target="_blank" rel="noopener">Поддержка</a>
            <a href="https://docs.google.com/document/d/1dsPg7DV2dq-M2QYSzPzvydwHi8yp_toyRKC01XPw2xg/edit?usp=sharing" target="_blank" rel="noopener">Публичная оферта</a>
          </div>
          <a className="tg-link" href={TG_CHANNEL} target="_blank" rel="noopener">
            📢 t.me/zarabotq
          </a>
          <p style={{ marginTop: 16 }}>
            © 2026 — Заработай Сейчас. ИП Евдокимов Артем Алексеевич ИНН 590428520767. Не является финансовой или инвестиционной рекомендацией.
          </p>
        </div>
      </footer>
    </>
  )
}
