import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo'
import './GeoEnergiaEolicaFront.scss'
import pic1 from '@Assets/geoenergia/eolica/1.png'

interface GeoEnergiaFrontProps{
    setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaEolicaFront: React.FC<GeoEnergiaFrontProps> = props => {
    const handleClick = () => {
        const element = document.getElementById('geeolica-title');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='ge-eolicafront-container'>
            <div className='ge-eolicafront-logo'>
                <GeoEnergiaLogo setSelected={props.setSelected}/>
            </div>
            
            <img src={pic1} className='ge-eolicafront-img'/>

            <div className='ge-eolicafront-title'>
                <div>
                    <h1>ENERGIA</h1>
                    <h1>EÓLICA</h1>
                </div>
                <button onClick={() => handleClick()}>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export default GeoEnergiaEolicaFront