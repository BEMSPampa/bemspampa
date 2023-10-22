import './Data.scss';
import pic from '../../assets/engpic.png';
import { Link } from 'react-router-dom';

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
                    <div>
                        <h5>Enquanto isso, clique no botão</h5>
                        <h5>para acessar os dados.</h5>
                    </div>
                </div>
                <Link to={linkData} target="_blank"><button>Acessar Dados</button></Link>
            </div>
        </div>
    )
}

export default Data;