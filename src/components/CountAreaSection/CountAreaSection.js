import CountAndNumbers from "../sub-components/CountAndNumbers";
import "./CountAreaSection.css";

export default function CountAreaSection() {
  return (
    <>
     
     
      {/*================= Counter Section Start Here =================*/}
      <div className="count__area pb---110">
        <div className="container count__width">
          <div className="row">
            <div className="col-xxl-11 col-xl-11 col-lg-11 offset-lg-1">
              <div className="row">
              
              <CountAndNumbers p1="Successfully Trained" num='1478' p2="Enrolled Learners" />
              <CountAndNumbers p1="Available Courses" num='1731' p2="Countrywide Awards" />
              <CountAndNumbers p1="Scheduled Events" num='280' p2="Success Events" />
              <CountAndNumbers p1="Getting Featured on" num='1045' p2="Online Courses" />

                {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="count__content">
                    <p className="count__content--paragraph">Successfully <br />Trained</p>
                    <h3 className="count__content--title-1 counter">1478</h3>
                    <p className="count__content--paragraph2">Enrolled Learners</p>                                            
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="count__content">
                    <p className="count__content--paragraph">Available <br />Courses</p>
                    <h3 className="count__content--title-1 counter">1731</h3>
                    <p className="count__content--paragraph2">Countrywide Awards</p>                                            
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="count__content">
                    <p className="count__content--paragraph">Scheduled <br />Events</p>
                    <h3 className="count__content--title-1 counter">280</h3>
                    <p className="count__content--paragraph2">Success Events</p>                                            
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="count__content">
                    <p className="count__content--paragraph">Getting <br />Featured on</p>
                    <h3 className="count__content--title-1 counter">1045</h3>
                    <p className="count__content--paragraph2">Online Courses</p>                                            
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*================= Counter Section End Here =================*/}

    </>
  );
}
