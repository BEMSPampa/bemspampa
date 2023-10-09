import "./Home.scss"
import pic from '../../assets/unipampapic.jpg';

const Home = () => {

  return (
    <div className='home'>
    <img src={pic}></img>
      <div className="home-content" id="#teste">

        <h2>Em desenvolvimento</h2>

        <div className="cards">
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>
          <div className="card">

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home