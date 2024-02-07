import { developers, collaborators } from '../../UI/strings';
import TitlePage from '../TitlePage/TitlePage';
import './Members.scss';
const Members = () => {
  return (
    <div className='members-container'>
        <TitlePage name='Nossa Equipe'/>
        <p>Composta por discentes e docentes da Universidade Federal do Pampa, engenheiros de energia e da computação.</p>

        <h4>DESENVOLVEDORES</h4>
        <div className='members-gallery'>
            {developers.map(developer => (
                <img src={developer.image}/>
            ))}
        </div>

        <h4>COLABORADORES</h4>
        <div className='members-gallery'>
            {collaborators.map(collaborator => (
                <img src={collaborator.image} />
            ))}
        </div>
        
    </div>
  )
}

export default Members