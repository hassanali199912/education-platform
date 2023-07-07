

export default function CourseCard(props){


    return (   
    <div className="col-lg-3 mt-3">
    <div className="course__item mb-30">
      <div className="course__thumb">
        <a href={props.course.moveTo}><img src="assets/images/course/1.png" alt="image" /></a>
      </div>
      <div className="course__inner">
        <ul>
          <li>{props.course.categoty}</li>
          <li>{props.course.number_of_lessons} Lessons</li>
        </ul>
        <h3 className="react-course-title"><a href={props.course.moveTo}>{props.course.title}</a></h3>
        <div className="course__card-icon d-flex align-items-center">
          <div className="course__card-icon--1">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            <span>{props.course.number_of_student} Students</span>
          </div>                                            
          <div className="react__user">
            ${props.course.price}
          </div>
        </div>
      </div>                                    
    </div>
  </div>);
}