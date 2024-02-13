import './Data.scss';
import { Link } from 'react-router-dom';

import CloudPic from '../../assets/data/cloudpic.png';

const Data = () => {
    const linkData = "https://drive.google.com/drive/folders/1HoyETMMzg0ocvCUmTVOgwyXmzgjMD4rf?usp=share_link";
    type ListData = {
        name: string,
        link: string
    }
    const listData: ListData[] = [{name: "HÍDRICA", link: linkData}, {name: "SOLAR", link: linkData}, {name: "EÓLICA", link: linkData}, {name: "BIOENERGIA", link: linkData},
    {name: "FÓSSIL", link: linkData}, {name: "CARVÃO MINERAL", link: linkData}, {name: "DADOS MUNICIPAIS", link: linkData}, {name: "CONSUMO DE ENERGIA", link: linkData}, 
    {name: "POTENCIAL", link: linkData}, {name: "BALANÇO ENERGÉTICO", link: linkData}, {name: "SUBESTAÇÕES DE ENERGIA", link: linkData}, {name: "LINHAS DE TRANSMISSÃO", link: linkData}, 
    {name: "GERAÇÃO DISTRIBUÍDA", link: linkData}];
    return (
        <div className='data-container'>
            {listData.map(item => (
                <Link to={item.link} target="_blank"><div className='data-item'>
                    <img src={CloudPic} alt="" />
                    <div className='data-item-description'>
                        <h3>{item.name}</h3>
                    </div>
                </div></Link>
            ))}
        </div>
    )
}

export default Data;