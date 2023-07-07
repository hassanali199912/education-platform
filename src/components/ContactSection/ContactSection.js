import "./ContactSection.css";

export default function ContactSection() {
  return (
    <>
      {/*=================  Contact Section Start Here ================= */}
      <div id="react-contact" className="react-contact-page pt---100">
        <div className="container">
          <div className="row pb---96">
            <div className="col-lg-4 pt---10">
              <ul className="address-sec">
                <li>
                  <em className="icon"><img src="assets/images/contact/2.png" alt="image" /></em>
                  <span className="text"><em>Address</em> 1800 Abbot Kinney Blvd. Unit D<br /> &amp; E Venice</span>
                </li>
                <li>
                  <em className="icon"><img src="assets/images/contact/3.png" alt="image" /></em>
                  <span className="text"><em>Contact</em> <a href="#">Mobile: (+88) - 1990 - 6886</a> <a href="#">Mail: contact@echooling.com</a></span>
                </li>
                <li>
                  <em className="icon"><img src="assets/images/contact/4.png" alt="image" /></em>
                  <span className="text"><em>Hour of operation</em> Monday - Friday: 09:00 - 20:00 <br />Sunday &amp; Junday: 10:30 - 22:00</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              {/*================= Form Section Start Here =================*/}
              <div className="react-blog-form"> 
                <h2 className="contact-title">Questions? <br /> Feel free to contact uo.</h2>
                <div id="blog-form" className="blog-form">
                  <div id="form-messages" />
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
                      <div className="col-lg-6">
                        <div className="back-input">
                          <input id="subject" type="text" name="subject" placeholder="Subject" />                          
                        </div>
                      </div>
                      <div className="col-lg-6 pdl-5">
                        <div className="back-input">
                          <input id="phone" type="text" name="phone" placeholder="Phone" />                   
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="back-textarea">
                          <textarea id="message" name="message" placeholder="Message" defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">                                                
                        <button type="submit" className="back-btn">Send Message <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></button>
                      </div>
                    </div>                                                    
                  </form>
                </div>               
              </div>
              {/*================= Form Section End Here =================*/}
            </div>
          </div>
          <div className="row pb---110">
            <div className="col-lg-12">
              {/*=================  Map Section Start Here =================*/}
              {/* <div className="react-contacts pt-106">                 
                <div className="react-image-maping">
                  <img src="assets/images/contact/1.jpg" alt="Map" />
                  <div className="react-ripple react-tooltip1"><div className="box"><span>New York</span></div></div>
                </div>
              </div>                  */}
              {/*================= Map Section End Here =================*/}
            </div>
          </div> 
        </div>
      </div>
      {/*================= Contact Section End Here ================= */}
    </>
  );
}
