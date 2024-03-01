import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'
import GeoEnergiaNuclear from '@Components/GeoEnergiaNuclear/GeoEnergiaNuclear'

import './GeoEnergia.scss'
import { useState } from 'react'
import GeoEnergiaTermoFront from '@Components/GeoEnergiaTermoFront/GeoEnergiaTermoFront'
import GeoEnergiaNuclearFront from '@Components/GeoEnergiaNuclearFront/GeoEnergiaNuclearFront'
import GeoEnergiaSolarFront from '@Components/GeoEnergiaSolarFront/GeoEnergiaSolarFront'

const GeoEnergia = () => {
  const [isVisible, setIsVisible] = useState(2);
  
  const handleIsVisible = (page: number) => {
    setIsVisible(page);
  }

  return (
    <div className='geonergia-container'> 
      {isVisible === 1 && <GeoEnergiaSolarFront/>}
      {isVisible === 2 && <GeoEnergiaTermoFront/>}
      {isVisible === 3 && <GeoEnergiaNuclearFront/>}
      <div className='ge-temporary'>
        <button onClick={() => handleIsVisible(1)}>Solar</button>
        <button onClick={() => handleIsVisible(2)}>Termoelétrica</button>
        <button onClick={() => handleIsVisible(3)}>Nuclear</button>
      </div>
      {isVisible === 1 && <GeoEnergiaSolar/>}
      {isVisible === 2 && <GeoEnergiaTermo/>}
      {isVisible === 3 && <GeoEnergiaNuclear/>}
    </div>
  )
}
export default GeoEnergia