import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo';
import './GeoEnergiaTermoFront.scss'
import pic1 from "@Assets/geoenergia/termo/termo1.png"

interface GeoEnergiaFrontProps{
  setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaTermoFront: React.FC<GeoEnergiaFrontProps> = props => {
  const handleClick = () => {
    const element = document.getElementById('getermo-title');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ge-termofront-container">
        <div className='ge-termofront-img'>
          <GeoEnergiaLogo setSelected={props.setSelected}/>
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