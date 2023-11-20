import './DataMenu.scss'
import point from '../../assets/point.png'

const DataMenu = () => {
  return (
    <div className='datamenu-container'>
      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>HÍDRICA</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>CARVÃO</h3>
          <h3>MINERAL</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>RADIAÇÃO</h3>
          <h3>SOLAR</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>CINÉTICA DOS</h3>
          <h3>VENTOS</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>FÓSSIL</h3>
        </div>
      </div>

      <div className='datamenu-item'>
        <div className='datamenu-item-logo'>
          <img src={point}/>
        </div>
        <div className='datamenu-item-description'>
          <h3>BIOENERGIA</h3>
        </div>
      </div>
    </div>
  )
}

export default DataMenu