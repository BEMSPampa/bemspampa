import './GeoEnergiaEolica.scss';
import pic1 from '@Assets/geoenergia/eolica/2.png';
import pic2 from '@Assets/geoenergia/eolica/3.png';
import pic3 from '@Assets/geoenergia/eolica/4.png';
import pic4 from '@Assets/geoenergia/eolica/5.png';

const GeoEnergiaEolica = () => {
  return (
    <div className='geeolica-container'>
        <h2>ENERGIA EÓLICA</h2>

        <div className='geeolica-cards'>
          <div className='geeolica-card1'>
            <p>Sabe quando você está em um lugar <span>bem ventoso</span> e sente o vento forte batendo no seu rosto? </p>
            <img src={pic1} alt="" />
            <p>Bem, <span>a energia eólica vem desse vento!</span></p>
          </div>

          <div className='geeolica-card2'>
            <p>E a <span>usina eólica</span> é como um lugar onde esse vento é usado para fazer algo muito legal: <span>gerar energia elétrica!</span></p>
            <img src={pic2} alt="" />
            <p>A usina eólica é composta por <span>aerogeradores</span>. São <span>estruturas altas,</span> com <span>pás enormes</span> que <span>giram quando o vento bate nelas.</span></p>
          </div>
        </div>

        <div className='geeolica-card3'>
          <p>Quando o vento sopra, essas hélices começam a girar, e quando giram, movem um gerador. Esse gerador é como um imã gigante que produz eletricidade.</p>
          <img src={pic3} alt="" />
        </div>

        <div className='geeolica-card4'>
          <p>Toda essa eletricidade que é gerada pelas turbinas eólicas é levada por fios e cabos para os lugares onde precisamos de eletricidade, como nossas casas, escolas e outros prédios.</p>
          <img src={pic4} alt="" />
        </div>
    </div>
  )
}

export default GeoEnergiaEolica