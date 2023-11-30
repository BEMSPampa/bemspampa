import Logo from '../Logo/Logo';
import './Header.scss';
import {Link} from 'react-router-dom';

/*
interface Props{
  scrollToFooter: any
}*/
const Header: React.FC = () => {
//<li onClick={props.scrollToFooter}>Contatos</li>
  return (
    <div className='header'>
      <div className='header-container'>
        <Link to={'/'}><Logo/></Link>
        <div className='header-menu'>
          <nav>
            <ul>
              <li>Sobre Nós</li>
              <Link to={'/data'}><li>Dados</li></Link>
              <li>Eventos</li>
              <li>GeoEnergia</li>
            </ul>
          </nav>
          <div className='header-bar'></div>
          <Link to={'/webmap'}><button>WebMapa</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header