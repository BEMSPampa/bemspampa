import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo';
import './GeoEnergiaTermoFront.scss'
import pic1 from "@Assets/geoenergia/termo/termo1.png"

const GeoEnergiaTermoFront = () => {
  const handleClick = () => {
    const element = document.getElementById('getermo-title');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ge-termofront-container">
        <div className='ge-termofront-img'>
          <GeoEnergiaLogo/>
          <img src={pic1} alt="" />
        </div>
        <div className='ge-termofront-title'>
          <div>
            <h1>ENERGIA</h1>
            <h1>TERMOELÉTRICA</h1>
          </div>
          <button onClick={() => handleClick()}>SAIBA MAIS</button>
        </div>
    </div>
  )
}

export default GeoEnergiaTermoFront