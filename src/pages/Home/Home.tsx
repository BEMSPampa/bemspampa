import "./Home.scss"
import pic from '../../assets/unipampapic.jpg';
import HomeCard from "../../components/HomeCard/HomeCard";

const Home = () => {
//  <img src={pic}></img>

  return (
    <div className='home-container'>
      <input placeholder="Search..." className="home-search"/>
      <HomeCard/>
    </div>
  )
}

export default Home