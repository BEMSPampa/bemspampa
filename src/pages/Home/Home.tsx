import "./Home.scss"

const Home = () => {

  return (
    <div className='home'>
      <div className='container'>

        <div className="aboutmap">
          <h3>WebMapa</h3>
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