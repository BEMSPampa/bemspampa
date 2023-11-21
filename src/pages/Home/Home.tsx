import "./Home.scss"
import pic from '../../assets/unipampapic.jpg';
import HomeCard from "../../components/HomeCard/HomeCard";
import DataMenu from "../../components/DataMenu/DataMenu";
import AboutUs from "../../components/AboutUs/AboutUs";

const Home = () => {
//  <img src={pic}></img>
/*
<div className='home-container'>
        <input placeholder="Search..." className="home-search"/>
        <HomeCard/>
      </div>
      <AboutUs/>*/

  return (
    <div className='homepage'>
      <AboutUs/>
      <DataMenu/>
    </div>
  )
}

export default Home