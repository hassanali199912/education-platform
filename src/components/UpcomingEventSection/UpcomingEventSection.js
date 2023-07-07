import CardUpcomingEvent from "../sub-components/CardUpcomingEvent";
import "./UpcomingEventSection.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {eventsData} from '../../data/events'

export default function UpcomingEventSection() {
  
  return (
    <>
      {/*================= Upcoming Event Section Start Here =================*/}
      <div className="react-upcoming__event blog__area">
        <div className="container">
          <div className="react__title__section text-center">
            <h2 className="react__tittle">Upcoming Events</h2>
            <img src="assets/images/line.png" alt="image" />
          </div>
        
            <OwlCarousel className="event-slider owl-carousel owl-refresh  owl-loaded  owl-rtl owl-drag" autoplay autoplayTimeout={3000} items={4} loop margin={10} nav >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                >
                  {eventsData.map((data) => (
                    <CardUpcomingEvent key={data.id} eventData={data} />
                  ))}
                </div>
              </div>
            </OwlCarousel>
        </div>
      </div>
      {/*================= Upcoming Event Section End Here =================*/}
    </>
  );
}
