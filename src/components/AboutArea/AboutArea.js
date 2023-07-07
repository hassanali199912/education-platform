import Btn from "../sub-components/Btn";
import "./AboutArea.css";

export default function AboutArea() {
  return (
    <>
      {/*=================  About Section Start Here ================= */}
      <div className="about__area about__area_one p-relative pt---10 pb---120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__image">
                <img src="assets/images/about/ab.png" alt="About" />
                <img
                  className="react__shape__ab"
                  src="assets/images/about/badge.png"
                  alt="Shape Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__content">
                <h2 className="about__title">
                  Welcome to <br /> <em>Echooling LMS Platform</em>
                </h2>
                <p className="about__paragraph">
                  Education is both the act of teaching knowledge to others and
                  <br /> the act of receiving knowledge from someone else.
                </p>
                <p className="about__paragraph2">
                  {" "}
                  Have questions? <a href="#"> Get Free Guide </a>
                </p>
                <p>
                  Education also refers to the knowledge received through
                  schooling instruction <br />
                  and to the institution of teaching as a whole. The main
                  purpose of education <br />
                  is the integral development of a person.
                </p>
                <ul>
                  <li>
                    {/* <a href="about.html" className="more-about">
                      {" "}
                      Read More{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-arrow-right"
                      >
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a> */}
                    <Btn moveTo="about.html" title ="Read More" />

                  </li>
                  <li className="last-li">
                    <em>Get Support</em>
                    <a href="mailto:support@react.com">support@react.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= About Section End Here ================= */}
    </>
  );
}
