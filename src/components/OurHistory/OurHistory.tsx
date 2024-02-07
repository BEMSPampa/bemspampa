import TitlePage from '../TitlePage/TitlePage'

import TLInicio from '../../assets/about-us/TLInicio.png'
import TLUm from '../../assets/about-us/TLUm.png'
import TLDois from '../../assets/about-us/TLDois.png'
import TLHoje from '../../assets/about-us/TLHoje.png'

import './OurHistory.scss'
const OurHistory = () => {
  return (
    <div className='ourhistory-container'>
       <TitlePage name='Nossa História'/>

       <div className='lifetime-gallery'>
            <div>
                <img src={TLInicio} alt="" />
                <h2>01</h2>
                <h4>Início</h4>
                <p>Ideia do que viria a se tornar o BEMSPampa!</p>
            </div>

            <div>
                <img src={TLUm} alt="" />
                <h2>02</h2>
                <h4>1° Ano</h4>
                <p>Primeiro contato com escopo do projeto, início do planejamento e cronograma de atividades.</p>
            </div>

            <div>
                <img src={TLDois} alt="" />
                <h2>03</h2>
                <h4>2° Ano</h4>
                <p>Ingresso de bolsistas para alavancar nossa estrutura e proporcionar maior engajamento para o projeto.</p>
            </div>

            <div>
                <img src={TLHoje} alt="" />
                <h2>04</h2>
                <h4>Hoje</h4>
                <p>Produto final com a plataforma digital em pleno funcionamento apresentando informações do setor eletroenergético.</p>
            </div>
       </div>
    </div>
  )
}

export default OurHistory