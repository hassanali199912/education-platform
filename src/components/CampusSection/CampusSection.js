import Btn from "../sub-components/Btn";
import "./CampusSection.css";

export default function CampusSection() {
  return (
    <>
     
      {/*=================  Campus Section Start Here ================= */}
      <div className="campus_sec pt---100 pb---110">
        <div className="container">
          <div className="react__title__section text-center">
            <h2 className="react__tittle">Campus Life</h2>
            <img src="assets/images/line.png" alt="image" />
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="about__content">
                <ul>
                  <li>
                    <div className="icon">
                      <img src="assets/images/campus/1.svg" alt="image" />
                    </div>
                    <div className="text">
                      <h4>Do More, Stress Less</h4>
                      <p>Why I say old chap that is spiffing he legged <br />it in my flat easy
                        peasy.</p>
                    </div>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg></a>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/campus/2.svg" alt="image" />
                    </div>
                    <div className="text">
                      <h4>The Business Intelligence</h4>
                      <p>Why I say old chap that is spiffing he legged <br />it in my flat easy
                        peasy.</p>
                    </div>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg></a>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/campus/3.svg" alt="image" />
                    </div>
                    <div className="text">
                      <h4>System Administration</h4>
                      <p>Why I say old chap that is spiffing he legged <br />it in my flat easy
                        peasy.</p>
                    </div>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about__image">
                <img src="assets/images/campus/4.png" alt="image" />
                <img className="shape-1" src="assets/images/campus/shape.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="text-center">
          <Btn moveTo="#" title =" More about Campus Life" />

            {/* <a href="#" className="more-about"> More about Campus Life 
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg></a> */}
          </div>
        </div>
      </div>
      {/*================= Campus Section End Here ================= */}
    

    </>
  );
}
