import './GeoEnergiaNuclear.scss'
//import pic1 from '@Assets/geoenergia/nuclear/nuclear1.png'
import pic2 from '@Assets/geoenergia/nuclear/nuclear2.png'
import pic3 from '@Assets/geoenergia/nuclear/nuclear3.png'
import pic4 from '@Assets/geoenergia/nuclear/nuclear4.png'

const GeoEnergiaNuclear = () => {
  return (
    <div className='genuclear-container'>
        <h2>ENERGIA NUCLEAR</h2>

        <div className='genuclear-cards-layout'>

            <div className='genuclear-card1'>
                <div><p>A <span>energia nuclear</span> é uma forma de obter energia a partir dos <span>átomos</span>, que são as menores partes que compõem todas as coisas ao nosso redor, como as cadeiras, os animais, as plantas e até mesmo nós mesmos!</p>
                <p>Dentro de cada átomo, existem duas partes muito importantes: o <span>núcleo</span> e os <span>elétrons</span>. O núcleo é como o "coração" do átomo, e é composto por partículas chamadas prótons e nêutrons.</p>
                </div><img src={pic2} alt="" />
            </div>

            <div className='genuclear-card2'>
                <p>A <span>energia nuclear</span> é obtida quando o núcleo de um átomo é <span>dividido</span> em partes menores. Esse processo é chamado de fissão nuclear. Quando isso acontece, uma grande quantidade de energia é <span>liberada.</span></p>
                <img src={pic3} alt="" />
            </div>
        </div>

        <div className='genuclear-card3'>
            <p>Essa energia é usada para fazer coisas importantes, como gerar eletricidade. Dentro de uma usina nuclear, existem <span>reatores nucleares,</span> que são como grandes <span>caldeirões</span> que contêm material nuclear, como o <span>urânio.</span></p>
            <p>Quando o <span>urânio</span> é colocado dentro do <span>reator nuclear</span>, acontecem reações que fazem com que os núcleos dos átomos se dividam, liberando muita energia. Essa energia é usada para <span>aquecer água</span> e <span>produzir vapor</span>, que faz as <span>turbinas girarem.</span></p>
            <img src={pic4} alt="" />
            <p>E quando as <span>turbinas</span> giram, elas estão conectadas a <span>geradores</span>, que são máquinas que <span>transformam o movimento em eletricidade.</span></p>
        </div>
    </div>
  )
}

export default GeoEnergiaNuclear