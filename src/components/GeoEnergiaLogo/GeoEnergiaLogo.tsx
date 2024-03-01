import { useState } from 'react';
import './GeoEnergiaLogo.scss'

const GeoEnergiaLogo = () => {
    
    const [isActive, setIsActive] = useState(false);
    const options: string[] = ["Nuclear", "Solar", "Termoelétrica", "Hidrelétrica", "Eólica"];
    const [selected, setSelected] = useState<string | null>(null);
    
    console.log(selected);
    return (
        <div className='gelogo-container'>
            <button onClick={() => setIsActive(!isActive)}>Geo<span>Energia</span></button>
            {isActive && <div className='gelogo-content'>
                {options.map(option=> (
                    <div className='gelogo-item' onClick={() => {setSelected(option); setIsActive(false);}}>
                        <p>{option}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default GeoEnergiaLogo