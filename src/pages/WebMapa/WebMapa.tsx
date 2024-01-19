import "./WebMapa.scss"

const WebMapa = () => {
  return (
    <section className='webmap'>
      <div className='webmap-container'>
        <div className="about-map">
          <div>
            <h3>WebMapa</h3>
          </div>
        </div>
        <div className="line"/>
        <iframe
          title="Mapa"
          src="/bemspampa/map.html"
        ></iframe>
      </div>
    </section>
  )
}

export default WebMapa