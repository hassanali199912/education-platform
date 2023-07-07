export default function CardTopics(props){
console.log(props);
    return (
        <div className="col-md-3">
             <div className="item__inner">                                    
               <div className="icon">
                 <img src={props.data.img} alt={props.data.title} />
               </div>
               <div className="react-content">
                 <h3 className="react-title"><a href={props.data.moveTo}>{props.data.title}</a></h3>
                 <a href="#" className="r__link">Learn More <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a>
               </div>                                    
             </div>
           </div>
    );
}