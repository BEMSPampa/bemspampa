import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'
import GeoEnergiaNuclear from '@Components/GeoEnergiaNuclear/GeoEnergiaNuclear'

import './GeoEnergia.scss'
import { useState } from 'react'

const GeoEnergia = () => {
  const [isVisible, setIsVisible] = useState(1);

  const handleIsVisible = (page: number) => {
    setIsVisible(page);
  }
  return (
    <div className='geonergia-container'> 
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