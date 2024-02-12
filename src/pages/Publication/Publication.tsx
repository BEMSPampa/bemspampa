import './Publication.scss'
import pic from '../../assets/unipampapic.jpg';
const Publication = () => {

    const authorsUFSM: string[] = ["Autores", "Silva, Vinicius Amaro Ferreira", "Garcia, Enoque Dutra", "Silva, Dominnic Gomes", "Machado, Rodrigo Buroni", "Rodrigues, Thiago Prestes", "Filho, Itiberê Gonçalves Silva", "Santana, Caique Nunes Maria"];
    const authorsSIEPE: string[] = ["Autores", "Rodrigues, Thiago Prestes", "Silva, Dominnic Gomes", "Silva, Vinicius Amaro Ferreira", "Santana, Caique Nunes Maria", "Machado, Rodrigo Buroni", "Garcia, Enoque Dutra"];

    return(
        <section className='publication-container'>
            <div className='publication-left'>
                <div>
                    <h3>Aqui você encontrará todas as</h3>
                    <h3><span>pesquisas</span> e <span>publicações</span> realizadas</h3>
                    <h3>pelos membros do projeto!</h3>
                </div>
                <h1>Publicações</h1>
            </div>

            <div className='publication-right'>
                <div className='publication-card'>
                    <div>
                        <img src={pic} alt="" />
                        <div className='publication-url'>
                            <p>URL</p>
                            <p>http://repositorio.ufsm.br/handle/1/30583</p>
                        </div>
                    </div>
                    <div>
                        <h3>BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética</h3>
                        <div className="publication-authors">
                            {authorsUFSM.map(author => (<p>{author}</p>))}
                        </div>
                        <button>BAIXAR</button>
                    </div>
                </div>

                

                <div className='publication-card'>
                    <img src={pic} alt="" />
                    <div>
                        <h3>BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética</h3>
                        <div className="publication-authors">
                            {authorsSIEPE.map(author => (<p>{author}</p>))}
                        </div>
                        <button>BAIXAR</button>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Publication;