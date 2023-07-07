import './About.css';
import Footer from '../../components/Footer/Footer';
import Footer2 from '../../components/Footer/Footer2';
import Header from '../../components/Header/Header';
import Header2 from '../../components/Header/Header2';
import Wrapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import AboutArea from '../../components/AboutArea/AboutArea';
import PopularTopics from '../../components/PopularTopics/PopularTopics';
import PopularTopics2 from '../../components/PopularTopics/PopularTopics2';
import InstructorAreaSection from '../../components/InstructorAreaSection/InstructorAreaSection';
import CountAreaSection from '../../components/CountAreaSection/CountAreaSection';
import BlogAreaSection from '../../components/BlogAreaSection/BlogAreaSection';

export default function About(){
    return (
        <>
        <Header2 />
       <Wrapper >
                <BreadCrumbs title="About" />
                <AboutArea /> 
                <PopularTopics2 />
                <InstructorAreaSection />
                <BlogAreaSection />
                <CountAreaSection />
       </Wrapper>
        <Footer2 />
        </>
    );
}