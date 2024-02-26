import './Publication.scss'
import FirstArticle from '../../assets/publication/firstarticle.png';
import SecondArticle from '../../assets/publication/secondarticle.jpeg';
import { Link } from 'react-router-dom';

const Publication = () => {

    const authorsUFSM: string[] = ["Autores", "Silva, Vinicius Amaro Ferreira", "Garcia, Enoque Dutra", "Silva, Dominnic Gomes", "Machado, Rodrigo Buroni", "Rodrigues, Thiago Prestes", "Filho, Itiberê Gonçalves Silva", "Santana, Caique Nunes Maria"];
    const authorsSIEPE: string[] = ["Autores", "Rodrigues, Thiago Prestes", "Silva, Dominnic Gomes", "Silva, Vinicius Amaro Ferreira", "Santana, Caique Nunes Maria", "Machado, Rodrigo Buroni", "Garcia, Enoque Dutra"];

    const urlUFSM: string = "http://repositorio.ufsm.br/handle/1/30583";
    const urlSIEPE: string = "https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/116940";

    const urlArticleUFSM: string = "/bemspampa/articleUFSM.pdf";
    const urlArticleSIEPE: string = "/bemspampa/articleSIEPE.pdf";

    const openFileAtURL = (url: string) => {
        const parts = url.split("/");
        const fileName: string = parts.length > 0 ? parts.pop()! : 'file';
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("open", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    
    return(
        <section className='publication-container'>
            <div className='publication-left'>
                <div>
                    <h3>Aqui você encontra <span>pesquisas</span></h3>
                    <h3> e <span>publicações</span> realizadas pelos </h3>
                    <h3>membros do projeto!</h3>
                </div>
                <h1>Publicações</h1>
            </div>

            <div className='publication-right'>
                <div className='publication-card'>

                    <div>
                        <img src={FirstArticle} alt="" />
                        <div className='publication-url'>
                            <p>URL</p>
                            <Link to={urlUFSM} target="_blank"><p>{urlUFSM}</p></Link>
                        </div>
                    </div>

                    <div>
                        <h3>BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética</h3>
                        <div className="publication-authors">
                            {authorsUFSM.map(author => (<p>{author}</p>))}
                        </div>
                        <button onClick={()=>openFileAtURL(urlArticleUFSM)}>ABRIR</button>
                    </div>
                </div>

                <div className='publication-card'>

                    <div>
                        <img src={SecondArticle} alt="" />
                        <div className='publication-url'>
                            <p>URL</p>
                            <Link to={urlSIEPE} target="_blank"><p>{urlSIEPE}</p></Link>
                        </div>
                    </div>

                    <div>
                        <h3>BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética</h3>
                        <div className="publication-authors">
                            {authorsSIEPE.map(author => (<p>{author}</p>))}
                        </div>
                        <button onClick={()=>openFileAtURL(urlArticleSIEPE)}>ABRIR</button>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default Publication;