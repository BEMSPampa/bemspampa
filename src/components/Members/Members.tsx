import React from 'react'
import { developers, collaborators } from '../../UI/strings';
import TitlePage from '../TitlePage/TitlePage';
import './Members.scss';
const Members = () => {
  return (
    <div className='members-container'>
        <TitlePage name='Nossa Equipe'/>
        <h3>Composta por discentes e docentes da Universidade Federal do Pampa, engenheiros de energia e da computação.</h3>

        <h4>DESENVOLVEDORES</h4>
        <div className='members-gallery'>
            {developers.map(developer => (
                <div className='members-card'>
                    <img src={developer.image}/>
                    <h5>{developer.name}</h5>
                </div>
            ))}
        </div>

        <h4>COLABORADORES</h4>
        <div className='members-gallery'>
            {collaborators.map(collaborator => (
                <div className='members-card'>
                    <img src={collaborator.image} />
                    <h5>{collaborator.name}</h5>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Members