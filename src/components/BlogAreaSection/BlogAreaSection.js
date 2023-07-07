import CardNews from "../sub-components/CardNews";
import "./BlogAreaSection.css";
import {blogs} from '../../data/blogs';

export default function BlogAreaSection() {



  return (
    <>
     
     

      {/*================= Blog Section Start Here =================*/}
      <div className="react-blog__area blog__area pt---120 pb---120 graybg-home">
        <div className="container blog__width">
          <div className="react__title__section text-center">
            <h2 className="react__tittle"> Echooling News and Blogs </h2>
            <img src="assets/images/line.png" alt="image" />
          </div>
          <div className="row">

          {blogs.map((news)=> <CardNews key={news.id} newsData={news} /> )}
            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href="blog-details.html">
                    <img src="assets/images/blog/1.png" alt="This the first card image" />
                  </a>
                  <em className="b_date">April 12</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">Campaigns</span>
                    <h3 className="blog__card--title"><a href="blog-details.html">Fostering future
                        Schools <br /> &amp; social Innovation</a></h3>
                  </div>
                  <div className="blog__card--icon ">
                    <div className="blog__card--icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>Nerte Gronw</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href="blog-details.html">
                    <img src="assets/images/blog/2.png" alt="This the first card image" />
                  </a>
                  <em className="b_date">April 18</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">Education</span>
                    <h3 className="blog__card--title"><a href="blog-details.html">The Surprising Reason
                        <br /> CollegeTuition</a></h3>
                  </div>
                  <div className="blog__card--icon d-flex align-items-center">
                    <div className="blog__card--icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>Charlie Doyle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href="blog-details.html">
                    <img src="assets/images/blog/3.png" alt="This the first card image" />
                  </a>
                  <em className="b_date">June 16</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">Students</span>
                    <h3 className="blog__card--title"><a href="blog-details.html">Those other <br />
                        College Expenses about</a></h3>
                  </div>
                  <div className="blog__card--icon d-flex align-items-center">
                    <div className="blog__card--icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>Owen Christ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="blog__card mb-50">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href="blog-details.html">
                    <img src="assets/images/blog/3.png" alt="This the first card image" />
                  </a>
                  <em className="b_date">May 22</em>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">Strategy</span>
                    <h3 className="blog__card--title"><a href="blog-details.html">Those other <br />
                        College Expenses about</a></h3>
                  </div>
                  <div className="blog__card--icon d-flex align-items-center">
                    <div className="blog__card--icon-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span>Owen Christ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
      {/*================= Blog Section End Here =================*/}




    </>
  );
}
