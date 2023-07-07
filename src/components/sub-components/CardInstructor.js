export default function CardInstructor(props){

      
return <>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="instructor__content">
                <div className="instructor__content-1">
                  <img src={props.instructor.img} alt={props.instructor.name} />
                </div>
                <div className="instructor__content-2">
                  <h4>
                    <a href={props.instructor.moveTo}>{props.instructor.name}</a>
                  </h4>
                  <p>{props.instructor.title}</p>
                </div>
              </div>
            </div>
    </>
} 