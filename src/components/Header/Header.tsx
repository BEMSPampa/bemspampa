import DropdownMenuHeader from '@Components/DropdownMenuHeader/DropdownMenuHeader';
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
        <Link to={'/'}><Logo name='header'/></Link>

        <DropdownMenuHeader/>

        <div className='header-menu'>
          <nav>
            <ul>
              <Link to={'/sobre-nos'}><li>Sobre Nós</li></Link>
              <Link to={'/info'}><li>Visão Geral</li></Link>
              <Link to={'/publicacoes'}><li>Publicações</li></Link>
            </ul>
          </nav>
          <div className='header-bar'></div>
          <Link to={'/geoenergia'}><button>GeoEnergia</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Header