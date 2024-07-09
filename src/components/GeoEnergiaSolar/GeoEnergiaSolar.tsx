import './GeoEnergiaSolar.scss'
import pic1 from '@Assets/geoenergia/solar/solar1.png'
import pic2 from "@Assets/geoenergia/solar/solar2.png"
import pic3 from "@Assets/geoenergia/solar/solar3.png"
import pic4 from "@Assets/geoenergia/solar/solar4.png"
import pic5 from "@Assets/geoenergia/solar/solar5.png"
import pic6 from "@Assets/geoenergia/solar/solar6.png"
//import pic7 from "@Assets/geoenergia/solar/solar7.png"

const GeoEnergiaSolar = () => {
  return (
    <div className='gesolar-container'>
        <h2 id='gesolar-title'>ENERGIA SOLAR</h2>
        <div className='gesolar-card1'>
          <h3>ENERGIA SOLAR PARA AQUECIMENTO</h3>
          <p>Vamos imaginar um dia perfeito na praia para entender como a energia solar pode aquecer nossas casas. </p>
          <p>Você deita na areia, sentindo o sol como um enorme aquecedor natural, certo? Bem, os painéis solares funcionam um pouco como essa fonte natural de calor.</p>
          <img src={pic1} alt="" />
          <p>Os coletores solares, que são como janelas mágicas, para coletar a luz do sol. Quando os raios solares entram nos painéis, eles esquentam, transformando essa energia térmica em água quente.</p>
          <img src={pic2} alt="" />
          <p>Essa energia pode ser usada para esquentar a água do chuveiro ou para aquecer a casa em dias frios, proporcionando conforto de maneira sustentável.</p>
          <p>É como se estivéssemos aproveitando o poder caloroso do sol para criar um ambiente acolhedor em nossos lares, tornando a energia solar uma aliada para nos mantermos quentinhos!</p>
        </div>


        <div className='gesolar-card2'>
          <h3>ENERGIA SOLAR FOTOVOLTAICA</h3>
          <p>Agora, vamos explorar como usamos o sol para gerar eletricidade. Para isso, entram é utilizado os painéis fotovoltaicos, que são painéis que transformam a luz do sol em energia elétrica.</p>
          <img src={pic3} alt="" />
          <p>Esses painéis mágicos são feitos de material especial. Quando a luz solar brilha sobre eles, algo incrível acontece. Os raios solares animam os elétrons dentro desses painéis, fazendo-os se mexer e criar eletricidade. É como se a luz do sol desse um impulso mágico aos elétrons, transformando-os em pequenas fontes de energia elétrica.</p>
          <div>
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
          </div>
          <p>A eletricidade gerada pelos painéis solares pode ser armazenada em baterias ou usada diretamente para alimentar as coisas em nossas casas, como lâmpadas, televisões e computadores.</p>
          <img src={pic6} alt="" />
        </div>
        
    </div>
  )
}

export default GeoEnergiaSolar
