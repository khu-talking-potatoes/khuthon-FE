import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ResultPage from './pages/Result'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default App
