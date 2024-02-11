import { developers, collaborators } from '../../UI/strings';
import TitlePage from '../TitlePage/TitlePage';
import './Members.scss';
const Members = () => {
  return (
    <div className='members-container'>
        <TitlePage name='Nossa Equipe'/>
        <p>Composta por discentes e docentes da Universidade Federal do Pampa, engenheiros de energia, computação e química.</p>

        <h4>DESENVOLVEDORES</h4>
        <div className='members-gallery'>
            {developers.map(developer => (
                <div className='members-card'>
                    <img src={developer.image} />
                    <p>{developer.name}</p>
                </div>
            ))}
        </div>

        <h4>COLABORADORES</h4>
        <div className='members-gallery'>
            {collaborators.map(collaborator => (
                <div className='members-card'>
                    <img src={collaborator.image} />
                    <p>{collaborator.name}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Members