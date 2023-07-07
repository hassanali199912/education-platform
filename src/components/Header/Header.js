import { useRef, useState } from "react";
import "./Header.css";

export default function Header() {
  // const homeMenu = useRef(null);
  //const [diplayStyle,setDispleytyle] = useState({display : 'none'})
  const windoSixe = { width: window.innerWidth, height: window.innerHeight };
  console.log(windoSixe);
  window.addEventListener("resize", () => {
    if (Window.width === 990) {
        console.log("yooooooooooo");
      }
  });


  const hendleMenuEnter = (e) => {
    //e.target.parentNode.classList.toggle('menu-active');
    // if (e.target.parentNode.classList.contains("menu-active")) {
    //   e.target.parentNode.classList.remove("menu-active");
    // } else {
    //   e.target.parentNode.classList.add("menu-active");
    // }
  };

  return (
    <>
      {/* <!--================= Header Section Start Here =================--> */}
      
      <header id="react-header" className="react-header">
        <div className="topbar-area style1">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="topbar-contact">
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-phone"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:(+1)3344999999"> (+1) 3344 999 999</a>
                    </li>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-mail"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a href="mailto:info@reactheme.com">info@reactheme.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 text-left">
                <div className="toolbar-sl-share">
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="social_facebook"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="social_twitter"
                        ></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span
                          aria-hidden="true"
                          className="social_linkedin"
                        ></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-part">
          <div className="container">
            {/* <!--================= Menu Start Here =================--> */}
            <div className="react-main-menu">
              <nav>
                {/* <!--================= Menu Toggle btn =================--> */}
                <div className="menu-toggle">
                  <div className="logo">
                    <a href="index.html" className="logo-text">
                      {" "}
                      <img src="assets/images/logo.png" alt="logo" />{" "}
                    </a>
                  </div>
                  <button type="button" id="menu-btn">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                {/* <!--================= Menu Structure =================-->  */}
                <div className="react-inner-menus">
                  <ul
                    id="backmenu"
                    className="react-menus home react-sub-shadow"
                  >
                    <li
                      className="has-sub"
                      onMouseEnter={hendleMenuEnter}
                      onMouseLeave={hendleMenuEnter}
                    >
                      <span className="arrow "></span>
                      <a href="#" className="hash">
                        Home
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Home One</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-two.html">Home Two</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-three.html">Home Three</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-four.html">Home Four</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-five.html">Home Five</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-six.html">Home Six</a>
                        </li>
                        <li>
                          {" "}
                          <a href="index-seven.html">Home Seven</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-sub"
                      onMouseEnter={hendleMenuEnter}
                      onMouseLeave={hendleMenuEnter}
                    >
                      <span className="arrow "></span>{" "}
                      <a href="#" className="hash">
                        Pages
                      </a>
                      <ul className="sub-menu">
                        <li>
                          {" "}
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          {" "}
                          <a href="instructors.html">Instructor</a>
                        </li>
                        <li>
                          {" "}
                          <a href="profile.html">Profile</a>
                        </li>
                        <li>
                          {" "}
                          <a href="events.html">Events</a>
                          <ul>
                            <li>
                              <a href="events.html">Events</a>
                            </li>
                            <li>
                              <a href="events-right-sidebar.html">
                                Events Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="events-single.html">Events Single</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a href="login.html">Login</a>
                        </li>
                        <li>
                          {" "}
                          <a href="signup.html">Sign Up</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-sub"
                      onMouseEnter={hendleMenuEnter}
                      onMouseLeave={hendleMenuEnter}
                    >
                      <span className="arrow "></span>
                      <a href="coureses-grid.html" className="hash">
                        Courses
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="coureses-grid.html">Courses</a>
                        </li>
                        <li>
                          <a href="coureses-right-sidebar.html">
                            Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="coureses-list.html">Courses List</a>
                        </li>
                        <li>
                          <a href="coureses-single.html">Courses Single</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-sub"
                      onMouseEnter={hendleMenuEnter}
                      onMouseLeave={hendleMenuEnter}
                    >
                      <span className="arrow "></span>
                      <a href="blog.html" className="hash">
                        {" "}
                        Blog
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Single</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  <div className="searchbar-part">
                    <div className="react-login">
                      <a href="login.html">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        Log In
                      </a>
                    </div>
                    <form className="search-form">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Search Course"
                      />
                      <button type="submit" className="form-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-search"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
            {/* <!--=================  Menu End Here  =================--> */}
          </div>
        </div>
      </header>
      {/* <!--================= Header Section End Here =================--> */}
    </>
  );
}
