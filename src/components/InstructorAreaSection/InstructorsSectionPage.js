import { instructors } from "../../data/instructors";
import CardMainInstructor from "../sub-components/CardMainInstructor";
import "./InstructorAreaSection.css";


export default function InstructorsSectionPage() {
  console.log(instructors);
  const x ={
    id: 1,
    name: "Douglas Lyphe",
    title: "Principal",
    img: "assets/images/instructors/1.jpg",
    moveTo: "profile.html",
    description: "Why I say old chap that is spiffing he legged easy peasy.",
    social: [
      {
        name: "facebook",
        url: "facebook.com",
      },
      {
        name: "twitter",
        url: "twitter.com",
      },
      {
        name: "linkedin",
        url: "linkedin.com",
      },
    ],
  };
  return (
    <>

   {/*================= Instructor Section Start Here =================*/}
   <div className="instructors___page pt---120 pb---140">
        <div className="container pb---60">                        
          <div className="row">
         
         {instructors.map((item) => <CardMainInstructor key={item.id} data={item} />) }
            {/* <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/1.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Douglas Lyphe</a></h4>
                  <p>Principal</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/2.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Eleanor Fant</a></h4>
                  <p>Lead Teacher</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/3.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Magnus Lee</a></h4>
                  <p>Administration</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/4.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Hanson Deck</a></h4>
                  <p>Professor</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/5.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Becky Curry</a></h4>
                  <p>Teacher</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/6.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Giles Posture</a></h4>
                  <p>Assistant</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/7.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Jackson Pot</a></h4>
                  <p>Special Assistant</p>
                </div>                                 
              </div>
            </div>
            <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src="assets/images/instructors/8.jpg" alt="course instructor" />
                  <div className="content__hover">
                    <p>Why I say old chap that is spiffing he legged easy peasy.</p>
                    <ul>                                            
                      <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">Douglas Lyphe</a></h4>
                  <p>Teacher</p>
                </div>                                 
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*================= Instructor Section End Here =================*/}


    </>
  );
}
