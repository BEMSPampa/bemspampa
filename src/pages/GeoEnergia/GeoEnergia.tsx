import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'

import './GeoEnergia.scss'

const GeoEnergia = () => {
  return (
    <div className='geonergia-container'> 
        <GeoEnergiaSolar/>
        <GeoEnergiaTermo/>
    </div>
  )
}

export default GeoEnergia