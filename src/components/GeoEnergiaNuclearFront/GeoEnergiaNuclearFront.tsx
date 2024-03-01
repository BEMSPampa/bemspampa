import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo'
import './GeoEnergiaNuclearFront.scss'

interface GeoEnergiaFrontProps{
  setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaNuclearFront: React.FC<GeoEnergiaFrontProps> = props => {
    const handleClick = () => {
        const element = document.getElementById('genuclear-title');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="ge-nuclearfront-container">
            <div className='ge-nuclearfront-img'>
              <GeoEnergiaLogo setSelected={props.setSelected}/>
            </div>
            <div className='ge-nuclearfront-title'>
              <div>
                <h1>ENERGIA</h1>
                <h1>NUCLEAR</h1>
              </div>
              <button onClick={() => handleClick()}>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export default GeoEnergiaNuclearFront