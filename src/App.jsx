import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import OfferPage from './pages/OfferPage.jsx'
import OffersList from './pages/OffersList.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<OffersList />} />
      <Route path="/offer/:slug" element={<OfferPage />} />
    </Routes>
  )
}
