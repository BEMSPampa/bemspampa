import "./Home.scss"
import point from '../../assets/point.png';

const Home = () => {

  return (
    <div className='home'>
      <div className='container'>

        <div className="aboutmap">
          <div>
            <img src={point}/>
            <h3>WebMapa</h3>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut justo eget arcu cursus varius. Quisque suscipit lacus at eleifend. </p>
        </div>
        <div className="line"/>
        <iframe
          title="Mapa"
          src="/bemspampa/MapaAreaContemplada.html"
        ></iframe>

      </div>
    </div>
  )
}

export default Home