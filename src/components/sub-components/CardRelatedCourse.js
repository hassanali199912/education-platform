export default function CardRelatedCourse(props){
    
    return <>
         <div className="single-studies col-lg-6 grid-item">
                    <div className="inner-course">
                      <div className="case-img">
                        <a href="#" className="cate-w">{props.ralatedCourseData.categoty}</a>
                        <img src={props.ralatedCourseData.img} alt={props.ralatedCourseData.title} />
                      </div>
                      <div className="case-content">
                        <ul className="meta-course">
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> {props.ralatedCourseData.rate} review </li>
                          <li><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg> {props.ralatedCourseData.number_of_student} Students </li>
                        </ul>
                        <h4 className="case-title">
                         <a href={props.ralatedCourseData.moveTo}>{props.ralatedCourseData.title}</a>
                         </h4>
                        {/* <div className="react__user">
                          <img src="assets/images/course/small-image/1.png" alt="user" /> Justin Case
                        </div> */}
                        <ul className="react-ratings">
                          <li className="react-book"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg> {props.ralatedCourseData.number_of_lessons} Lessones</li>
                          <li className="price">${props.ralatedCourseData.price}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
    </>
}