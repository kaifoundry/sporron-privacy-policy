import { Suspense } from 'react'
import './App.css'
import Spinner from './components/Spinner'
import { TermsAndConditions } from './pages/termsAndConditions'
import { PrivacyPolicy } from './pages/privacyPolicy'
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
