import { Link } from 'react-router-dom';
import './HomeCard.scss';

const HomeCard= () => {
  return (
    <div className="home-cardfront">
        <h2>Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética.</h2>
        <div className="home-card-about">
          <h5>Apurado dos montantes de energia por fonte de energia</h5>
          <h5>Dados abertos sobre o setor eletroenergético</h5>
          <h5>Relatório disponível para download</h5>
        </div>
        
        <div className="home-card-buttons">
          <Link to="/info"><button className="home-card-buttons-info">Info</button></Link>
          <Link to="/publicacoes"><button className="home-card-buttons-pub">Publicações</button></Link>
          <Link to="/dashboard"><button className="home-card-buttons-dashboard">Dashboard</button></Link>
        </div>
      </div>
  )
}

export default HomeCard