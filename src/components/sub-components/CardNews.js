
export default function CardNews(props){

  

    return <>
         <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href={props.newsData.moveTo}>
                    <img src={props.newsData.img} alt={props.newsData.title} />
                  </a>
                  <em className="b_date">April 12</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">{props.newsData.categoty}</span>
                    <h3 className="blog__card--title">
                    <a href={props.newsData.moveTo}>
                    {props.newsData.title}
                        </a></h3>
                  </div>
                  <div className="blog__card--icon ">
                    <div className="blog__card--icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>{props.newsData.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
}