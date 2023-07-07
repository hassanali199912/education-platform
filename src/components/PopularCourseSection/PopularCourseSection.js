import CourseCard from "../sub-components/CourseCard";
import "./PopularCourseSection.css";
import {populerCourses} from '../../data/coureses'

export default function PopularCourseSection() {
  return (
    <>
     
     
     {/*================= Popular Course Section Start Here =================*/}
     <div className="popular__course__area pt---100 pb---100">
        <div className="container">
          <div className="react__title__section text-center">
            <h2 className="react__tittle">Popular Courses</h2>
            <img src="assets/images/line.png" alt="image" />
          </div>
          <div className="row">
          {populerCourses.map((item) => <CourseCard key={item.id} course={item} />)}
         
            {/* <div className="col-lg-3">
              <div className="course__item mb-30">
                <div className="course__thumb">
                  <a href="coureses-single.html"><img src="assets/images/course/1.png" alt="image" /></a>
                </div>
                <div className="course__inner">
                  <ul>
                    <li>UX Design</li>
                    <li>24 Lessons</li>
                  </ul>
                  <h3 className="react-course-title"><a href="coureses-single.html">Dave conservatoire is the<br /> Entirely free online.</a></h3>
                  <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      <span>77 Students</span>
                    </div>                                            
                    <div className="react__user">
                      $68.00
                    </div>
                  </div>
                </div>                                    
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course__item mb-30">
                <div className="course__thumb">
                  <a href="coureses-single.html"><img src="assets/images/course/2.png" alt="image" /></a>
                </div>
                <div className="course__inner">
                  <ul>
                    <li>UX Design</li>
                    <li>39 Lessons</li>
                  </ul>
                  <h3 className="react-course-title"><a href="coureses-single.html">Strategy law and <br /> Organization foundation.</a></h3>
                  <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      <span>99 Students</span>
                    </div>                                            
                    <div className="react__user">
                      $99.00
                    </div>
                  </div>
                </div>                                    
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course__item mb-30">
                <div className="course__thumb">
                  <a href="coureses-single.html"><img src="assets/images/course/3.png" alt="image" /></a>
                </div>
                <div className="course__inner">
                  <ul>
                    <li>UX Design</li>
                    <li>20 Lessons</li>
                  </ul>
                  <h3 className="react-course-title"><a href="coureses-single.html">Python for Data Science &amp; <br /> Machine Learning</a></h3>
                  <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      <span>68 Students</span>
                    </div>                                            
                    <div className="react__user">
                      $79.00
                    </div>
                  </div>
                </div>                                    
              </div>
            </div>
            <div className="col-lg-3">
              <div className="course__item mb-30">
                <div className="course__thumb">
                  <a href="coureses-single.html"><img src="assets/images/course/4.png" alt="image" /></a>
                </div>
                <div className="course__inner">
                  <ul>
                    <li>UX Design</li>
                    <li>26 Lessons</li>
                  </ul>
                  <h3 className="react-course-title"><a href="coureses-single.html">The complete web develop <br />Ment bootcamp.</a></h3>
                  <div className="course__card-icon d-flex align-items-center">
                    <div className="course__card-icon--1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      <span>84 Students</span>
                    </div>                                            
                    <div className="react__user">
                      $120.00
                    </div>
                  </div>
                </div>                                    
              </div>
            </div> */}
          </div>
          <div className="text-center">
            <a href="#" className="view-courses"> View All Courses <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
          </div>
        </div>
      </div>
      {/*================= Popular Course Section End Here =================*/}


    </>
  );
}
