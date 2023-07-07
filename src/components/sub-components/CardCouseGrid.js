export default function CardCourseGrid(props){



    return <>
         <div className="single-studies col-lg-4 grid-item">
              <div className="inner-course">
                <div className="case-img">
                  <a href="#" className="cate-w">
                    <img src="assets/images/course/beg.png" alt="Beginner" />{" "}
                   {props.course.level}
                  </a>
                  <img
                    src={props.course.img}
                    alt={props.course.title}
                  />
                </div>
                <div className="case-content">
                  <h4 className="case-title">
                    {" "}
                    <a href={props.course.moveTo}>
                    {props.course.title}
                    </a>
                  </h4>
                  <ul className="meta-course">
                    <li>
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
                        className="feather feather-book"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>{" "}
                      {props.course.number_of_lessons} Lesson{" "}
                    </li>
                    <li>
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
                        className="feather feather-clock"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      {props.course.duration}
                    </li>
                    <li>
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
                        className="feather feather-user"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>{" "}
                      {props.course.instractor}{" "}
                    </li>
                  </ul>
                  <ul className="react-ratings">
                    <li className="react-book">
                      {" "}
                      <em>{props.course.rate}</em>
                      <span className="icon_star" />
                      <span className="icon_star" />
                      <span className="icon_star" /> ({props.course.number_of_reviewer})
                    </li>
                    <li className="price">${props.course.price}</li>
                  </ul>
                </div>
              </div>
            </div>
    </>
}