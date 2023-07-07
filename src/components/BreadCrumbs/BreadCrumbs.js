import "./BreadCrumbs.css";

export default function BreadCrumbs(props) {
  return (
    <>
      {/* <!--================= Breadcrumbs Section Start Here =================--> */}

      <div className="react-breadcrumbs">
        <div className="breadcrumbs-wrap">
          <img
            className="desktop"
            src="assets/images/breadcrumbs/1.png"
            alt="Breadcrumbs"
          />
          <img
            className="mobile"
            src="assets/images/breadcrumbs/1.png"
            alt="Breadcrumbs"
          />
          <div className="breadcrumbs-inner">
            <div className="container">
              <div className="breadcrumbs-text">
                <h1 className="breadcrumbs-title">{props.title}</h1>
                <div className="back-nav">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>{props.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <!--================= Breadcrumbs Section End Here =================--> */}


    </>
  );
}
