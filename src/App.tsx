import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import DemoBiopage from './pages/DemoBiopage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing region="ES" />} />
        <Route path="/cuba" element={<Landing region="CU" />} />
        <Route path="/demo" element={<DemoBiopage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
