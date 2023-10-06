import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import About from './pages/About/About.tsx'
import WebMapa from './pages/WebMapa/WebMapa.tsx'
import { Route, Routes } from 'react-router';

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<><Header />  <Home/>  <Footer /></>} />
          <Route path='/about' element={<><Header />  <About/>  <Footer /></>} />
          <Route path='/webmap' element={<><Header />  <WebMapa/>  <Footer /></>} />
      </Routes>
    </>
  )
}

export default App
