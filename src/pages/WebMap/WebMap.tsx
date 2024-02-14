import TitlePage from "../../components/TitlePage/TitlePage"
import "./WebMap.scss"

import ANA from "../../assets/webmap/ANA.png"
import ANEEL from "../../assets/webmap/ANEEL.png"
import CCEE from "../../assets/webmap/CCEE.png"
import EPE from "../../assets/webmap/EPE.png"
import IBGE from "../../assets/webmap/IBGE.png"
import INMET from "../../assets/webmap/INMET.png"
import MME from "../../assets/webmap/MME.png"
import ONS from "../../assets/webmap/ONS.png"
import PLUGSHARE from "../../assets/webmap/PLUGSHARE.png"
import SEMA from "../../assets/webmap/SEMA.png"

const WebMap = () => {
  return (
    <section className='webmap-container'>
      <div className="webmap-about">
        <h3>WebMapa</h3>
        <div className="line"/>
        <iframe title="Mapa" src="/bemspampa/map.html"/>
      </div>

      <div className="webmap-links">
        <TitlePage name="Links Úteis"/>
      </div>

      <div className="webmap-links-layout">

        <div className="webmap-cardgroup">
          <div className="webmap-card-epe">
            <img src={EPE} alt="" />
            <p>EPE Interativa</p>
            <p>BEN Interativo</p>
          </div>
          <div className="webmap-card-aneel">
            <p>Dados Abertos</p>
            <p>Assuntos</p>
            <p>Segmento: Geração</p>
            <p>Segmento: Transmissão</p>
            <p>Segmento: Distribuição</p>
            <p>Eficiência Energética</p>
            <img src={ANEEL} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-inmet">
            <img src={INMET} alt="" />
            <p>Mapa de Estações</p>
            <p>Banco de Dados Meteorológicos</p>
          </div>
          <div className="webmap-card-sema">
            <p>Painéis Interativos</p>
            <p>Painéis de Acompanhamento Licenças Ambientais</p>
            <img src={SEMA} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-ons">
            <p>Portal de Dados Abertos do ONS</p>
            <p>Painel Dinâmico</p>
            <p>Mapas</p>
            <img src={ONS} alt="" />
          </div>
          <div className="webmap-card-ibge">
            <img src={IBGE} alt="" />
            <p>Produção e Extração Vegetal e da Silvicultura</p>
            <p>Pesquisa da Pecuária e Municipal</p>
            <p>Indicadores</p>
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-plugshare">
            <img src={PLUGSHARE} alt="" />
            <p>Mapa de Carregadores de VE</p>
          </div>
          <div className="webmap-card-ccee">
            <p>Dados Abertos</p>
            <p>Geração</p>
            <p>Consumo</p>
            <p>Leilão</p>
            <p>Estudos Especiais</p>
            <img src={CCEE} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-ana">
            <p>Catálogo de metadados</p>
            <p>Bacias Hidrográficas</p>
            <p>Dados Abertos</p>
            <img src={ANA} alt="" />
          </div>
          <div className="webmap-card-mme">
            <img src={MME} alt="" />
            <p>Painel Interativo</p>
            <p>Publicações</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebMap