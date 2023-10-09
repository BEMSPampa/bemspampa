import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import About from './pages/About/About.tsx'
import WebMapa from './pages/WebMapa/WebMapa.tsx'
import { Route, Routes } from 'react-router';
import { useRef } from 'react'

function App() {

  const footerRef = useRef<HTMLDivElement | null>(null);
  const scrollToFooter = () => { 
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>      
      <Header scrollToFooter={scrollToFooter} />
      <Routes>
          <Route path='/' element={<> <Home/> </>} />
          <Route path='/about' element={<> <About/> </>} />
          <Route path='/webmap' element={<> <WebMapa/> </>} />
      </Routes>

      <div ref={footerRef}>
        <Footer/>
      </div>
    </>
  )
}

export default App
