import TitlePage from '../../components/TitlePage/TitlePage';
import './Info.scss'

import FirstInfo from '../../assets/info/info1.png';
import SecondInfo from '../../assets/info/info2.png';
import FutureInfo from '../../assets/info/bemspampa-future.png'
import CheckPic from '../../assets/checkpic.png';

const Info = () => {
    
    type stepInfo = {
        num: number,
        description: string,
    }
    
    const stringsInfo: string[] = ["Atualmente, se observa uma lacuna na disponibilidade de informações gerais relativas à mesorregião Metade Sul Rio Grandense, ou ainda, se verifica a necessidade de atualização de dados (TILLMANN, MENEZES e FERNANDEZ, 2017; FEE, 2020). Ações específicas como o projeto que cria a Região de Desenvolvimento Integrado (Ride) da Metade Sul do Rio Grande do Sul (SENADO, 2018) não têm avanços significativos. De parte de dados geoelétricos, atualmente, o acesso a informações carece de um trabalho de estruturação, sendo por meio do BEMSPampa se espera influenciar as iniciativas de filtros por zoneamento no âmbito da Secretaria do Meio Ambiente e Infraestrutura do Estado do Rio Grande do Sul (SEMA, 2020), bem como os resultados do Censo Demográfico (IBGE, 2022).",
                                   "Portanto, o projeto de pesquisa proposto visa investigar recursos do Bioma Pampa coincidente com a mesorregião Metade Sul Rio Grandense através de levantamento de informações geoelétricas a partir do desenvolvimento de estudo e pesquisa do potencial energético regional. Esse mapeamento consiste em desenvolver e aplicar procedimentos metodológicos para cálculos da matriz energética considerando dados obtidos a partir da consulta a diferentes órgãos, de modo, que se contribua para transição energética regional, agregue conhecimento científico e divulgue informações consolidadas. Neste sentido as referências são obtidas através de consultas nas plataformas de pesquisa e interação com as diversas instituições envolvidas com o arcabouço energético."
    ];

    const stringsStep: stepInfo[] = [   {num: 1, description: "Dados consolidados de produção, consumo, dependência externa de energia, a composição setorial do consumo de energéticos e o resumo da oferta interna de energia. Cada pesquisador realizará força-tarefa alinhada ao seu seguimento de pesquisa, conforme indicado na composição da equipe, inclusive prospecção de tecnologias para plataforma digital."},
                                    {num: 2, description: "Consumo de Energia por Setor, consumo final de energia classificado por fonte primária e secundária, para cada setor da economia. Força-tarefa para consolidar informações obtidas e inserção em plataforma digital na forma de piloto."},
                                {num: 3, description: "Balanços energéticos dos centros de transformação, incluindo as suas perdas. Força-tarefa para validação das informações obtidas nessa etapa e nas anteriores com inclusão em plataforma digital."},
                            {num: 4, description: "Recursos e Reservas Energéticas, contempla os dados dos recursos e reservas das fontes primárias de energia. Força-tarefa para estruturação das informações."},
                        {num: 5, description: "Dados de produção das principais fontes de energia, o consumo residencial de eletricidade, instalações energéticas e reservas, potencial hidráulico, solar, eólico, carvão mineral, bioenergia, outros. Força-tarefa para organização dos dados em estrutura adequada às aplicações previstas."},
                    {num: 6, description: "Apresentação de informações e dados: (a)capacidade instalada de geração elétrica; (b)autoprodução de Eletricidade; (c)indicadores energéticos de produção, importação, exportação e consumo, por área energética; (d) análises energéticas com base na energia útil; (e) outros.Força-tarefa para disponibilização dos dados na forma web e divulgação."}];
    
    const stringsInfoAbout: string[] = ["Produção, autoprodução e indicadores energéticos", "Consumo residencial e outras instalações", "Dependência externa de energia", "Resumo da oferta interna de energia", "Composição setorial do consumo de energéticos",
                                        "Recursos e reservas energéticas", "Balanço energético dos centros de transformação", "Potencial hidráulico, solar, eólico, carvão mineral, bioenergia, outros"];

    const stringsInfoConsolidated: string[] = ["Consumo de Energia Elétrica;", "Empreendimentos:", "Hidráulico", "Eólico", "Solar", "Térmico", "Eletromobilidade", "Geração Distribuída", "Hidrogênio Verde", "Infraestrutura elétrica"];

    return(
        <section className='info-container'>
            
            <div>
                <TitlePage name='Visão Geral'/>
                {stringsInfo.map((item) => (<p>{item}</p>))}

                <div className='info-about'>
                    <div>
                        {stringsInfoAbout.map((item) => (<div className='info-aboutitem' key={item}><img src={CheckPic} alt="" className='info-checkpic'/><h3>{item}</h3></div>))}
                    </div>
                    <img src={FirstInfo} alt="" className='firstinfo-img'/>
                </div>

                <div className='info-consolidated'>
                    <img src={SecondInfo} alt="" className='secondinfo-img'/>
                    <div>
                        <h2>Informações consolidadas sobre:</h2>
                        {stringsInfoConsolidated.map((item) => (<div className='info-consolidateditem' key={item}><img src={CheckPic} className='info-checkpic'/><h3>{item}</h3></div>))}
                    </div>
                </div>
                
            </div>

            <div className='info-step'>
                <TitlePage name='Etapas'/>
                {stringsStep.map((item) => (<div className='info-stepitem' key={item.num}><h2>{item.num}</h2><p>{item.description}</p></div>))}
            </div>
            
            <div className='info-future'>   
                <TitlePage name='Futuro'/>
                <img src={FutureInfo} alt="" />
            </div>
            
        </section>
    )
}

export default Info;