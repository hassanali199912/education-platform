export default function CountAndNumbers(props){

    const p1=props.p1.split(' ');
    return(<>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="count__content">
                    <p className="count__content--paragraph">{p1[0]}<br/> {p1[1]}   
                    {/* Successfully <br />Trained */}
                    </p>
                    <h3 className="count__content--title-1 counter">{props.num}</h3>
                    <p className="count__content--paragraph2">{props.p2}</p>                                            
                  </div>
                </div>
    </>)
}