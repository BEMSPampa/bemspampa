import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import About from './pages/About/About.tsx'
import WebMapa from './pages/WebMapa/WebMapa.tsx'
import { Route, Routes } from 'react-router';

function App() {
  
  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' element={<> <Home/> </>} />
          <Route path='/about' element={<> <About/> </>} />
          <Route path='/webmap' element={<> <WebMapa/> </>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
