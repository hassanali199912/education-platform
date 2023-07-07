import { populerTopics } from "../../data/topics";
import CardPopulerTopics from "../sub-components/CardPopulerTopics";
import "./PopularTopics.css";


export default function PopularTopics() {

  return (
    <>
             {/*=================  Popular Topics2 Section Start Here ================= */}
      <div className="react_populars_topics react_populars_topics2 react_populars_topics_about pb---80">
        <div className="react__title__section react__title__section-all">
          <div className="row">
            <div className="col-md-12 text-center">
              <h6>Echooling available courses</h6>
              <h2 className="react__tittle"> Online Coaching Lessons For <br />Remote Learning </h2>
            </div>                                
          </div>                            
        </div>
        <div className="container">      
          <div className="row pt---30">

        {populerTopics.map((item)=> <CardPopulerTopics key={item.id} topic={item} /> )}

            {/* <div className="col-md-4">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/topics/icon.png" alt="Icon image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Accredited Campus</a></h3>
                  <p>Nulla porttitor accumsan tincidunt. vamus <br />magna justo, lacinia eget consectetur sed, <br />convallis at tellus.</p>
                  <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
            <div className="col-md-4">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/topics/icon2.png" alt="Icon image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Best Quality Graduate</a></h3>
                  <p>Nulla porttitor accumsan tincidunt. vamus <br />magna justo, lacinia eget consectetur sed, <br />convallis at tellus.</p>
                  <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
            <div className="col-md-4">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/topics/icon3.png" alt="Icon image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Inspiring Student Life</a></h3>
                  <p>Nulla porttitor accumsan tincidunt. vamus <br />magna justo, lacinia eget consectetur sed, <br />convallis at tellus.</p>
                  <a href="#"> Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>                             */}
          </div>
        </div>
      </div>
      {/*=================  Popular Topics2 Section End Here ================= */}
    </>
  );
}
