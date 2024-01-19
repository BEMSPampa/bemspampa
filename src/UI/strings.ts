/* eslint-disable @typescript-eslint/no-unused-vars */
import pic1 from '../assets/engpic.png';
import pic2 from '../assets/unipampapic.jpg';

export type EventData = {
    id: string,
    image: string,
    url: string,
    description: string,
}

export const events: EventData[] = [
    {id: '0', image: pic2, url: 'exemplo-stringts', description: "visita a hduahudeadhuasdasudasudsuadusah"},
    {id: '1', image: pic1, url: 'exemplo-ts', description: "bemspampa visitah hudhaudhausduaduas"},
    {id: '2', image: pic2, url: 'stringts', description: "neste dia visita bemspampa haudheauduasudasadsadsas"}
]
