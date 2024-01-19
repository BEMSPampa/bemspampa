import "./Home.scss"
import HomeCard from "../../components/HomeCard/HomeCard";
import DataMenu from "../../components/DataMenu/DataMenu";
import About from "../../components/About/About";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className='homepage'>
      <div className='home-container'>
        <HomeCard/>
      </div>
      <Slider/>
      <About/>
      <DataMenu/>
    </div>
  )
}

export default Home