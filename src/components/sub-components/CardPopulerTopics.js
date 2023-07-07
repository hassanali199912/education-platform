export default function CardPopulerTopics(props){



    return <>
        <div className="col-md-4">
              <div className="item__inner">                                    
                <div className="icon">
                  <img src={props.topic.img} alt={props.topic.title} />
                </div>
                <div className="react-content">
                  <h3 className="react-title">
                  <a href={props.topic.moveTo}>{props.topic.title}</a></h3>
                  <p>{props.topic.description}</p>
                  <a href={props.topic.moveTo}> Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
                </div>                                    
              </div>
            </div>
    </>
}