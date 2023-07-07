import './Header.css';


export default function Header(){

    return <>
       {/* <!--================= Header Section Start Here =================--> */}
       <header id="react-header" className="react-header react-header-three">
        <div className="menu-part">
          <div className="container">
            {/*================= Menu Start Here =================*/}
            <div className="react-main-menu">
              <nav>
                {/*================= Menu Toggle btn =================*/}
                <div className="menu-toggle">
                  <div className="logo"><a href="index.html" className="logo-text"> <img src="assets/images/logo2.png" alt="logo" /> </a></div>
                  <button type="button" id="menu-btn">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                {/*================= Menu Structure =================*/} 
                <div className="react-inner-menus">
                  <div className="cate-part">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                    <ul className="react-category-menu">
                      <li><a href="#">Categories <i className="arrow_carrot-down" /></a> 
                        <ul>
                          <li><a href="#">English Book</a></li>
                          <li><a href="#">Math Book</a></li>
                          <li><a href="#">Story Book</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <ul id="backmenu" className="react-menus react-sub-shadow">
                    <li> <a href="#">Home</a>
                      <ul>
                        <li> <a href="index.html">Home One</a></li>
                        <li> <a href="index-two.html">Home Two</a></li>
                        <li> <a href="index-three.html">Home Three</a></li>
                        <li> <a href="index-four.html">Home Four</a></li>
                        <li> <a href="index-five.html">Home Five</a></li>
                        <li> <a href="index-six.html">Home Six</a></li>
                        <li> <a href="index-seven.html">Home Seven</a></li>
                      </ul>
                    </li>
                    <li> <a href="#">Pages</a>
                      <ul>
                        <li> <a href="about.html">About</a></li> 
                        <li> <a href="instructors.html">Instructor</a></li> 
                        <li> <a href="profile.html">Profile</a></li> 
                        <li> <a href="events.html">Events</a>
                          <ul>
                            <li><a href="events.html">Events</a></li>
                            <li><a href="events-right-sidebar.html">Events Sidebar</a></li>
                            <li><a href="events-single.html">Events Single</a></li>
                          </ul>
                        </li> 
                        <li> <a href="login.html">Login</a></li> 
                        <li> <a href="signup.html">Sign Up</a></li> 
                      </ul>
                    </li>                                                                   
                    <li> <a href="coureses-grid.html">Courses</a>
                      <ul>
                        <li><a href="coureses-grid.html">Courses</a></li>                                                
                        <li><a href="coureses-right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="coureses-list.html">Courses List</a></li>
                        <li><a href="coureses-single.html">Courses Single</a></li>                                    
                      </ul>
                    </li>
                    <li> <a href="blog.html">Blog</a>
                      <ul>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Blog Single</a></li>
                      </ul>
                    </li>
                    <li> <a href="contact.html">Contact</a></li>
                  </ul>                                
                  <div className="searchbar-part">                                                                      
                    <form className="search-form">
                      <input type="text" className="form-input" placeholder="Search Course" />
                      <button type="submit" className="form-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            {/*=================  Back Menu End Here  =================*/}
          </div>
        </div>
      </header>
      {/* <!--================= Header Section End Here =================--> */}

    </>
}