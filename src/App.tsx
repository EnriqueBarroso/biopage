import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing region="ES" />} />
        <Route path="/cuba" element={<Landing region="CU" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
