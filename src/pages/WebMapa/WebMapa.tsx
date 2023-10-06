import "./WebMapa.scss"
import point from '../../assets/point.png';

const WebMapa = () => {
  return (
    <section className='webmap'>
      <div className='webmap-container'>

        <div className="about-map">
          <div>
            <img src={point}/>
            <h3>WebMapa</h3>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sit, doloribus rem nemo facere consequuntur sunt unde ducimus eius veritatis ullam recusandae hic, cum dolore odit cupiditate. Quidem est accusamus sunt suscipit dolor deleniti blanditiis accusantium expedita voluptatem quibusdam repellendus, ratione recusandae porro, eaque dignissimos voluptates aspernatur qui adipisci ipsam tenetur! Blanditiis, incidunt maiores dolorem aliquam iure perferendis explicabo, quas laborum voluptates architecto, corporis nam eius ipsa! Hic, possimus eum enim vitae necessitatibus debitis! Ea blanditiis totam nisi corrupti eaque praesentium, dolore perspiciatis ab tempore. Quibusdam saepe tempore ex dignissimos labore fugit ipsum alias laborum cum! Commodi molestiae laborum sequi dolores. Minus eos sint non inventore at dolor, ipsa sit porro eligendi aliquam mollitia nemo omnis necessitatibus? Necessitatibus reprehenderit hic ipsa iusto fugit quae, veritatis architecto maxime laborum dolor nobis modi tenetur aliquam tempora in distinctio esse eos, voluptatibus, recusandae quas est? Nisi aut, facilis perferendis laborum expedita eius rem asperiores quasi incidunt repellendus minus non doloremque modi nobis dolores. Accusantium quasi ducimus rem cum eligendi itaque dolorum vitae iure eveniet culpa velit corporis in dicta ratione consequuntur, laborum ab libero totam nihil deleniti fugit. Alias laborum, magnam dolorum at quibusdam blanditiis iusto consequuntur sequi animi provident eum tempore doloremque.</p>
        </div>
        <div className="line"/>
        <iframe
          title="Mapa"
          src="/bemspampa/MapaAreaContemplada.html"
        ></iframe>

      </div>
    </section>
  )
}

export default WebMapa