import Goals from '../../components/Goals/Goals';
import Members from '../../components/Members/Members';
import './AboutUs.scss'

const AboutUs = () => {
    return(
        <section className='aboutus-container'>
            <Goals/>
            <Members/>
        </section>
    )
}

export default AboutUs;