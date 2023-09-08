import { useState } from 'react'
import Home from './pages/home'
import Add from './pages/Add'
import './App.css'
const pages = {
  home: 1,
  new: 2
}

function App() {
  const [page, setPage] = useState(pages.home);
  return (
    <main>
      {page == pages.home && <Home addItem={() => setPage(pages.new)} />}
      {page == pages.new && <Add backToHome={() => setPage(pages.home)} />}
    </main>
  )
}

export default App
