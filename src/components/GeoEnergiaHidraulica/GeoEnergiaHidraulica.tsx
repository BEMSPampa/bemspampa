import './GeoEnergiaHidraulica.scss'
import pic2 from '@Assets/geoenergia/hidraulica/2.png'
import pic3 from '@Assets/geoenergia/hidraulica/3.png'
import pic4 from '@Assets/geoenergia/hidraulica/4.png'
import pic5 from '@Assets/geoenergia/hidraulica/5.png'
import pic6 from '@Assets/geoenergia/hidraulica/6.png'

const GeoEnergiaHidraulica = () => {
  return (
    <div className='gehidraulica-container'>
        <h2>ENERGIA HIDRÁULICA</h2>
        <div className='gehidraulica-card1'>
          <p>A <span>energia hidráulica</span> é a energia que vem da <span>água em movimento,</span> como rios, quedas d'água ou até mesmo da água que sai da torneira.</p>
          <img src={pic2} alt="" />
          <p>Imagine um rio com água correndo. Essa água tem energia porque está em movimento. Para aproveitar essa energia, nós construímos algo chamado usina hidrelétrica.</p>
          <img src={pic3} alt="" />
        </div>

        <div className='gehidraulica-cards'>
          <div className='gehidraulica-card2'>
            <p>Uma usina hidrelétrica é como uma grande máquina que usa a energia da água para produzir eletricidade. Para fazer isso, os engenheiros constroem uma barragem, que é uma parede feita deconcreto ou terra, para bloquear a águado rio e criar uma represa.</p>
            <img src={pic4} alt="" />
          </div>

          <div className='gehidraulica-card3'>
              <p>Quando a água fica represada, forma-se um grande lago. Quando a represa é aberta, a água começa a fluir com muita força através de turbinas. As turbinas são como grandes rodas que giram quando a água passa por elas.</p>
              <img src={pic5} alt="" />
          </div>
        </div>

        <div className='gehidraulica-card4'>
          <p>E quando as turbinas giram, elas estão conectadas a geradores, que são máquinas que transformam o movimento em eletricidade.</p>
          <img src={pic6} alt="" />
        </div>
    </div>
  )
}

export default GeoEnergiaHidraulica