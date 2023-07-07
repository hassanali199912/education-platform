export default function CardUpcomingEvent(props) {

  return (
    <>
      <div
        className="item owl-item "
        style={{ width: "305.25px", 
        // marginRight: "25px" 
        }}
      >
        <div className="event__card">
          <div className="event__card--content">
            <div className="event__card--content-area">
              <div className="event__card--date">
                <em>{props.eventData.event_date.day_number}</em> {props.eventData.event_date.day_text}
                , {props.eventData.event_date.year}
              </div>
              <div className="event_time">{props.eventData.from_to}</div>
              <h3 className="event__card--title">
                <a href="#">{props.eventData.title}</a>
              </h3>
              <div className="event_location">
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
                  className="feather feather-map-pin"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>{" "}
                {props.eventData.location}
              </div>
              <a className="event__card--link" href={props.eventData.moveTo}>
                {" "}
                Find Out More{" "}
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
      </div>
    </>
  );
}
