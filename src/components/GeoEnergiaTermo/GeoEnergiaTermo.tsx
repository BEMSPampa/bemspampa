import './GeoEnergiaTermo.scss'
import pic2 from "@Assets/geoenergia/termo/termo2.png"
import pic3 from "@Assets/geoenergia/termo/termo3.png"
import pic4 from "@Assets/geoenergia/termo/termo4.png"
import pic5 from "@Assets/geoenergia/termo/termo5.png"
import pic6 from "@Assets/geoenergia/termo/termo6.png"
import pic7 from "@Assets/geoenergia/termo/termo7.png"

const GeoEnergiaTermo = () => {
  return (
    <div className='getermo-container'>
      <h2 id='getermo-title'>ENERGIA TERMOELÉTRICA</h2>

      <div className='getermo-card1'>
        <p><span>Energia termoelétrica</span> é um tipo de energia que é gerada a partir do <span>calor</span>. Vamos usar um exemplo para entender melhor:</p>
        <p>Imagine que você está em casa e quer fazer uma xícara de chá. Para isso, você coloca água em uma chaleira e a coloca no fogão para esquentar. </p>
        <div>
          <img src={pic2} alt="" />
          <img src={pic3} alt="" />
          <img src={pic4} alt="" />
        </div>
        <p>O fogão é uma fonte de calor. À medida que a chaleira fica sobre o fogo, a água dentro dela começa a esquentar cada vez mais.</p>
      </div>

      <div className='getermo-card2'>
        <div>
          <p>Agora, pense em uma escala muito maior, como uma grande fábrica chamada <span>usina termoelétrica.</span></p>
          <p>Estas usinas utilizam uma fonte de calor <span>muito poderosa,</span> como queima de <span>carvão, gás natural</span> ou <span>óleo</span>, para gerar calor em grande quantidade.</p>
        </div>
        <img src={pic5} alt="" />
      </div>

      <div className='getermo-card3'>
        <div>
          <p>Esse calor é usado para aquecer uma enorme quantidade de água que é armazenada em <span>gigantescos recipientes</span> chamados <span>caldeiras.</span></p>
          <p>Quando a água é aquecida, ela se transforma em <span>vapor,</span> assim como aconteceu com a <span>água da chaleira.</span></p>
        </div>
        <img src={pic6} alt="" />
      </div>

      <div className='getermo-card4'>
        <p>Esse vapor é muito poderoso e, quando liberado com <span>pressão,</span> pode <span>movimentar</span> enormes turbinas. As turbinas são como grandes rodas que giram rapidamente com o vapor quente passando por elas.</p>
        <div>
          <img src={pic7} alt="" />
          <div>
            <p><span>Adivinhe</span> o que acontece quando essas turbinas giram?</p>
            <p>Elas estão conectadas a um <span>gerador,</span> que é como um "mágico" que transforma o movimento da turbina em <span>eletricidade</span>! E é assim que a energia termoelétrica é gerada.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeoEnergiaTermo