import './Contact.css';
import Footer2 from '../../components/Footer/Footer2';
import Header2 from '../../components/Header/Header2';
import Wrapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import ContactSection from '../../components/ContactSection/ContactSection';

export default function Contact(){
    return (
        <>
        <Header2 />
        
        <Wrapper >
        <BreadCrumbs title="Contact" />
        <ContactSection/>
        </Wrapper>

        <Footer2 />
        </>
    );
}