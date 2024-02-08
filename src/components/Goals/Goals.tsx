import TitlePage from '../TitlePage/TitlePage'

import pic1 from '../../assets/about-us/PotencialEletroenergetico.png'
import pic2 from '../../assets/about-us/BalancoEnergetico.png'
import pic3 from '../../assets/about-us/TransicaoEnergetica.png'

import './Goals.scss'
const Goals = () => {
  return (
    <div className='goals-container'>
        <TitlePage name='Nossos Objetivos'/>
        <div className='goals-gallery'>
            <div className='goal-card'>
                <img src={pic1} alt="" />
                <div className='goal-card-info'>
                    <div className='goalcard-title'>
                        <h3>POTENCIAL</h3>
                        <h3>ELETROENERGÉTICO</h3>
                    </div>
                    <div className='goalcard-desc'>
                        <p>Organizar as informações sobre recursos energéticos por mesorregião ampliando o acesso às informações sobre potencial energético;</p>
                    </div>
                </div>    
            </div>

            <div className='goal-card'>
                <img src={pic2} alt="" />
                <div className='goal-card-info'>
                    <div className='goalcard-title'>
                        <h3>BALANÇO ENERGÉTICO DA</h3>
                        <h3>MESOREGIÃO</h3>
                    </div>
                    <div className='goalcard-desc'>
                        <p>Realizar o balanço energético por mesorregião apurando os montantes de energia no processo</p>
                    </div>
                </div>
            </div>

            <div className='goal-card'>
                <img src={pic3} alt="" />
                <div className='goal-card-info'>
                    <div className='goalcard-title'>
                        <h3>TRANSIÇÃO ENERGÉTICA</h3>
                    </div>
                    <div className='goalcard-desc'>
                        <p>Relacionar a transição energética ao desenvolvimento regional e a busca por fontes de energias renováveis. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Goals