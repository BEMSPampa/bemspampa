import './TitlePage.scss'

interface TitlePageProps{
    name: string
}

const TitlePage: React.FC<TitlePageProps> = (props) => {
    return(
        <section className='titlepage-container'>
            <h2>{props.name}</h2>
        </section>
    )
}

export default TitlePage;