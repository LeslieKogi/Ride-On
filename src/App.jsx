import react from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ViewRequestPage from './pages/ViewRequestPage'


function App() {
  

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path='/requests' element={<ViewRequestPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
