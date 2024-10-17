/* eslint-disable @typescript-eslint/no-unused-vars */
import seminario_potencialeolico from '../assets/events/seminario_potencialeolico.png';
import reuniao_regional from '../assets/events/reuniao_regional.png';
import polo_inovacaoenergetica from '../assets/events/polo_inovacaoenergetica.png';
import encif from '../assets/events/encif.png';
import visita_laboratorioufsm from '../assets/events/visita_laboratorioufsm.png';
import visita_cerrochato from '../assets/events/visita_cerrochato.png';
import mercopar from '../assets/events/mercopar.png';
import siepe from '../assets/events/siepe.png';
import seminario_socioambiental from '../assets/events/seminario_socioambiental.png';

//GOOGLE ANALYTICS
export const idGoogleAnalytics: string = "teste"


// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------EVENTOS---------------------------------------
// ----------------------------------------------------------------------------------------------------------------
export type EventData = {
    id: string,
    image: string,
    title: string,
    date: string,
    description: string
}

export const events: EventData[] = [
    {id: '0', image: seminario_potencialeolico, title: "Seminário de Potencial Eólico da Metade Sul Riograndense", date: "24 de novembro, 2023", description: "Evento realizado em 24 de novembro de 2023 no Campus Bagé da Universidade Federal do Pampa (Unipampa) avaliando o potencial eólico da região. A iniciativa partiu de uma colaboração entre BEMSPampa e GrEEn para reunir não apenas acadêmicos e docentes, mas também autoridades importantes, de forma a estabelecer um ambiente propício para a troca de conhecimento e a promoção de discussões cruciais sobre energia eólica."},
    {id: '1', image: reuniao_regional,title: "Reunião Regional - Projeto de Lei para inclusão da região carbonífera do RS no Programa de Transição Energética Justa.", date: "01 de novembro, 2023", description: "Discussão do projeto que propõe a transição energética através do PLS 4653/2023, em sintonia com metas globais de redução de carbono. Foi discutido o objetivo do projeto de realizar, até 2040, a transferência da matriz carbonífera no RS,  com destaque a possibilidade que o setor carboquímico tem de contribuir com uma transição energética justa para a região."},
    {id: '2', image: polo_inovacaoenergetica, title: "Pólo de Inovação Energética e Ambiental do Pampa Gaúcho - Projeto holístico para o uso sustentável do PRÉ-SAL do Pampa Gaúcho", date: "28 de abril, 2023", description: "Seminário destaca pesquisa, investimentos em energias limpas e parceria público-privada na construção do futuro energético sustentável em projeto de Polo de Inovação Energética e Ambiental. Especialistas e autoridades do setor energético e ambiental discutiram acerca das perspectivas e obstáculos para implementação do polo, além de discutir sobre a transição energética justa."},
    {id: '3', image: seminario_socioambiental, title: "Seminário: Sensibilidade Socioambiental de Eólicas Offshore e Nearshore no RS.", date: "31 de outubro, 2023", description: "Seminário destaca a importância da sensibilidade socioambiental em projetos de eólicas offshore e nearshore no RS. Enfatiza-se a necessidade da disseminação precisa de informações, tornando-as acessíveis mesmo para as comunidades mais remotas. O evento aborda o planejamento criterioso para garantir que a implementação de novas tecnologias não afete negativamente nenhuma dessas comunidades, ressaltando o compromisso com a sustentabilidade"},
    {id: '4', image: visita_laboratorioufsm, title: "Visita aos laboratórios do Instituto de Redes Inteligentes (INRI) da UFSM", date: "23 de outubro, 2023", description: "Equipe do BEMSPampa e estudantes da UNIPAMPA realizam visita aos laboratórios do Instituto de Redes Inteligentes (INRI) e Centro de Excelência em Energia e Sistemas de Potência (CEESP) da UFSM. Durante a experiência, os participantes adentraram nos laboratórios de energias renováveis e smart grid, mergulhando nos avanços de veículos elétricos, inversores solares, tecnologias de hidrogênio e células a combustível, além de explorar testes e ensaios em transformadores e equipamentos diversos"},
    {id: '5', image: visita_cerrochato, title: "Visita ao Complexo Eólico Cerro Chato e Subestações", date: "08 de dezembro, 2023", description: "Acadêmicos e docentes realizam visita técnica ao Complexo Eólico Cerro Chato em Santana do Livramento, explorando a matriz, os parques e as subestações. A imersão prática ofereceu um valioso aprendizado sobre a energia eólica, destacando seu potencial promissor na região e proporcionando uma visão realista dos estudos acerca desta energia renovável."},
    {id: '6', image: mercopar, title: "Feira de Inovação Industrial MERCOPAR 32° Edição ", date: "18 de outubro, 2023", description: "No evento, as perspectivas de desenvolvimento tecnológico foram destacadas como o cerne do compromisso de empresas de diversos portes com a produção de energia e combustíveis de maneira sustentável. Grandes, médias e pequenas empresas compartilharam suas visões sobre os próximos passos na jornada rumo à transição energética, revelando um panorama promissor para o futuro sustentável."},
    {id: '7', image: siepe, title: "15° SIEPE Ciência, Geodiversidade e Desenvolvimento Sustentável. ", date: "29 de novembro, 2023", description: "No 15° SIEPE, a apresentação do projeto BEMSPampa ficou por conta do bolsista Thiago Prestes, onde destacou a importância do projeto visto que o levantamento de informações revelou alta dispersão e irregularidade entre as bases de dados utilizadas, reforçando a relevância desse projeto para o estudo do potencial dos recursos energéticos na região. "},
    {id: '8', image: encif, title: "7° Encontro de Ciência e Tecnologia do IFSul - ENCIF Bagé.", date: "06 de dezembro, 2023", description: "No 7° ENCIF, a apresentação do projeto BEMSPampa ficou por conta da bolsista Dominnic Gomes, que colocou em destaque o escopo inovador da plataforma digital, onde o design e divulgação de conteúdos segue uma estratégia para o usuário. A iniciativa visa investigar e mapear os recursos energéticos da região, justificando-se pela necessidade de consolidar informações geoenergéticas."}
]

// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------MEMBROS---------------------------------------
// ----------------------------------------------------------------------------------------------------------------

import Enoque from '../assets/about-us/members/Enoque.png';
import Dominnic from '../assets/about-us/members/Dominnic.png';
import Vinicius from '../assets/about-us/members/Vinicius.png';
import Rodrigo from '../assets/about-us/members/Rodrigo.png';
import Thiago from '../assets/about-us/members/Thiago.png';
import Itibere from '../assets/about-us/members/Itibere.png';
import Guilherme from '../assets/about-us/members/Guilherme.png';
import Caique from '../assets/about-us/members/Caique.png';
import John from '../assets/about-us/members/John.png';

export type MembersData = {
    id: string,
    name: string,
    image: string
}

export const developers: MembersData[] = [
    {id: '0', name: 'Dr. Enoque Dutra Garcia', image: Enoque},
    {id: '1', name: 'Dominnic Gomes da Silva', image: Dominnic},
    {id: '2', name: 'Vinicius Amaro Ferreira da Silva', image: Vinicius},
    {id: '3', name: 'Eng. Rodrigo Buroni Machado', image: Rodrigo},
    {id: '4', name: 'Thiago Prestes Rodrigues', image: Thiago},
    {id: '5', name: 'Eng. Itiberê Gonçalves S. Filho', image: Itibere},
    {id: '6', name: 'Guilherme Caneda Correia', image: Guilherme},
    {id: '7', name: 'Eng. Caique Nunes M. Santana', image: Caique},
    {id: '8', name: 'Dr. Erico Marcelo Hoff Do Amaral', image: Erico}
]

import Jocemar from '../assets/about-us/members/Jocemar.png';
import Sabrina from '../assets/about-us/members/Sabrina.png';
import Erico from '../assets/about-us/members/Erico.png';
import Carlos from '../assets/about-us/members/Carlos.png';
import Marcelo from '../assets/about-us/members/Marcelo.png';
import Ana from '../assets/about-us/members/Ana.png';
import Cristine from '../assets/about-us/members/Cristine.png';

export const collaborators: MembersData[] = [
    {id: '0', name: 'Dr. Jocemar Biasi Parizzi', image: Jocemar},
    {id: '1', name: 'Dra. Sabrina Neves da Silva', image: Sabrina},
    {id: '2', name: 'Eng. John Roger Roldan Aleixo', image: John},
    {id: '3', name: 'Dr. Carlos Sonier do Nascimento', image: Carlos},
    {id: '4', name: 'Dr. Marcelo Romero de Moraes', image: Marcelo},
    {id: '5', name: 'Dra. Ana Rosa Costa Muniz', image: Ana},
    {id: '6', name: 'Dra. Cristine Machado Schwanke', image: Cristine}
]


// ----------------------------------------------------------------------------------------------------------------
// ---------------------------------------DADOS----------------------------------------
// ----------------------------------------------------------------------------------------------------------------

import BalancoEnergetico from '@Assets/data/BalancoEnergetico.png'
import Bioenergia from '@Assets/data/Bioenergia.png'
import CarvaoMineral from '@Assets/data/CarvaoMineral.png'
import Consumo from '@Assets/data/Consumo.png'
import Eolica from '@Assets/data/Eolica.png'
import Fossil from '@Assets/data/Fossil.png'
import GeracaoDistribuida from '@Assets/data/GeracaoDistribuida.png'
import Hidrica from '@Assets/data/Hidrica.png'
import Potencial from '@Assets/data/Potencial.png'
import Solar from '@Assets/data/Solar.png'
import SubestacoesDeEnergia from '@Assets/data/SubestacoesDeEnergia.png'
import TransmissaoDeEnergia from '@Assets/data/TransmissaoDeEnergia.png'

export type DataType = {
    id: string,
    image: string,
    name: string,
    url: string
}
const linkData = "https://drive.google.com/drive/folders/1HoyETMMzg0ocvCUmTVOgwyXmzgjMD4rf?usp=share_link";

export const listData: DataType[] = [
    {id: '1', url: linkData, image: BalancoEnergetico, name: "Balanço Energético"},
    {id: '2', url: linkData, image: Bioenergia, name: "Bioenergia"},
    {id: '3', url: linkData, image: CarvaoMineral, name: "Carvão Mineral"},
    {id: '4', url: linkData, image: Consumo, name: "Consumo"},
    {id: '5', url: linkData, image: Eolica, name: "Eólica"},
    {id: '6', url: linkData, image: Fossil, name: "Fóssil"},
    {id: '7', url: linkData, image: GeracaoDistribuida, name: "Geração Distribuída"},
    {id: '8', url: linkData, image: Hidrica, name: "Hídrica"},
    {id: '9', url: linkData, image: Potencial, name: "Potencial"},
    {id: '10', url: linkData, image: Solar, name: "Solar"},
    {id: '11', url: linkData, image: SubestacoesDeEnergia, name: "Subestações de Energia"},
    {id: '12', url: linkData, image: TransmissaoDeEnergia, name: "Transmissão de Energia"}
]

// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------PUBLICAÇÕES-------------------------------------
// ----------------------------------------------------------------------------------------------------------------
import UFSMArticle from '@Assets/publication/firstarticle.png';
import SiepeArticle from '@Assets/publication/secondarticle.jpeg';
import BemspampaImage from '@Assets/publication/bemspampa-img.png';

export type PublicationType = {
    id: string,
    file: string,
    image: string,
    name: string,
    authors: string[],
    url: string,
}


//SEM URL DO DOCUMENTO DO ENCIF, ALTERAR NO MOMENTO QUE TIVER
//SEM FILE PRA ABRIR DIRETO OS ULTIMOS 3 DO ENCIF

export const publicationData: PublicationType[] = [
    {id: "1", image: UFSMArticle, file: "/bemspampa/documentos/docUFSM.pdf", name: "BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética", url: "http://repositorio.ufsm.br/handle/1/30583", authors: ["Autores", "Silva, Vinicius Amaro Ferreira", "Garcia, Enoque Dutra", "Silva, Dominnic Gomes", "Machado, Rodrigo Buroni", "Rodrigues, Thiago Prestes", "Filho, Itiberê Gonçalves Silva", "Santana, Caique Nunes Maria"]},
    {id: "2", image: SiepeArticle, file: "/bemspampa/documentos/docSIEPE.pdf", name: "BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética", url: "https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/116940", authors: ["Autores", "Rodrigues, Thiago Prestes", "Silva, Dominnic Gomes", "Silva, Vinicius Amaro Ferreira", "Santana, Caique Nunes Maria", "Machado, Rodrigo Buroni", "Garcia, Enoque Dutra"]},
    {id: "3", image: UFSMArticle, file: "/bemspampa/documentos/docENCIF.pdf", name: "BEMSPampa: Balanço Energético da Metade Sul - Bioma Pampa no contexto da Transição Energética", url: "", authors: ["Autores", "SILVA, G.D", "SILVA. F.A.V.", "GARCIA, D.E", "RODRIGUES, P.T", "MACHADO, B.R."]},
    
    {id: "4", image: SiepeArticle, file: "", name: "Aplicação do Opendss no Contexto da Transição Energética pela Ótica da Engenharia de Energia", url: "https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/117460", authors: ['Autores', 'Dominnic Gomes da Silva', 'Thiago Prestes Rodrigues', 'Eduardo Ferreira Leite', 'Vinicius Amaro Ferreira da Silva', 'Thiago Quadros dos Santos', 'Enoque Dutra Garcia']},
    {id: "5", image: SiepeArticle, file: "", name: "Geração de Energia Eólica em Rio Grande na Praia do Cassino", url: "https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/117458", authors: ['Autores', 'Louise Domingues Coelho', 'Carlos Sonier Cardoso do Nascimento']},
    {id: "6", image: SiepeArticle, file: "", name: "Estudo de Implementação de um Parque Eólico na Região de Bagé/RS", url: "https://periodicos.unipampa.edu.br/index.php/SIEPE/article/view/116941", authors: ['Autores', 'Vinicius Silva', 'Vinicius Amaro Ferreira da Silva', 'Carlos Sonier Cardoso Do Nascimento']},
    {id: "7", image: BemspampaImage, file: "/bemspampa/documentos/ebookBEMSPAMPA.pdf", name: "BEMSPampa: Balanço Energético da Metade Sul", url: "", authors: ['Autores', 'Enoque Garcia', 'Dominnic Silva', 'Caique Nunes', 'Vinicius Amaro', 'Rodrigo Buroni', 'Itiberê Filho', 'Guilherme Caneda']}
]


// ----------------------------------------------------------------------------------------------------------------
// ------------------------------------INFOGRAFICOS-------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//ARQUIVOS
const Infografico_Bioenergia: string = "/bemspampa/infograficos/Infografico_Bioenergia.pdf";
const Infografico_CarvaoMineral: string = "/bemspampa/infograficos/Infografico_CarvaoMineral.pdf"
const Infografico_Fossil: string = "/bemspampa/infograficos/Infografico_Fossil.pdf"
const Infografico_HidrogenioVerde: string = "/bemspampa/infograficos/Infografico_HidrogenioVerde.pdf"
const Infografico_MobilidadeEletrica: string = "/bemspampa/infograficos/Infografico_MobilidadeEletrica.pdf"
const Infografico_Solar: string = "/bemspampa/infograficos/Infografico_Solar.pdf"
const Infografico_Hidrica: string = "/bemspampa/infograficos/Infografico_Hidrica.pdf"
const Infografico_Eolica: string = "/bemspampa/infograficos/Infografico_Eolica.pdf"

//RESTANTE DAS IMAGENS
import hidrica from '@Assets/dashboard/hidrica.png'
import bioenergia from '@Assets/dashboard/bioenergia.png'
import carvao_mineral from '@Assets/dashboard/carvao_mineral.png'
import eolica from '@Assets/dashboard/eolica.png'
import fossil from '@Assets/dashboard/fossil.png'
import solar from '@Assets/dashboard/solar.png'
import hidrogenio_verde from '@Assets/dashboard/hidrogenio_verde.png'
import mobilidade_eletrica from '@Assets/dashboard/mobilidade_eletrica.png'


export type InfographicItemType = {
    id: string,
    image: string,
    name: string,
    file: string
}

export const infographicData: InfographicItemType[] = [
    {id: "1", file: Infografico_Bioenergia, name: "Bioenergia", image: bioenergia},
    {id: "2", file: Infografico_CarvaoMineral, name: "Carvão Mineral", image: carvao_mineral},
    {id: "3", file: Infografico_Fossil, name: "Fóssil", image: fossil},
    {id: "4", file: Infografico_HidrogenioVerde, name: "Hidrogênio Verde", image: hidrogenio_verde},
    {id: "5", file: Infografico_MobilidadeEletrica, name: "Mobilidade Elétrica", image: mobilidade_eletrica},
    {id: "6", file: Infografico_Solar, name: "Solar", image: solar},
    {id: "7", file: Infografico_Hidrica, name: "Hídrica", image: hidrica},
    {id: "8", file: Infografico_Eolica, name: "Eólica", image: eolica},
]