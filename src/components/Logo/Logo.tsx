import './Logo.scss'
import logo from '../../assets/logomap.png';
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo}></img>
      <h2>BEMSPampa</h2>
    </div>
  )
}

export default Logo