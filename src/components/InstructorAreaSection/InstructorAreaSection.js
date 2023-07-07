import { classInstructors } from "../../data/instructors";
import CardInstructor from "../sub-components/CardInstructor";
import "./InstructorAreaSection.css";

export default function InstructorAreaSection() {


  return (
    <>
     

   {/*================= Instructor Section Start Here =================*/}
   <div className="instructor__area pt---0 pb---110 text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-6">
              <div className="instructor__content instructor__content-one">
                <div className="instructors_lefts">
                  <h6>Course Instructors</h6>
                  <h2>Meet our <br /> Class Instructors</h2>
                </div>
              </div>
            </div>

              {classInstructors.map((item)=> <CardInstructor key={item.id} instructor={item} /> )}
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/03.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Jason Response</a>
                  </h4>
                  <p>Education Assistant</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/04.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Jonquil Von</a>
                  </h4>
                  <p>Teaching Assistant</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/05.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Piff Jenkins</a>
                  </h4>
                  <p>Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/06.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Brian Cumin</a>
                  </h4>
                  <p>Lead Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/07.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Hanson Deck</a>
                  </h4>
                  <p>Teacher</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src="assets/images/instructor/08.jpg" alt="course instructor picture" />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href="profile.html">Alan Fresco</a>
                  </h4>
                  <p>Teacher</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*================= Instructor Section End Here =================*/}


    </>
  );
}
