import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'
import GeoEnergiaNuclear from '@Components/GeoEnergiaNuclear/GeoEnergiaNuclear'

import './GeoEnergia.scss'

const GeoEnergia = () => {
  return (
    <div className='geonergia-container'> 
      <GeoEnergiaSolar/>
      <GeoEnergiaTermo/>
      <GeoEnergiaNuclear/>
    </div>
  )
}
export default GeoEnergia