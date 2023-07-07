import "./CourseComponents.css";

export default function SingleCourseComponent() {
  return (
    <>
        {/*================= Breadcrumbs Section Start Here =================*/}
        <div className="react-breadcrumbs">
          <div className="breadcrumbs-wrap">
            <img className="desktop" src="assets/images/breadcrumbs/2.png" alt="Breadcrumbs" />
            <img className="mobile" src="assets/images/breadcrumbs/22.png" alt="Breadcrumbs" />
            <div className="breadcrumbs-inner">
              <div className="container">
                <div className="breadcrumbs-text">
                  <a href="#" className="cate">Marketing</a>
                  <h1 className="breadcrumbs-title">Everything You Need to Know <br />About Business.</h1>
                  <ul className="user-section">
                    <li className="user">
                      <span><img src="assets/images/course-single/user.jpg" alt="user" /></span>
                      <span>Natasha Pawel</span>
                    </li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> 7 Lessons</li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> 104 Students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>                
        </div>
        {/*================= Breadcrumbs Section End Here =================*/}
        {/*================= Course Filter Section Start Here =================*/}
        <div className="back__course__page_grid react-courses__single-page pb---16 pt---110">
          <div className="container pb---70">
            <div className="row">
              <div className="col-lg-8">
                <div className="course-single-tab">
                  <ul className="nav nav-tabs" id="back-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active" id="discriptions" data-bs-toggle="tab" href="#discription" role="tab" aria-controls="discription" aria-selected="true">Discription</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="curriculums" data-bs-toggle="tab" href="#curriculum" role="tab" aria-controls="curriculum" aria-selected="false">Curriculum</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="reviewss" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a className="nav-link" id="members" data-bs-toggle="tab" href="#member" role="tab" aria-controls="member" aria-selected="false">FAQ</a>
                    </li>                                                                                
                  </ul>
                  <div className="tab-content" id="back-tab-content">
                    <div className="tab-pane fade show active" id="discription" role="tabpanel" aria-labelledby="discription">
                      <h3>About This Course</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat nis Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <p>Sed ut perspiciatis unde om nis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo in ve ntore veritatis et qua architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neu e porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur ad ipisci velit, sed quia non numquame senius modi tempora incidunt ut labore et dolore magnam.</p>
                      <div className="image-banner"><img src="assets/images/course-single/1.jpg" alt="user" /></div>
                    </div>
                    <div className="tab-pane fade" id="curriculum" role="tabpanel" aria-labelledby="curriculum">
                      <h3>Course Curriculum</h3>
                      <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>
                      <div className="single-week">
                        <ul className="week__top">
                          <li>Week 1</li>
                          <li>0/4</li>
                        </ul>
                        <h3>Beginners level</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h3>2 Videos,1 Audio,1 Reading</h3>
                        <ul className="course__title">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7" /><rect x={1} y={5} width={15} height={14} rx={2} ry={2} /></svg> <b>Video:</b> Greetings and Introductions <em className="questions">2 questions</em> <em><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> 12 minutes</em></li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7" /><rect x={1} y={5} width={15} height={14} rx={2} ry={2} /></svg> <b>Video:</b> Introducing Elizabeth Gerber <em> <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg> 26 minutes</em></li>
                        </ul>
                      </div>                                            
                    </div>
                    <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews">
                      <h3>Reviews</h3>                                            
                      <div className="row mt---40 mb----40">
                        <div className="col-lg-4">
                          <div className="five__number">
                            <em>4.5</em>
                            <div className="back-ratings"> 
                              <i className="icon_star" />
                              <i className="icon_star" />
                              <i className="icon_star" />
                              <i className="icon_star" />
                              <i className="icon_star" />
                            </div>
                            <h6>(4 Ratings)</h6>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="back-progress-bar">
                            <div className="skillbar-style2">
                              <div className="skill_inners">
                                <span className="skillbar-title">5 stars</span>
                                <div className="skillbars green-dark-bg" data-percent={100}>               
                                  <p className="skillbar-bar" /> 
                                </div>
                                <span>2</span>                                                                
                              </div>
                              <div className="skill_inners">
                                <span className="skillbar-title">4 stars</span>
                                <div className="skillbars green-dark-bg" data-percent={50}>               
                                  <p className="skillbar-bar" /> 
                                </div>
                                <span>1</span>                                                                
                              </div>
                              <div className="skill_inners">
                                <span className="skillbar-title">3 stars</span>
                                <div className="skillbars green-dark-bg" data-percent={30}>               
                                  <p className="skillbar-bar" /> 
                                </div>
                                <span>1</span>                                                                
                              </div>
                              <div className="skill_inners">
                                <span className="skillbar-title">2 stars</span>
                                <div className="skillbars green-dark-bg" data-percent={10}>               
                                  <p className="skillbar-bar" /> 
                                </div>
                                <span>0</span>                                                                
                              </div>
                              <div className="skill_inners">
                                <span className="skillbar-title">1 stars</span>
                                <div className="skillbars green-dark-bg" data-percent={0}>               
                                  <p className="skillbar-bar" /> 
                                </div>
                                <span>0</span>                                                                
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <a href="#" className="post-author">
                        <div className="avatar">
                          <img src="assets/images/course-single/user4.jpg" alt="user" /> 
                        </div>
                        <div className="info">
                          <div className="back-ratings"> 
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                          </div>
                          <h4 className="name">Bodrum Says <span className="designation">July 8, 2022 at 7:38 am</span></h4>
                          <p>Mi eget mauris pharetra et. Bibendum arcu vitae elementum curabitur vitae. Viverra mauris in aliquam sem fringilla ut morbi tincidunt aliquam purus.</p>          
                        </div>
                      </a>
                      <a href="#" className="post-author">
                        <div className="avatar">
                          <img src="assets/images/course-single/user5.jpg" alt="user" /> 
                        </div>
                        <div className="info"> 
                          <div className="back-ratings"> 
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                          </div>                                                                                 
                          <h4 className="name">Hanson Deck <span className="designation">July 9, 2022 at 6:20 am</span></h4>
                          <p>Lobortis elementum nibh tellus molestie praesent semper feugiat nibh sed pulvinar proin.</p>
                        </div>
                      </a>
                      <div className="blog-form pt---30">
                        <h3>Write a Review</h3>
                        <p className="pb---15">Your email address will not be published. Required fields are marked *</p>
                        <form id="contact-form">                                                    
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="back-input">
                                <input id="name" type="text" name="name" placeholder="Name" />
                              </div>
                            </div>
                            <div className="col-lg-6 pdl-5">
                              <div className="back-input">
                                <input id="email" type="email" name="email" placeholder="Email" />                                  
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="back-input">
                                <input id="subject" type="text" name="subject" placeholder="Subject" />                                  
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="back-ratings"> <b>Ratings:</b> 
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                                <i className="icon_star" />
                              </div>
                              <div className="back-textarea">
                                <textarea id="message" name="message" placeholder="Message" defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-lg-12">                                                
                              <button type="submit" className="back-btn">Submit Review <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></button>
                            </div>
                          </div>                                                    
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="member" role="tabpanel" aria-labelledby="member">
                      <h3>FAQ</h3>
                      <p>Lorem Ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitaes erat consequat auctor eu in elit.</p>
                    </div>
                  </div>
                </div>
                <div className="react-course-filter related__course">                                  
                  <h3>Related Courses</h3>                                             
                  <div className="row react-grid">                            
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
                  </div>
                </div>
              </div>
              <div className="col-lg-4 md-mt-60">
                <div className="react-sidebar react-back-course2 ml----30">                                                                        
                  <div className="widget get-back-course">                                       
                    <ul className="price">
                      <li>$ 72 USD</li>
                      <li>$ 95 USD</li>
                      <li>25% OFF</li>
                    </ul>                                        
                    <ul className="price__course">
                      <li> <i className="icon_profile" /> Instructor <b>Penny Tool</b></li>
                      <li><i className="icon_tag_alt" /> Subject <b>IT &amp; Software</b></li>
                      <li> <i className="icon_group" /> Enrolled <b>146 students</b></li>
                      <li><i className="icon_clock_alt" /> Duration <b>2 weeks</b></li>
                      <li><i className="icon_book_alt" /> Lectures <b>4 lectures</b></li>
                      <li><i className="icon_map_alt" /> Language <b> English</b></li>
                    </ul>
                    <a href="#" className="start-btn">Start Now <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                    <div className="share-course">Share this course <em><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></em>
                      <span>
                        <a href="#"><i aria-hidden="true" className="social_facebook" /></a>
                        <a href="#"><i aria-hidden="true" className="social_twitter" /></a>
                        <a href="#"><i aria-hidden="true" className="social_linkedin" /></a>
                      </span>
                    </div>
                  </div> 
                  <div className="widget react-categories-course">
                    <h3 className="widget-title">Course categories</h3>
                    <ul className="recent-category">
                      <li> <a href="#">Art &amp; Design (6)</a></li>
                      <li> <a href="#">Exercise (4)</a></li>
                      <li> <a href="#">Photography (8)</a></li>
                      <li> <a href="#">Environmental Sciences (3)</a></li>
                      <li> <a href="#">Software Training (5)</a></li>
                      <li> <a href="#">Software Development (2)</a></li>
                      <li> <a href="#">Music (10)</a></li>
                      <li> <a href="#">Material Design (2)</a></li>
                      <li> <a href="#">Technology (7)</a></li>
                    </ul>
                  </div>                                
                </div>
              </div>
            </div>
          </div>
        </div>                
        {/*================= Course Filter Section End Here =================*/}
     
    </>
  );
}
