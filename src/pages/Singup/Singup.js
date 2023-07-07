import './Singup.css';
import Footer from '../../components/Footer/Footer';

import Footer2 from '../../components/Footer/Footer2';
import FooterTopCart from '../../components/Footer/FooterTopCart';
import Header2 from '../../components/Header/Header2';
import Wrapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import InstructorsSectionPage from '../../components/InstructorAreaSection/InstructorsSectionPage';
import SingUpForm from '../../components/FormComponents/SingUpForm';

export default function Singup(){
    return (
        <>
        <Header2 />
        
        <Wrapper >
            <SingUpForm />
        </Wrapper>

         <Footer2>
         </Footer2>
        </>
    );
}