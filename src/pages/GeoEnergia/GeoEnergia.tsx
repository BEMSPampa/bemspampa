import GeoEnergiaSolar from '@Components/GeoEnergiaSolar/GeoEnergiaSolar'
import GeoEnergiaTermo from '@Components/GeoEnergiaTermo/GeoEnergiaTermo'
import GeoEnergiaNuclear from '@Components/GeoEnergiaNuclear/GeoEnergiaNuclear'

import './GeoEnergia.scss'
import { useState } from 'react'
import GeoEnergiaTermoFront from '@Components/GeoEnergiaTermoFront/GeoEnergiaTermoFront'
import GeoEnergiaNuclearFront from '@Components/GeoEnergiaNuclearFront/GeoEnergiaNuclearFront'
import GeoEnergiaSolarFront from '@Components/GeoEnergiaSolarFront/GeoEnergiaSolarFront'
import GeoEnergiaEolica from '@Components/GeoEnergiaEolica/GeoEnergiaEolica'
import GeoEnergiaHidraulica from '@Components/GeoEnergiaHidraulica/GeoEnergiaHidraulica'
import GeoEnergiaHome from '@Components/GeoEnergiaHome/GeoEnergiaHome'

const GeoEnergia = () => {
  const [selected, setSelected] = useState<string | null>("Home");

  return (
    <div className='geonergia-container'> 
      {selected === "Home" && <><GeoEnergiaHome setSelected={setSelected}/></>}
      {selected === "Solar" && <><GeoEnergiaSolarFront setSelected={setSelected}/><GeoEnergiaSolar/></>}
      {selected === "Termoelétrica" && <><GeoEnergiaTermoFront setSelected={setSelected}/><GeoEnergiaTermo/></>}
      {selected === "Nuclear" && <><GeoEnergiaNuclearFront setSelected={setSelected}/><GeoEnergiaNuclear/></>}
      {selected === "Eólica" && <><GeoEnergiaEolica/></>}
      {selected === "Hidráulica" && <><GeoEnergiaHidraulica/></>}
    </div>
  )
}
export default GeoEnergia