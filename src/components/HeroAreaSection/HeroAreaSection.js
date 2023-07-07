import "./HeroAreaSection.css";


export default function HeroAreaSection() {
  return (
    <>
    

      {/*=================  Banner Section Start Here ================= */}
      <div className="hero3__area p-relative">
        <div className="hero3__shape">
          <img className="hero3__shape-1" src="assets/images/banner2/shape/01.png" alt="Banner shape image" />
          <img className="hero3__shape-2" src="assets/images/banner2/shape/02.png" alt="Banner shape image" />
          <img className="hero3__shape-3" src="assets/images/banner2/shape/03.png" alt="Banner shape image" />
        </div>
        <div className="container p-relative">                        
          <div className="hero3__content">
            <h1 className="hero3__title">Learn Course Online <br /> <em>New Today</em></h1>
            <img src="assets/images/banner2/line_01.png" alt="line" />
            <form className="search-form">
              <input type="text" className="form-input" placeholder="Search Course" />
              <button type="submit" className="form-button">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg>
              </button>
            </form>
            <p className="hero3__paragraph">Have questions? <a href="#">Get Free Sample <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg></a></p>
          </div>
          <div className="about__content">
            <ul>
              <li>
                <div className="icon">
                  <img src="assets/images/banner2/bg.png" alt="image" />
                </div>
                <div className="text">
                  <h4>9.4k+</h4>
                  <p>Total active students taking <br /> gifted courses.</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src="assets/images/banner2/bg11.png" alt="image" />
                </div>
                <div className="text">
                  <h4>70+</h4>
                  <p>Available field programs <br /> gifted courses.</p>
                </div>
              </li>
            </ul>  
          </div>                    
          <div className="hero3__image">
            <img className="hero3__image-1" src="assets/images/banner2/normal-image/01.png" alt="image" />
            <img className="hero3__image-2" src="assets/images/banner2/normal-image/02.png" alt="image" />
          </div>
        </div>
      </div>
      {/*=================  Banner Section End Here ================= */}

    </>
  );
}
