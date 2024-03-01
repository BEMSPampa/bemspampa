import { useState } from 'react';
import './GeoEnergiaLogo.scss'

interface GeoEnergiaFrontProps{
    setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}

const GeoEnergiaLogo: React.FC<GeoEnergiaFrontProps> = props => {
    
    const [isActive, setIsActive] = useState(false);
    const options: string[] = ["Nuclear", "Solar", "Termoelétrica"];
    //, "Hidrelétrica", "Eólica"
    return (
        <div className='gelogo-container'>
            <button onClick={() => setIsActive(!isActive)}>Geo<span>Energia</span></button>
            {isActive && <div className='gelogo-content'>
                {options.map(option=> (
                    <div className='gelogo-item' key={option} onClick={() => {props.setSelected(option); setIsActive(false);}}>
                        <p>{option}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default GeoEnergiaLogo