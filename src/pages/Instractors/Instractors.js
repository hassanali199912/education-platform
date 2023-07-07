import './Instractors.css';
import Footer2 from '../../components/Footer/Footer2';
import FooterTopCart from '../../components/Footer/FooterTopCart';
import Header2 from '../../components/Header/Header2';
import Wrapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import InstructorsSectionPage from '../../components/InstructorAreaSection/InstructorsSectionPage';

export default function Instractors(){
    return (
        <>
        
        <Header2 />
        
        <Wrapper >
        <BreadCrumbs title="Instructors" />
       <InstructorsSectionPage />
        </Wrapper>

         <Footer2>
            <FooterTopCart />
         </Footer2>
        
        </>
    );
}