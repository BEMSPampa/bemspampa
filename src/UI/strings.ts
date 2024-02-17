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