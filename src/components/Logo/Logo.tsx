import './Logo.scss'
import LogoPic from '../../assets/LogoHeader.png';

const Logo = () => {
  //<img src={logo}></img>
  return (
    <div className="logo">
      <img src={LogoPic} alt="" />
    </div>
  )
}

export default Logo