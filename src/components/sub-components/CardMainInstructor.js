export default function CardMainInstructor(props){

    return <>
         <div className="col-lg-3">
              <div className="instructor__content">
                <div className="instructor__image">
                  <img src={props.data.img} alt={props.data.name} />
                  <div className="content__hover">
                    <p>{props.data.description}</p>
                    <ul>     
                    {props.data.social.map((item)=>{
                        return <>
                        <li>
                        <a href={item.url}><span aria-hidden="true" className = {`social_${item.name}`}  /></a>
                        </li>
                        </>
                    })}                                       
                      {/* <li><a href="#"><span aria-hidden="true" className="social_facebook" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter" /></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_linkedin" /></a></li> */}
                    </ul>
                  </div>
                </div>                                    
                <div className="bottom-content"> 
                  <h4><a href="#">{props.data.name}</a></h4>
                  <p>{props.data.title}</p>
                </div>                                 
              </div>
            </div>
    </>
} 