import './Publication.scss'
import { Link } from 'react-router-dom';
import {publicationData} from '@UI/strings'
import { Fragment } from 'react';
const Publication = () => {
    
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
                <div className='publication-rightscroll'>
                    {publicationData.map((publication, index) => (
                        <Fragment key={publication.id}>
                            <div className='publication-card' key={index}>
                                <div>
                                    <img src={publication.image} alt="" />
                                    {publication.url !=="" && 
                                        <div className='publication-url'>
                                        <p>URL</p>
                                        <Link to={publication.url} target="_blank"><p>{publication.url}</p></Link>
                                    </div>
                                    }
                                </div>
                                <div>
                                    <h3>{publication.name}</h3>
                                    <div className="publication-authors">
                                        {publication.authors.map((author, index) => (<p key={index}>{author}</p>))}
                                    </div>
                                    {publication.file !== "" && <button onClick={()=>openFileAtURL(publication.file)}>ABRIR</button>}
                                    {publication.file === "" && <button onClick={()=>openFileAtURL(publication.url)}>ABRIR</button>}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Publication;