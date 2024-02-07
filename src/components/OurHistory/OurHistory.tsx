import TitlePage from '../TitlePage/TitlePage'

import TLInicio from '../../assets/about-us/TLInicio.png'
import TLUm from '../../assets/about-us/TLUm.png'
import TLDois from '../../assets/about-us/TLDois.png'
import TLHoje from '../../assets/about-us/TLHoje.png'
import TLFuturo from '../../assets/about-us/TLFuturo.png'

import './OurHistory.scss'
const OurHistory = () => {
  return (
    <div className='ourhistory-container'>
       <TitlePage name='Nossa História'/>

       <div className='lifetime-gallery'>
            <div>
                <img src={TLInicio} alt="" />
                <div className='lifetime-item'>
                  <div className='lifetime-line'></div>
                  <div className='lifetime-number1'>
                    <h2>01</h2>
                  </div>
                  <div className='lifetime-line'></div>
                </div>
                <h4>Início</h4>
                <p>Ideia do que viria a se tornar o BEMSPampa!</p>
            </div>

            <div>
                <img src={TLUm} alt="" />
                <div className='lifetime-item'>
                  <div className='lifetime-line'></div>
                  <div className='lifetime-number2'>
                    <h2>02</h2>
                  </div>
                  <div className='lifetime-line'></div>
                </div>
                <h4>1° Ano</h4>
                <p>Primeiro contato com escopo do projeto, início do planejamento e cronograma de atividades.</p>
            </div>

            <div>
                <img src={TLDois} alt="" />
                <div className='lifetime-item'>
                  <div className='lifetime-line'></div>
                  <div className='lifetime-number3'>
                    <h2>03</h2>
                  </div>
                  <div className='lifetime-line'></div>
                </div>
                <h4>2° Ano</h4>
                <p>Ingresso de bolsistas para alavancar nossa estrutura e proporcionar maior engajamento para o projeto.</p>
            </div>

            <div>
                <img src={TLHoje} alt="" />
                <div className='lifetime-item'>
                  <div className='lifetime-line'></div>
                  <div className='lifetime-number4'>
                    <h2>04</h2>
                  </div>
                  <div className='lifetime-line'></div>
                </div>
                
                <h4>Hoje</h4>
                <p>Produto final com a plataforma digital em pleno funcionamento apresentando informações do setor eletroenergético.</p>
            </div>
            
            <div>
                <img src={TLFuturo} alt="" />
                <div className='lifetime-item'>
                  <div className='lifetime-line'></div>
                  <div className='lifetime-number5'>
                    
                    <h2>05</h2>
                  </div>
                  <div className='lifetime-line'></div>
                </div>
                <h4>Futuro</h4>
                <p>Buscar patrocínios e parcerias para desenvolver mais conteúdo na plataforma.</p>
            </div>
       </div>
    </div>
  )
}

export default OurHistory