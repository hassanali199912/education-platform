import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Header2 from "../../components/Header/Header2";
import Wapper from "../../components/Wapper/Wapper";
import BackScrollUp from "../../components/BackScrollUp/BackScrollUp";
import "./Home.css";
import SliderSection from "../../components/SliderSection/SliderSection";
import PopularTopics from "../../components/PopularTopics/PopularTopics";
import AboutArea from "../../components/AboutArea/AboutArea";
import CampusSection from "../../components/CampusSection/CampusSection";
import PopularCourseSection from "../../components/PopularCourseSection/PopularCourseSection";
import CountAreaSection from "../../components/CountAreaSection/CountAreaSection";
import UpcomingEventSection from "../../components/UpcomingEventSection/UpcomingEventSection";
import BlogAreaSection from "../../components/BlogAreaSection/BlogAreaSection";
import HeroAreaSection from "../../components/HeroAreaSection/HeroAreaSection";
import Loader from "../../components/Loader/Loader";
import { useEffect, useState } from "react";

export default function Home() {

  const [isLoding, setIsLoding] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoding(true);
    },2000)
  },[])
  return (
    <>

      
      {!isLoding? <Loader/>:<>
      <Header2 />   
      <Wapper>
         <HeroAreaSection /> 
        <PopularTopics />
        <AboutArea />
        <CampusSection />
        <PopularCourseSection />
        <CountAreaSection />
        <UpcomingEventSection />
        <BlogAreaSection />
      </Wapper>
      <Footer />
      </>
      }


      {/* <Wapper>
         <HeroAreaSection /> 
        <PopularTopics />
        <AboutArea />
        <CampusSection />
        <PopularCourseSection />
        <CountAreaSection />
        <UpcomingEventSection />
        <BlogAreaSection />
      </Wapper>
      <Footer />
      <BackScrollUp /> */}

    </>
  );
}
