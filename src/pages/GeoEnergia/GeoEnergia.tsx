import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'
import GeoEnergiaNuclear from '@Components/GeoEnergiaNuclear/GeoEnergiaNuclear'

import './GeoEnergia.scss'
import { useState } from 'react'
import GeoEnergiaTermoFront from '@Components/GeoEnergiaTermoFront/GeoEnergiaTermoFront'
import GeoEnergiaNuclearFront from '@Components/GeoEnergiaNuclearFront/GeoEnergiaNuclearFront'
import GeoEnergiaSolarFront from '@Components/GeoEnergiaSolarFront/GeoEnergiaSolarFront'

const GeoEnergia = () => {
  const [selected, setSelected] = useState<string | null>("Nuclear");

  return (
    <div className='geonergia-container'> 
      {selected === "Solar" && <><GeoEnergiaSolarFront setSelected={setSelected}/>{selected === "Solar" && <GeoEnergiaSolar/>}</>}
      {selected === "Termoelétrica" && <><GeoEnergiaTermoFront setSelected={setSelected}/><GeoEnergiaTermo/></>}
      {selected === "Nuclear" && <><GeoEnergiaNuclearFront setSelected={setSelected}/><GeoEnergiaNuclear/></>}
    </div>
  )
}
export default GeoEnergia