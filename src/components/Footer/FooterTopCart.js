import "./Footer.css";

export default function FooterTopCart() {
  return (
    <>
      <div className="footer-top-cta">
        <div className="row">
          <div className="col-lg-7">
            <h4>Free Online Course</h4>
            <h3>
              Ready to dive in? <br /> Start your free Course today.
            </h3>
          </div>
          <div className="col-lg-5 text-right">
            <a href="#">
              Go To FAQ{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
