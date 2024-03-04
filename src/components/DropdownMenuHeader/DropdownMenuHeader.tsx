import { useState } from 'react';
import './DropdownMenuHeader.scss'
import { Link } from 'react-router-dom';

type option = {
  name: string,
  link: string
}

const DropdownMenuHeader: React.FC = () => {
    
    const [isActive, setIsActive] = useState(false);
    const options: option[] = [{name: "Sobre Nós", link: "/sobre-nos"}, {name: "Dados", link: "/dados"}, {name: "Geoenergia", link: "/geoenergia"}, {name: "Webmapa", link: "/webmapa"}];

    return (
        <div className='dropdownheader-container'>
            <div onClick={() => setIsActive(!isActive)} className='dropdownheader-icon'>
              <div className='dropdownheader-line'/>
              <div className='dropdownheader-line'/>
              <div className='dropdownheader-line'/>
            </div>
        
            {isActive && <div className='dropdownheader-content'>
                {options.map(option=> (
                    <Link to={option.link}><div className='dropdownheader-item' key={option.name} onClick={() => {setIsActive(false);}}>
                        <p>{option.name}</p>
                    </div></Link>
                ))}
            </div>}
        </div>
    )
}

export default DropdownMenuHeader