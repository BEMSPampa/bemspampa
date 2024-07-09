import './Logo.scss'
import LogoHeader from '../../assets/LogoHeader.png';
import LogoFooter from '../../assets/LogoFooter.png';

interface LogoProps{
  name: string
}


const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className="logo">
      {props.name==="header" ? <img src={LogoHeader} alt=""/> : null}
      {props.name==="footer" ? <img src={LogoFooter} alt=""/>: null}
    </div>
  )
}

export default Logo