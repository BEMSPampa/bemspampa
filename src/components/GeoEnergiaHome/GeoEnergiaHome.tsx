import GeoEnergiaLogo from '@Components/GeoEnergiaLogo/GeoEnergiaLogo'
import './GeoEnergiaHome.scss'
import pic1 from '@Assets/geoenergia/home/1.png'
interface GeoEnergiaHome{
    setSelected: React.Dispatch<React.SetStateAction<string | null>> 
}
const GeoEnergiaHome:React.FC<GeoEnergiaHome> = props => {
  return (
    <div className='gehome-container'>
        <div className='gehome-front'>
            <div className='gehome-frontleft'>
                <GeoEnergiaLogo setSelected={props.setSelected}/>
                <div className='gehome-frontinfo'>
                    <h1>GEOGRAFIA DE <span>ENERGIA</span></h1>
                    <h5>Desenvolvido por alunos do <span>GrEEn</span> para <span>você</span>!</h5>
                    <button>Começando...</button>
                </div>
            </div>

            <div className='gehome-frontright'>
                <img src={pic1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default GeoEnergiaHome