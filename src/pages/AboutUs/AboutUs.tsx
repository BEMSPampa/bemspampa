import Goals from '../../components/Goals/Goals';
import Members from '../../components/Members/Members';
import OurHistory from '../../components/OurHistory/OurHistory';
import './AboutUs.scss'
import TitlePage from '../../components/TitlePage/TitlePage'

import Organization from '../../assets/about-us/Organizacao.png';
import CheckPic from '../../assets/checkpic.png';
import PampaPic from '../../assets/about-us/pampapic.png';
const AboutUs = () => {
    return(
        <section className='aboutus-container'>
            <div className='aboutus-front'>
                <div className='aboutus-frontleft'>
                    <div className='aboutus-description'>
                        <TitlePage name='Quem Somos'/>
                        <p>Com o objetivo de mapear informações de recursos energéticos e fontes renováveis na região, o BEMSPampa é um projeto em formato de </p>
                        <div>
                            <h1>Plataforma</h1>
                            <h1>Digital</h1>
                        </div>
                        <p>que reúne conteúdos relevantes ao tópico com acesso fácil e rápido.</p>
                    </div>
                </div>

                <div className='aboutus-frontright'>
                    <img src={PampaPic} alt="" className='about-uspampapic'/>
                    
                    <div>
                        <div>
                            <img src={CheckPic} alt="" />
                            <h5>Transição Energética</h5>
                        </div>

                        <div>
                            <img src={CheckPic} alt="" />
                            <h5>Potencial Eletroenergético</h5>
                        </div>
                        
                        <div>
                            <img src={CheckPic} alt="" />
                            <h5>Balanço Energético da Mesoregião</h5>
                        </div>
                    </div>
                </div>
            </div>

            <OurHistory/>
            <Goals/>
            <Members/>
            <div className='aboutus-organization'>
                <TitlePage name='Organização'/>
                <img src={Organization} alt="" />
            </div>
        </section>
    )
}

export default AboutUs;