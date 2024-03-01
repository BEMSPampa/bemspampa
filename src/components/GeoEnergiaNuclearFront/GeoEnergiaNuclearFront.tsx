import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo'
import './GeoEnergiaNuclearFront.scss'
const GeoEnergiaNuclearFront = () => {
    const handleClick = () => {
        const element = document.getElementById('genuclear-title');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="ge-nuclearfront-container">
            <div className='ge-nuclearfront-img'>
              <GeoEnergiaLogo/>
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