import './DataMenu.scss'

import hidrica from '../../assets/menu/hidrica.png'
import bioenergia from '../../assets/menu/bioenergia.png'
import carvaomineral from '../../assets/menu/carvaomineral.png'
import eolica from '../../assets/menu/eolica.png'
import fossil from '../../assets/menu/fossil.png'
import solar from '../../assets/menu/solar.png'

const DataMenu = () => {
  return (
    <div className='datamenu-container'>
      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={hidrica} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>HÍDRICA</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
        <img src={carvaomineral} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>CARVÃO</h3>
          <h3>MINERAL</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
        <img src={solar} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>RADIAÇÃO</h3>
          <h3>SOLAR</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
        <img src={eolica} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>CINÉTICA DOS</h3>
          <h3>VENTOS</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
        <img src={fossil} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>FÓSSIL</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
        <img src={bioenergia} alt="" />
        </div>
        <div className='datamenu-item-description'>
          <h3>BIOENERGIA</h3>
        </div>
      </div>
    </div>
  )
}

export default DataMenu