import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo';
import './GeoEnergiaSolarFront.scss'

interface GeoEnergiaFrontProps{
  setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaSolarFront: React.FC<GeoEnergiaFrontProps> = props => {
    const handleClick = () => {
        const element = document.getElementById('gesolar-title');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="ge-solarfront-container">
            <div className='ge-solarfront-img'>
              <GeoEnergiaLogo setSelected={props.setSelected}/>
            </div>
            <div className='ge-solarfront-title'>
              <div>
                <h1>ENERGIA</h1>
                <h1>SOLAR</h1>
              </div>
              <button onClick={() => handleClick()}>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export default GeoEnergiaSolarFront