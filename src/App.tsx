import Home from './pages/Home/Home.tsx'
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import Data from './pages/Data/Data.tsx'
import WebMap from './pages/WebMap/WebMap.tsx'
import Event from './pages/Event/Event.tsx'
import Error from './pages/Error/Error.tsx'
import { Route, Routes , useLocation  } from 'react-router';
import { useEffect } from 'react'
import Publication from './pages/Publication/Publication.tsx'
import AboutUs from './pages/AboutUs/AboutUs.tsx'
import Info from './pages/Info/Info.tsx'
import GeoEnergia from '@Pages/GeoEnergia/GeoEnergia.tsx'




//GOOGLE ANALYTICS
/*
import ReactGA from 'react-ga';
import { idGoogleAnalytics } from './UI/strings';
*/




function App() {

  /*const footerRef = useRef<HTMLDivElement | null>(null);
  const scrollToFooter = () => { 
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  <Header scrollToFooter={scrollToFooter} />

  <div ref={footerRef}>
        <Footer/>
      </div>*/
  //<Route path='/*' element={<Navigate to='/error' />} />




  //GOOGLE ANALYTICS
  /*
  ReactGA.initialize(idGoogleAnalytics);
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  */



  
  return (
    <>      
      <ScrollToTop/>
      <Header/>
      <Routes>
          <Route path='/' element={<> <Home/> </>} />
          <Route path='/dados' element={<> <Data/> </>} />
          <Route path='/webmapa' element={<> <WebMap/> </>} />
          <Route path='/sobre-nos' element={<> <AboutUs/> </>} />
          <Route path='/publicacoes' element={<> <Publication/> </>} />
          <Route path='/geoenergia' element={<> <GeoEnergia/> </>} />
          <Route path='/info' element={<> <Info/> </>} />
          <Route path='/eventos/:url' element={<> <Event/> </>} />
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
