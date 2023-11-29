import "./Home.scss"
import HomeCard from "../../components/HomeCard/HomeCard";
import DataMenu from "../../components/DataMenu/DataMenu";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
//  <img src={pic}></img>
/*
<input placeholder="Search..." className="home-search"/> dentro do container
      <AboutUs/>*/

      /*<div className='home-container'>
        <HomeCard/>
      </div>
      <AboutUs/>
      <DataMenu/>*/
  return (
    <div className='homepage'>
      <div className='home-container'>
        <HomeCard/>
      </div>
      <AboutUs/>
      <DataMenu/>
    </div>
  )
}

export default Home