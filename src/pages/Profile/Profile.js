import './Profile.css';
import Footer2 from '../../components/Footer/Footer2';
import FooterTopCart from '../../components/Footer/FooterTopCart';
import Header2 from '../../components/Header/Header2';
import Wrapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import InstructorsSectionPage from '../../components/InstructorAreaSection/InstructorsSectionPage';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';

export default function Profile(){
    return (
        <div className='profile-page'>
          <Header2 />
        
        <Wrapper >
            <BreadCrumbs title="profile" />
            <ProfileComponent />
        </Wrapper>

         <Footer2 />
        
         </div>
    );
}