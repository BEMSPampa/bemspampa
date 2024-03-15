import "./Home.scss"
import DashboardMenu from "../../components/DashboardMenu/DashboardMenu";
import CheckPic from "../../assets/home/checkpic.png";
import { Link } from 'react-router-dom';
import TitlePage from "../../components/TitlePage/TitlePage";
import MapeamentoPic from "../../assets/home/mapeamento.png";
import MetodologiaPic from "../../assets/home/metodologia.png";

//import InfoPic from "../../assets/home/infopic.png";
import PublicationPic from "../../assets/home/publicationpic.png";
import DashboardPic from "../../assets/home/dashboardpic.png";


import Methodology1 from "../../assets/home/methodology1.png";
import Methodology2 from "../../assets/home/methodology2.png";
import Methodology3 from "../../assets/home/methodology3.png";
import ArrowPic from "../../assets/home/arrowpic.png";
import CarouselEvents from "../../components/CarouselEvents/CarouselEvents";

const Home = () => {
  const handleClick = () => {
    const element = document.getElementById('home-infografico');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home-container'>
      <div className='home-frontbg'>
        <div className="home-cardfront">
          <h2>Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética.</h2>

          <div className="home-cardabout">
            <div className="home-carditem">
              <img src={CheckPic} alt="" />
              <h5>Montantes de energia por fonte de energia</h5>
            </div>  
            <div className="home-carditem">
              <img src={CheckPic} alt="" />
              <h5>Dados abertos por Município sobre o setor eletroenergético</h5>
            </div>  
            <div className="home-carditem">
              <img src={CheckPic} alt="" />
              <h5>Relatórios técnicos disponíveis para download</h5>
            </div>
          </div>
          <div className="home-cardbuttons">
            <Link to="/webmapa"><button className="home-card-buttons-info"><div><img src={DashboardPic}/><p>Webmapa</p></div></button></Link>
            <button className="home-card-buttons-pub" onClick={() => handleClick()}><div><img src={PublicationPic}/><p>Infográficos</p></div></button>
            <Link to="/dados"><button className="home-card-buttons-dashboard"><div><img src={DashboardPic}/><p>Dados</p></div></button></Link>
          </div>
        </div>
      </div>
      
      <div className="home-about">
        <TitlePage name="Explicando o projeto"/>
        <div className="home-explaingproject">
          <p>O projeto BEMSPampa investiga os recursos energéticos do Bioma Pampa para levantamento de dados do potencial energético da região. Com a área de estudo definida como a mesorregião Metade Sul Rio Grandense, o objetivo final é desenvolver um Atlas Energético Regional que proporcione estudos acadêmicos e impulsione o empreendedorismo da região, além de contribuir para a transição energética justa, inclusiva e sustentável</p>
        
          <div className="home-aboutlayout">
            <div className="home-aboutcard">
              <img src={MapeamentoPic} alt="" />
              <ul>
                <li>Coletar dados eletroenergéticos;</li>
                <li>Usar divisão a nível municipal;</li>
                <li>Indicar os recursos energéticos existente e outorgados.</li>
              </ul>
            </div>

            <div className="home-aboutitems">
              <p>Consiste de processo metodológico com etapa de triagem das informações obtidas, posteriormente realizando validação desses dados e, por fim, disponibilização dessas informações reunidas.</p>
              <p>Pensando na prospecção tecnológica, se recorre a conceitos inovadores no contexto da Transição Energética, Indústria 4.0 e neoindustrialização. </p>
              <p>Disponibiliza relatórios que consolidam os resultados da pesquisa, com armazenamento na nuvem, são disponibilizadas para download na forma de dados abertos.</p>
            </div>

            <div className="home-aboutcard">
              <img src={MetodologiaPic} alt="" />
              <ul>
                <li>Dimensionar a matriz geoenergética.</li>
                <li>Usar dados para prospectar balanço energético.</li>
                <li>Validar informações através de especialistas.</li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      <div className="home-methodologylayout">
        <div className="home-methodologycard">
          <img src={Methodology1}/>
          <h4>PESQUISA E COLETA DE DADOS</h4>
          <div className="home-methodologycard-items">
              <div>
                <img src={CheckPic} alt="" />
                <p>Obter Dados Gerais:</p>
              </div>
              <ul>
                <li>produção e consumo de energia;</li>
                <li>dependência externa de energia;</li>
                <li>uso de energéticos por setor;</li>
                <li>oferta interna de energia.</li>
              </ul>
              <div>
                <img src={CheckPic} alt="" />
                <p>Realizar publicações;</p>
              </div>
          </div>
        </div>

        <img src={ArrowPic} alt="" className="home-arrowpic"/>

        <div className="home-methodologycard">
          <img src={Methodology2}/>
          <h4>PROCESSAMENTO DE INFORMAÇÕES</h4>
          <div className="home-methodologycard-items">
              <div>
                <img src={CheckPic} alt="" />
                <p>Inovação Tecnológica;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Mineração de dados;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Desenvolvimento de plataforma computacional;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Algoritmos de cálculos técnicos;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Registro de Programa de Computador.</p>
              </div>
          </div>
        </div>

        <img src={ArrowPic} alt="" className="home-arrowpic"/>

        <div className="home-methodologycard">
          <img src={Methodology3}/>
          <h4>RELATÓRIO DE INFORMAÇÕES AO USUÁRIO</h4>
          <div className="home-methodologycard-items">
              <div>
                <img src={CheckPic} alt="" />
                <p>Exibição de Informações consolidadas;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Aplicação de filtros pelo usuário;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Apresentação de resultados na plataforma;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Disponibilização de relatórios e e-book de infográficos;</p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Visualização por Webmapa; </p>
              </div>
              <div>
                <img src={CheckPic} alt="" />
                <p>Divulgação de resultados obtidos.</p>
              </div>
          </div>
        </div>
      </div>

      <div className="homevents-title">
        <TitlePage name="Eventos"/>
      </div>
      <div className="home-events">
        <CarouselEvents/>
      </div>

      <div className="home-infograficos" id="home-infografico">
        <TitlePage name="Infográficos"/>
      </div>
      <DashboardMenu/>
    </div>
  )
}

export default Home