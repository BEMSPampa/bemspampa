import './DashboardMenu.scss'

import hidrica from '../../assets/menu/hidrica.png'
import bioenergia from '../../assets/menu/bioenergia.png'
import carvaomineral from '../../assets/menu/carvaomineral.png'
import eolica from '../../assets/menu/eolica.png'
import fossil from '../../assets/menu/fossil.png'
import solar from '../../assets/menu/solar.png'

const DashboardMenu = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
          <img src={hidrica} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>HÍDRICA</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
          <img src={carvaomineral} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>SOLAR</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={solar} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>ÉOLICA</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={eolica} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>BIOENERGIA</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={fossil} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>FÓSSIL</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={bioenergia} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>CARVÃO MINERAL</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={bioenergia} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>ELETROMOBILI</h3>
          <h3>DADE</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={bioenergia} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>HIDROGÊNIO VERDE</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardMenu