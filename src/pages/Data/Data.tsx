import './Data.scss';
import { Link } from 'react-router-dom';
import {listData} from '@UI/strings'

const Data = () => {
    return (
        <div className='data-container'>
            {listData.map(item => (
                <Link to={item.url} target="_blank"><div className='data-item' key={item.id}>
                    <img src={item.image} alt="" />
                    <div className='data-item-description'>
                        <h3>{item.name}</h3>
                    </div>
                </div></Link>
            ))}
        </div>
    )
}

export default Data;