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
import { Link } from "react-router-dom"

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
            <Link to="https://www.epe.gov.br/pt/abcdenergia/epe-interativa" target="_blank"><p>EPE Interativa</p></Link>
            <Link to="https://dashboard.epe.gov.br/apps/ben/" target="_blank"><p>BEN Interativo</p></Link>
          </div>
          <div className="webmap-card-aneel">
            <Link to="https://dadosabertos.aneel.gov.br/" target="_blank"><p>Dados Abertos</p></Link>
            <Link to="https://www.gov.br/aneel/pt-br/assuntos" target="_blank"><p>Assuntos</p></Link>
            <Link to="https://www.gov.br/aneel/pt-br/assuntos/geracao" target="_blank"><p>Segmento: Geração</p></Link>
            <Link to="https://www.gov.br/aneel/pt-br/assuntos/transmissao" target="_blank"><p>Segmento: Transmissão</p></Link>
            <Link to="https://www.gov.br/aneel/pt-br/assuntos/distribuicao" target="_blank"><p>Segmento: Distribuição</p></Link>
            <Link to="https://www.gov.br/aneel/pt-br/assuntos/eficiencia-energetica" target="_blank"><p>Eficiência Energética</p></Link>
            <img src={ANEEL} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-inmet">
            <img src={INMET} alt="" />
            <Link to="https://mapas.inmet.gov.br/" target="_blank"><p>Mapa de Estações</p></Link>
            <Link to="https://bdmep.inmet.gov.br/" target="_blank"><p>Banco de Dados Meteorológicos</p></Link>
          </div>
          <div className="webmap-card-sema">
            <Link to="https://www.sema.rs.gov.br/si-paineis-interativos" target="_blank"><p>Painéis Interativos</p></Link>
            <Link to="https://app.powerbi.com/view?r=eyJrIjoiNmVlZTU5MDgtYzU4MS00MzI0LTkwOTgtOGVjOTcyZTZkMmQ3IiwidCI6IjE1ZGNkOTA5LThkYzAtNDBlOS1hMWU1LWNlY2IwNTNjZGQxYSJ9&pageName=ReportSection7ed651c009187c4c88cc" target="_blank"><p>Painéis de Acompanhamento Licenças Ambientais</p></Link>
            <img src={SEMA} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-ons">
            <Link to="https://dados.ons.org.br/" target="_blank"><p>Portal de Dados Abertos do ONS</p></Link>
            <Link to="https://www.ons.org.br/paginas/sobre-o-sin/o-sistema-em-numeros" target="_blank"><p>Painel Dinâmico</p></Link>
            <Link to="https://www.ons.org.br/paginas/sobre-o-sin/mapas" target="_blank"><p>Mapas</p></Link>
            <img src={ONS} alt="" />
          </div>
          <div className="webmap-card-ibge">
            <img src={IBGE} alt="" />
            <Link to="https://www.ibge.gov.br/estatisticas/economicas/agricultura-e-pecuaria/9105-producao-da-extracao-vegetal-e-da-silvicultura.html" target="_blank"><p>Produção e Extração Vegetal e da Silvicultura</p></Link>
            <Link to="https://www.ibge.gov.br/estatisticas/economicas/agricultura-e-pecuaria/9107-producao-da-pecuaria-municipal.html" target="_blank"><p>Pesquisa da Pecuária e Municipal</p></Link>
            <Link to="https://www.ibge.gov.br/indicadores.html" target="_blank"><p>Indicadores</p></Link>
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-plugshare">
            <img src={PLUGSHARE} alt="" />
            <Link to="https://www.plugshare.com/br" target="_blank"><p>Mapa de Carregadores de VE</p></Link>
          </div>
          <div className="webmap-card-ccee">
            <Link to="https://dadosabertos.ccee.org.br/" target="_blank"><p>Dados Abertos</p></Link>
            <Link to="https://www.ccee.org.br/en/dados-e-analises/dados-geracao" target="_blank"><p>Geração</p></Link>
            <Link to="https://www.ccee.org.br/en/dados-e-analises/consumo" target="_blank"><p>Consumo</p></Link>
            <Link to="https://www.ccee.org.br/en/mercado/leilao-mercado" target="_blank"><p>Leilão</p></Link>
            <Link to="https://www.ccee.org.br/en/dados-e-analises/estudos-especiais" target="_blank"><p>Estudos Especiais</p></Link>
            <img src={CCEE} alt="" />
          </div>
        </div>


        <div className="webmap-cardgroup">
          <div className="webmap-card-ana">
            <Link to="https://metadados.snirh.gov.br/geonetwork/srv/por/catalog.search#/home" target="_blank"><p>Catálogo de metadados</p></Link>
            <Link to="https://metadados.snirh.gov.br/geonetwork/srv/search?keyword=Bacia%20Hidrogr%C3%A1fica" target="_blank"><p>Bacias Hidrográficas</p></Link>
            <Link to="https://dadosabertos.ana.gov.br/" target="_blank"><p>Dados Abertos</p></Link>
            <img src={ANA} alt="" />
          </div>
          <div className="webmap-card-mme">
            <img src={MME} alt="" />
            <Link to="https://www.gov.br/mme/pt-br/assuntos/secretarias/sntep/publicacoes/resenha-energetica-brasileira/painel-interativo" target="_blank"><p>Painel Interativo</p></Link>
            <Link to="https://www.gov.br/mme/pt-br/assuntos/secretarias/sntep/publicacoes" target="_blank"><p>Publicações</p></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebMap