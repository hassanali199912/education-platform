import './Footer.css';


export default function Footer2(props){

    return <>
            {/*================= Footer Section Start Here =================*/}
      <footer id="react-footer" className="react-footer react-footer-two">
        <div className="footer-top">
          <div className="container">
          {props.children}
            <div className="row">
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-1">
                  <div className="footer-logo white">
                    <a href="index.html" className="logo-text"> <img src="assets/images/footer-logo2.png" alt="logo" /></a>
                  </div>
                  <h5 className="footer-subtitle">There are course and event custom <br />
                    post types so you can easily create and<br /> manage course, events.</h5>
                  <ul className="footer-address">
                    <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg><a href="tel:+(402)76244183"> +(402) 762 441 83 </a></li>
                    <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg><a href="mailto:info@yourdmain.com"> info@echooling.com </a></li>
                  </ul>                               
                </div>
              </div>
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-2">
                  <h3 className="footer-title">About Us</h3>
                  <div className="footer-menu">
                    <ul>
                      <li><a href="about.html">About</a></li>
                      <li><a href="coureses-grid.html">Courses</a></li>
                      <li><a href="#">Events</a></li>
                      <li><a href="#">Career</a></li>
                      <li><a href="profile.html">Become a Teacher</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 md-mb-30">
                <div className="footer-widget footer-widget-3">
                  <h3 className="footer-title">Useful Links</h3>
                  <div className="footer-menu">
                    <ul>
                      <li><a href="#">Browse Library</a></li>
                      <li><a href="#">Library</a></li>
                      <li><a href="#">Partners</a></li>
                      <li><a href="blog.html">News &amp; Blog</a></li>
                      <li><a href="#">FAQ</a></li>
                      <li><a href="#">Tutorials</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget footer-widget-4">
                  <h3 className="footer-title">Newsletter</h3> 
                  <div className="footer3__form">
                    <p>Get the latest Echooling news <br />delivered to you inbox</p>
                    <form action="#">
                      <input type="email" placeholder="Enter your email" />
                      <button className="footer3__form-1">
                        <i className="arrow_right" />
                      </button>
                    </form>
                  </div>                                                           
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">  
          <div className="container">                  
            <div className="react-copy-left">© 2022 <a href="#">Echooling.</a> All Rights Reserved</div>
            <div className="react-copy-right">
              <ul className="social-links">
                <li className="follow">Follow us</li>
                <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/*================= Footer Section End Here =================*/}
    </>
}