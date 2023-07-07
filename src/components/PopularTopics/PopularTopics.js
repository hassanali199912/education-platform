import CardTopics from "../sub-components/CardTopics";
import "./PopularTopics.css";


export default function PopularTopics() {


const numTopics = [
  { 
    id:1,
    title : 'Let’s Talk Science',
    img : "assets/images/service/1.png",
    moveTo : "coureses-grid.html"
  },
  { 
    id:2,
    title : 'Innovative Courses',
    img : "assets/images/service/2.png",
    moveTo : "coureses-grid.html"
  },
  { 
    id:3,
    title : 'Cloud Storage',
    img : "assets/images/service/3.png",
    moveTo : "coureses-grid.html"
  },
  { 
    id:4,
    title : 'Online Education',
    img : "assets/images/service/4.png",
    moveTo : "coureses-grid.html"
  },
]

  return (
    <>
       {/*=================  Service Section Start Here ================= */}
       <div className="react_popular_topics pt---100 pb---70">
        <div className="container"> 
          <div className="react__title__section text-left">
            <h2 className="react__tittle">Academics</h2>
            <img src="assets/images/line.png" alt="image" />
          </div>                       
          <div className="row">

          {numTopics.map((item) => (<CardTopics key={item.id} data={item} />))}
         
            {/* <div className="col-md-3">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/service/1.png" alt="image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title">
                  <a href="coureses-grid.html">Let’s Talk Science</a></h3>
                  <a href="#" className="r__link">Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
            <div className="col-md-3">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/service/2.png" alt="image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Innovative Courses</a></h3>
                  <a href="#" className="r__link">Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
            <div className="col-md-3">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/service/3.png" alt="image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Cloud Storage</a></h3>
                  <a href="#" className="r__link">Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
            <div className="col-md-3">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src="assets/images/service/4.png" alt="image" />
                </div>
                <div className="react-content">
                  <h3 className="react-title"><a href="coureses-grid.html">Online Education</a></h3>
                  <a href="#" className="r__link">Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*=================  Service Section End Here ================= */}
    </>
  );
}
