import './HomeCard.scss';

const HomeCard= () => {
  return (
    <div className="home-card">
        <h2>Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética.</h2>
        <div className="home-card-about">
          <h5>Apurado dos montantes de energia por fonte de energia</h5>
          <h5>Dados abertos sobre o setor eletroenergético</h5>
          <h5>Relatório disponível para download</h5>
        </div>
        
        <div className="home-card-buttons">
          <button className="home-card-buttons-info">Info</button>
          <button className="home-card-buttons-pub">Publicações</button>
          <button className="home-card-buttons-dashboard">Dashboard</button>
        </div>
      </div>
  )
}

export default HomeCard