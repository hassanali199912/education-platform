import './SingleCoure.css';
import Footer2 from '../../components/Footer/Footer2';
import Header2 from '../../components/Header/Header2';
import Wapper from '../../components/Wapper/Wapper';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import CoursePageGrid from '../../components/CourseComponents/CoursePageGrid';
import SingleCourseComponent from '../../components/CourseComponents/SingleCourseComponent';

export default function SingleCoure(){
    return (
       <div className='course-single'>
      <Header2 />
      <Wapper>
           <SingleCourseComponent />
      </Wapper>
      <Footer2 />
        </div>
    );
}