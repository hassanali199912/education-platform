import CardCountArea from "../sub-components/CardCountArea";
import UserProfile from "../sub-components/UserProfile";
import "./ProfileComponent.css";
import  {userProfile} from '../../data/userProfile'
import CardRelatedCourse from "../sub-components/CardRelatedCourse";

export default function ProfileComponent() {
  const {userData,numbersAndStatic,courses} =  userProfile;
  return (
    <>
      {/*=================  Profile Component Start Here ================= */}
      <div className="profile-top back__course__area pt---120 pb---90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={userData.img} alt={userData.name} />
              <a href="#" className="follows">Follow <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></a>
            </div>
            <div className="col-lg-8">
              <UserProfile userData={userProfile.userData} />
              {/* <ul className="user-section">
                <li className="user">
                  <span className="name">Name:</span><em>Hanson Deck</em>
                </li>
                <li>Job Title:<em>Lead Teacher</em> </li>
                <li>Phone:<em>+(088) 223 478 365</em> </li>
                <li>Email:<em>Support@info.com </em> </li>
                <li className="social">
                  Follow: <em>
                    <a href="#"><span aria-hidden="true" className="social_facebook" /></a>
                    <a href="#"><span aria-hidden="true" className="social_twitter" /></a>
                    <a href="#"><span aria-hidden="true" className="social_linkedin" /></a>
                  </em>
                </li>
              </ul>
              <h3>Biography</h3>
              <p>Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your father David skive off sloshed, don't get shirty with me chip shop vagabond crikey bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver old no biggie fantastic boot, David have it show off show off pick your nose and blow off lost the plot porkies bits and bobs only a quid bugger all mate.</p> */}
              <div className="count__area2">                                                               
                <ul className="row">
               {numbersAndStatic.map(item =>  <CardCountArea key={item.id}  countData={item} />)}
               
                  {/* <li className="col-lg-4">
                    <div className="count__content">
                      <div className="icon">
                        <img src="assets/images/profile/2.png" alt="profile" />
                      </div>
                      <div className="text">
                        <span className="count__content-title counter">28</span><em>k</em>
                        <p>Foreign followers</p> 
                      </div>                                           
                    </div>
                  </li> 
                  <li className="col-lg-4">
                    <div className="count__content">
                      <div className="icon">
                        <img src="assets/images/profile/3.png" alt="profile" />
                      </div>
                      <div className="text">
                        <span className="count__content-title counter">10</span><em>k</em>
                        <p>Classes complete</p> 
                      </div>                                           
                    </div>
                  </li>
                  <li className="col-lg-4">
                    <div className="count__content">
                      <div className="icon">
                        <img src="assets/images/profile/4.png" alt="profile" />
                      </div>
                      <div className="text">
                        <span className="count__content-title counter">208</span><em>k</em>
                        <p> Students enrolled</p>  
                      </div>                                          
                    </div>
                  </li>
                  */}
                </ul>
              </div>
              <h2 className="teacher__course">Teacher Courses</h2>
              <div className="react-course-filter related__course">                                      
                <div className="row react-grid">
                {courses.map(item =>  <CardRelatedCourse key={item.id} ralatedCourseData = {item}  />   )}      
                {/* <CardRelatedCourse />                      
                <CardRelatedCourse />                      
                <CardRelatedCourse />                      
                <CardRelatedCourse />                       */}
{/*                   
                  <div className="single-studies col-lg-6 grid-item">
                    <div className="inner-course">
                      <div className="case-img">
                        <a href="#" className="cate-w">Web Design</a>
                        <img src="assets/images/course-filter/1.jpg" alt="Course Image" />
                      </div>
                      <div className="case-content">
                        <ul className="meta-course">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 4.5 review </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> 44 Students </li>
                        </ul>
                        <h4 className="case-title"> <a href="coureses-single.html">The Most Complete Design <br />Thinking Course On The Market.</a></h4>
                        <div className="react__user">
                          <img src="assets/images/course/small-image/1.png" alt="user" /> Justin Case
                        </div>
                        <ul className="react-ratings">
                          <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> Lessones</li>
                          <li className="price">$34.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-studies col-lg-6 grid-item">
                    <div className="inner-course">
                      <div className="case-img">
                        <a href="#" className="cate-w">Marketing</a>
                        <img src="assets/images/course-filter/2.jpg" alt="Course Image" />
                      </div>
                      <div className="case-content">
                        <ul className="meta-course">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 3.5 review </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> 55 Students </li>
                        </ul>
                        <h4 className="case-title"> <a href="coureses-single.html">Everything You Need to Know <br /> About Business.</a></h4>
                        <div className="react__user">
                          <img src="assets/images/course/small-image/5.png" alt="user" /> Natasha Pawel
                        </div>
                        <ul className="react-ratings">
                          <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> 9 Lessones </li>
                          <li className="price">$89.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-studies col-lg-6 grid-item">
                    <div className="inner-course">
                      <div className="case-img">
                        <a href="#" className="cate-w">Marketing</a>
                        <img src="assets/images/course-filter/3.jpg" alt="Course Image" />
                      </div>
                      <div className="case-content">
                        <ul className="meta-course">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 3.5 review </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> 55 Students </li>
                        </ul>
                        <h4 className="case-title"> <a href="coureses-single.html">Machine Learning A-Z: Hands-On <br />Python and java</a></h4>
                        <div className="react__user">
                          <img src="assets/images/course/small-image/5.png" alt="user" /> Natasha Pawel
                        </div>
                        <ul className="react-ratings">
                          <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> 9 Lessones </li>
                          <li className="price">$89.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-studies col-lg-6 grid-item">
                    <div className="inner-course">
                      <div className="case-img">
                        <a href="#" className="cate-w">Marketing</a>
                        <img src="assets/images/course-filter/4.jpg" alt="Course Image" />
                      </div>
                      <div className="case-content">
                        <ul className="meta-course">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 3.5 review </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> 55 Students </li>
                        </ul>
                        <h4 className="case-title"> <a href="coureses-single.html">Become a UI/UX Designer <br />Everything You need To Know.</a></h4>
                        <div className="react__user">
                          <img src="assets/images/course/small-image/5.png" alt="user" /> Natasha Pawel
                        </div>
                        <ul className="react-ratings">
                          <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> 9 Lessones </li>
                          <li className="price">$89.00</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                   */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Profile Component End Here ================= */}
    </>
  );
}
