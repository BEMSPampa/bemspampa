import Logo from '../Logo/Logo';
import './Header.scss';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Link to={'/'}><Logo/></Link>

        <div className='links'>
          <nav>
            <ul>
              <Link to={'/about'}><li>Sobre Nós</li></Link>
              <Link to={'/'}><li>Dados</li></Link>
              <Link to={'/webmap'}><li>WebMapa</li></Link>
            </ul>
          </nav>

          <button>Contatos</button>
        </div>
      </div>
    </div>
  )
}

export default Header