import Logo from '../Logo/Logo';
import './Header.scss';


const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <Logo/>

        <div className='links'>
          <nav>
            <ul>
              <li><a>Sobre Nós</a></li>
              <li><a>Dados</a></li>
              <li><a>WebMapa</a></li>
            </ul>
          </nav>

          <button>Contatos</button>
        </div>
      </div>
    </div>
  )
}

export default Header