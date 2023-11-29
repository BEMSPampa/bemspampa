import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import Data from './pages/Data/Data.tsx'
import WebMapa from './pages/WebMapa/WebMapa.tsx'
import { Route, Routes } from 'react-router';

function App() {

  /*const footerRef = useRef<HTMLDivElement | null>(null);
  const scrollToFooter = () => { 
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  //
<Header scrollToFooter={scrollToFooter} />

<div ref={footerRef}>
        <Footer/>
      </div>*/
  return (
    <>      
      <Header/>
      <Routes>
          <Route path='/' element={<> <Home/> </>} />
          <Route path='/data' element={<> <Data/> </>} />
          <Route path='/webmap' element={<> <WebMapa/> </>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
