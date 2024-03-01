import { useState } from 'react';
import './GeoEnergiaLogo.scss'

const GeoEnergiaLogo = () => {
    
    const [isActive, setIsActive] = useState(false);
    const options: string[] = ["Nuclear", "Solar", "Termoelétrica"];
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className='gelogo-container'>
            <button onClick={() => setIsActive(!isActive)}>GEOENERGIA</button>
            {isActive && 
                <div className='gelogo-options'>
                {options.map(option=> (
                    <div className='gelogo-item' onClick={() => {setSelected(option); setIsActive(false);}}>
                        <p>{option}</p>
                    </div>
                ))}
                </div>
            }
        </div>
    )
}

export default GeoEnergiaLogo