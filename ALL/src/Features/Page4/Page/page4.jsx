import './Home.css';
import { Hero } from '../../../Shared/components/Sections/Hero/Hero';
import { TestimonialSection } from './Testimonial/TestimonialSection';
import { Footer } from '../../../Shared/components/Sections/Footer/MPFooter'
import  {TechnologiesSection} from '../../../Shared/components/Sections/Tecnologies/TechnologiesSection'
import { OurServiceSection } from '../../../Shared/components/Sections/OurService/OurService';
import { AdditiveManufacturing } from '../../../Shared/components/Sections/AdditiveManufacturing/AdditiveManufacturing';
import { Catalog } from '../../../Shared/components/Sections/Catalog/Catalog';
export function Home() {
    return(
        <div className='AppBody'>
            <Hero></Hero>
            <AdditiveManufacturing></AdditiveManufacturing>
            <TechnologiesSection></TechnologiesSection>
            <OurServiceSection></OurServiceSection>
            <Catalog></Catalog>
            <TestimonialSection></TestimonialSection>
            <Footer></Footer>
        </div>
    )
}