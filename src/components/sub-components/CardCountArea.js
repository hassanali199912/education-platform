export default function CardCountArea(props){


    return <>
         <li className="col-lg-4">
                    <div className="count__content">
                      <div className="icon">
                        <img src={props.countData.img} alt={props.countData.title} />
                      </div>
                      <div className="text">
                        <span className="count__content-title counter">
                        {props.countData.number}
                        </span>
                        <em>k</em>
                        <p>{props.countData.title}</p> 
                      </div>                                           
                    </div>
                  </li>
    </>
}