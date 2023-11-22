import Logo from '../Logo/Logo';
import MobileMenu from '../MobileMenu/MobileMenu';
import './Header.scss';
import {Link} from 'react-router-dom';

interface Props{
  scrollToFooter: any
}

const Header: React.FC<Props> = (props) => {

  return (
    <div className='header'>
      <div className='header-container'>
        <Link to={'/'}><Logo/></Link>
        <div className='header-menu'>
          <nav>
            <ul>
              <li>Sobre Nós</li>
              <Link to={'/data'}><li>Banco de Dados</li></Link>
              <li>Eventos</li>
              <li onClick={props.scrollToFooter}>Contatos</li>
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