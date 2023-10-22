import "./Home.scss"
import pic from '../../assets/unipampapic.jpg';

const Home = () => {

  return (
    <div className='home'>
    <img src={pic}></img>
      <div className="home-container" id="#teste">

        <h2>Em desenvolvimento</h2>

        <div className="cards">
          <div className="card"/>
          <div className="card"/>
          <div className="card"/>
          <div className="card"/>
          <div className="card"/>
        </div>
      </div>
    </div>
  )
}

export default Home