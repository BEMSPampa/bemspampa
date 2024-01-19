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
