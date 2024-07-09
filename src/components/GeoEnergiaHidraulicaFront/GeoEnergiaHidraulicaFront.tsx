import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo'
import './GeoEnergiaHidraulicaFront.scss'
import pic1 from '@Assets/geoenergia/hidraulica/1.png'

interface GeoEnergiaFrontProps{
    setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaHidraulicaFront: React.FC<GeoEnergiaFrontProps> = props => {
    const handleClick = () => {
        const element = document.getElementById('gehidraulica-title');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='ge-hidraulicafront-container'>
            <div className='ge-hidraulicafront-logo'>
                <GeoEnergiaLogo setSelected={props.setSelected}/>
            </div>
            
            <img src={pic1} className='ge-hidraulicafront-img'/>

            <div className='ge-hidraulicafront-title'>
                <div>
                    <h1>ENERGIA</h1>
                    <h1>HIDRÁULICA</h1>
                </div>
                <button onClick={() => handleClick()}>SAIBA MAIS</button>
            </div>
        </div>
    )
}

export default GeoEnergiaHidraulicaFront