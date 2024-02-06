/* eslint-disable @typescript-eslint/no-unused-vars */
import pic1 from '../assets/engpic.png';
import pic2 from '../assets/unipampapic.jpg';

export type EventData = {
    id: string,
    image: string,
    title: string,
    date: string,
    url: string,
    description: string
}

export const events: EventData[] = [
    {id: '0', image: pic2, title: "Seminário de Potencial Eólico da Metade Sul Riograndense", date: "11/09/2000", url: 'seminario-potencial-eolico', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi, nemo ad asperiores maiores a suscipit sit ratione rem beatae odit at quam ab in, quibusdam reiciendis facere quis excepturi vero repellendus non? Commodi nisi autem iusto delectus laboriosam eum vitae, perferendis, iste magni corporis, porro eius veritatis voluptates laborum aut at iure! Nesciunt, sequi reiciendis dolorum perferendis suscipit repellat."},
    {id: '1', image: pic1, title: "Seminário da Metade Sul Riograndense", date: "19/01/2024", url: 'seminario-rs', description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam exercitationem, ea laudantium suscipit eius ipsa, quaerat dolor numquam alias qui ducimus facere libero minus. Consectetur, nobis enim optio necessitatibus sunt ea porro rerum voluptatibus quos, molestias officia, animi voluptate."},
    {id: '2', image: pic2, title: "Seminário de Potencial da Metade Sul Riograndense", date: "23/12/2023", url: 'pontencial-eolico', description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea reprehenderit impedit dolore corrupti fugiat quos unde beatae a, nobis ab quaerat facilis ipsum officiis cupiditate perferendis dolorum sunt voluptatem temporibus doloribus quidem laborum dolor. Voluptate excepturi vitae necessitatibus assumenda inventore quaerat voluptates quos sed voluptas!"}
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
    {id: '1', name: 'Domminic Gomes da Silva', image: Dominnic},
    {id: '2', name: 'Vinicius Amaro Ferreira da Silva', image: Vinicius},
    {id: '3', name: 'Eng. Rodrigo Buroni Machado', image: Rodrigo},
    {id: '4', name: 'Thiago Prestes Rodrigues', image: Thiago},
    {id: '5', name: 'Eng. Itiberê Gonçalves S. Filho', image: Itibere},
    {id: '6', name: 'Guilherme Caneda Correia', image: Guilherme},
    {id: '7', name: 'Eng. Caique Nunes M. Santana', image: Caique},
    {id: '8', name: 'Eng. John Roger Roldan Aleixo', image: John}
]

import Jocemar from '../assets/about-us/members/Jocemar.png';
import Sabrina from '../assets/about-us/members/Sabrina.png';
import Erico from '../assets/about-us/members/Erico.png';
import Carlos from '../assets/about-us/members/Carlos.png';
import Marcelo from '../assets/about-us/members/Marcelo.png';
import AnaRosa from '../assets/about-us/members/AnaRosa.png';
import Cristine from '../assets/about-us/members/Cristine.png';

export const collaborators: MembersData[] = [
    {id: '0', name: 'Dr. Jocemar Biasi Parizzi', image: Jocemar},
    {id: '1', name: 'Dra. Sabrina Neves da Silva', image: Sabrina},
    {id: '2', name: 'Dr. Erico Marcelo Hoff Do Amaral', image: Erico},
    {id: '3', name: 'Dr. Carlos Sonier do Nascimento', image: Carlos},
    {id: '4', name: 'Dr. Marcelo Romero de Moraes', image: Marcelo},
    {id: '5', name: 'Dra. Ana Rosa Costa Muniz', image: AnaRosa},
    {id: '6', name: 'Dra. Cristine Machado Schwanke', image: Cristine}
]