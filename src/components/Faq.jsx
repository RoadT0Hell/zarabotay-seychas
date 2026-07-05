import { useState } from 'react'

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          className={`faq-item${openIndex === i ? ' open' : ''}`}
          key={i}
          onClick={() => toggle(i)}
        >
          <div className="faq-question">
            {item.q}
            <span className="faq-arrow">▼</span>
          </div>
          <div className="faq-answer">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
