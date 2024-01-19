import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import Data from './pages/Data/Data.tsx'
import WebMapa from './pages/WebMapa/WebMapa.tsx'
import Event from './pages/Event/Event.tsx'
import Error from './pages/Error/Error.tsx'
import { Route, Routes , useLocation  } from 'react-router';
import { useEffect } from 'react'

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
  //<Route path='/*' element={<Navigate to='/error' />} />
  return (
    <>      
      <ScrollToTop/>
      <Header/>
      <Routes>
          <Route path='/' element={<> <Home/> </>} />
          <Route path='/data' element={<> <Data/> </>} />
          <Route path='/webmap' element={<> <WebMapa/> </>} />
          <Route path='/event/:url' element={<> <Event/> </>} />

          <Route path='/*' element={<> <Error/> </>} />
      </Routes>
      <Footer/>
    </>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default App
