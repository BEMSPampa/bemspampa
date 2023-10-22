import './About.scss'
import pic from '../../assets/unipampapic.jpg';
const About = () => {
  /*<div className='about-text'>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, similique.</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quaerat ab ducimus asperiores sint magnam fuga, earum quis! Unde culpa consequuntur cum dicta repellat esse sequi provident sapiente, aut est delectus deserunt fuga, reiciendis quasi error facilis. Dolorem fugit vero quod, itaque voluptate aut ipsum rem ullam minima accusantium soluta eius suscipit repellendus nemo impedit ea minus veritatis placeat aspernatur ipsam delectus voluptates totam! Deleniti quasi velit, quos consequatur amet, eligendi itaque porro nobis omnis harum libero qui aspernatur animi possimus ducimus sit quia enim cum. Aliquam eius quam sapiente corporis soluta necessitatibus dolores nulla qui velit rerum! Placeat dolore consequatur commodi, quam possimus molestias asperiores nobis assumenda! Repellendus sunt culpa in praesentium labore numquam, dolorum consequuntur sequi magni voluptas quod totam dignissimos neque sit iste odio, illo ad unde officia reprehenderit iusto amet porro. Dolorem dolores consequuntur quis magni repellat aspernatur rem aut earum impedit harum soluta facilis pariatur est, cupiditate nihil a sed ea voluptates minima incidunt atque repellendus? Incidunt deserunt minima pariatur, at magni in iste nobis temporibus odio eligendi nisi voluptate esse earum, cupiditate illo dolores laudantium sunt sint. Quos, id laborum ut est nesciunt voluptatibus ipsa consequatur iure maxime aliquid voluptates dignissimos ipsum, maiores corrupti, nulla necessitatibus assumenda tenetur libero magni. Ab similique et dolorum hic, sint deserunt doloribus saepe cupiditate sequi debitis minima excepturi molestias mollitia, voluptatibus pariatur dicta provident! Eius quaerat itaque reprehenderit veniam dolore, ut veritatis, consequatur quidem deleniti dignissimos odio officiis repudiandae. Deserunt pariatur perspiciatis qui consequatur provident iusto hic natus. In inventore reiciendis eos quas enim accusamus facere officia rem vitae mollitia, aspernatur itaque quaerat quidem, necessitatibus nesciunt perspiciatis dolore voluptate fuga quisquam optio veritatis. Expedita pariatur sit qui, laborum officiis quos dolores suscipit tempore, est debitis a adipisci provident modi architecto aut dignissimos earum quisquam quia explicabo temporibus vel. Modi magni perspiciatis odit iusto placeat quos at praesentium exercitationem odio et omnis dolorum id voluptatibus minima nesciunt tempore quibusdam accusamus impedit mollitia possimus, earum rem vero assumenda aperiam. Ex id rem fuga quae recusandae nostrum error, libero neque incidunt repellendus obcaecati sint voluptate cumque minima ipsum. Alias in, repellat facere harum ipsa nostrum suscipit voluptate aliquam ea maiores? Repudiandae incidunt dolorem excepturi, corporis blanditiis atque magnam tenetur suscipit ut? Reprehenderit ab dolorum dolore harum, commodi natus voluptas placeat tenetur similique laboriosam earum debitis porro enim cumque at laborum sequi possimus magni sed repellat, labore, blanditiis aperiam. Ut suscipit dicta fugit rerum repellat aperiam architecto accusamus voluptate, error, dignissimos obcaecati omnis autem voluptatem a similique eveniet nesciunt cupiditate quibusdam animi at, cum magni. Eum corrupti reiciendis quos sed accusantium fuga fugiat voluptates reprehenderit provident cupiditate quisquam eaque adipisci, ex aliquam ipsum at earum sapiente esse, vero, voluptate voluptatibus ut. Odit incidunt aliquid, voluptatibus delectus voluptatem pariatur suscipit possimus esse officiis sit quasi. Quo sequi maxime veniam quasi enim quaerat aperiam quos ea rerum atque nihil excepturi quidem natus vel ad eaque, maiores deserunt illum, iste ab aut explicabo. Voluptates aspernatur impedit dolore culpa officiis dolorum corporis eius laborum voluptatum quo.</p>
      </div>*/
  return (
    <section className='about'>
      <div className='about-container'>
        <img src={pic}/>
        
        <div className='about-project'>
          <div className='about-info'>
            <h3>Explicando o projeto</h3>
            <div className='about-p-container'>
              <p>O projeto investiga os recursos energéticos do Bioma Pampa para levantamento de dados do potencial energético da região;</p>
              <p>Será desenvolvido o Atlas BEMSPampa para disponibilização das informações consolidadas;</p>
              <p>A equipe de pesquisa é formada por bolsistas, pesquisadores e voluntários.</p>
            </div>

            <h3>Objetivos</h3>
            <div className='about-p-container'>
              <p>Investigar recursos do <span>Bioma Pampa</span> coincidente com a mesorregião Metade Sul Rio Grandense;</p>
              <p>Levantamento de informações <span>geoelétricas</span> a partir do desenvolvimento do <span>potencial energético</span> regional;</p>
              <p>Contribuir para a <span>transição energética</span> regional e gerar <span>conhecimento cientifico</span>.</p>
            </div>

            <h3>Metodologia</h3>
            <div className='about-p-container'>
              <p>Será realizado processo metodológico na forma de triagem;</p>
              <p>Será construído uma ferramenta computacional constituída de relatórios que consolidam os resultados da pesquisa, com armazenamento na nuvem, disponibilizadas em plataforma digital;</p>
              <p>O conteúdo do Atlas abrange: <span>Históricos anemométricos e solamétricos</span>, <span>Potencial termelétrico</span>, <span>Inventários hidrelétricos</span> e <span>Disponibilidade de fontes alternativas</span>.</p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default About