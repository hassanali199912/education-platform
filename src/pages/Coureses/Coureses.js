import './Coureses.css';
import Footer2 from '../../components/Footer/Footer2';
import Header2 from '../../components/Header/Header2';
import Wapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import CoursePageGrid from '../../components/CourseComponents/CoursePageGrid';

export default function Coureses(){
    return (
       <div className='courses-grid-page'>
      <Header2 />
      <Wapper>
            <BreadCrumbs title="Coureses" />
            <CoursePageGrid />
      </Wapper>
      <Footer2 />
        </div>
    );
}