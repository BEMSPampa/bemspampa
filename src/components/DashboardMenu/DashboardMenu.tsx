import './DashboardMenu.scss'

import hidrica from '../../assets/dashboard/hidrica.png'
import bioenergia from '../../assets/dashboard/bioenergia.png'
import carvao_mineral from '../../assets/dashboard/carvao_mineral.png'
import eolica from '../../assets/dashboard/eolica.png'
import fossil from '../../assets/dashboard/fossil.png'
import solar from '../../assets/dashboard/solar.png'
import hidrogenio_verde from '../../assets/dashboard/hidrogenio_verde.png'
import eletromobilidade from '../../assets/dashboard/eletromobilidade.png'


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
          <img src={carvao_mineral} alt="" />
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
        <img src={eletromobilidade} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>ELETROMOBILIDADE</h3>
        </div>
      </div>

      <div className='dashboard-item'>
        <div className='dashboard-item-logo'>
        <img src={hidrogenio_verde} alt="" />
        </div>
        <div className='dashboard-item-description'>
          <h3>HIDROGÊNIO VERDE</h3>
        </div>
      </div>
    </div>
  )
}

export default DashboardMenu