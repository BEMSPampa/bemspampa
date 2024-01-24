import './Data.scss';
import { Link } from 'react-router-dom';
import pic from '../../assets/engpic.png';


const Data = () => {
    const linkData = "https://drive.google.com/drive/folders/1HoyETMMzg0ocvCUmTVOgwyXmzgjMD4rf?usp=share_link";

    return (
        <div className='data-container'>
            <div className='warning'>
                <img src={pic}/>
                <div>
                    <div>
                        <h3>Parece que a página está</h3>
                        <h3>em desenvolvimento...</h3>
                    </div>
                </div>
                <Link to={linkData} target="_blank"><button>Acessar Dados</button></Link>
            </div>
        </div>
    )
}

export default Data;