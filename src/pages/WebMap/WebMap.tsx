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
          <div className="webmap-card-aneel"></div>
        </div>
        <div className="webmap-cardgroup">
          <div className="webmap-card-inmet"></div>
          <div className="webmap-card-sema"></div>
        </div>
        <div className="webmap-cardgroup">
          <div className="webmap-card-ons"></div>
          <div className="webmap-card-ibge"></div>
        </div>
        <div className="webmap-cardgroup">
          <div className="webmap-card-plugshare"></div>
          <div className="webmap-card-ccee"></div>
        </div>
        <div className="webmap-cardgroup">
          <div className="webmap-card-ana"></div>
          <div className="webmap-card-mme"></div>
        </div>
      </div>
    </section>
  )
}

export default WebMap