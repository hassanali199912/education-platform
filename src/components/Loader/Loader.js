import './Loader.css';


export default function Loader(){

    return <>
       {/*  <!--================= Preloader Section End Here =================-->*/}
       <div id="react__preloader">
        <div id="react__circle_loader" />
        <div className="react__loader_logo">
          <img src="assets/images/preload.png" alt="Preload" /></div>
      </div>  
         {/*  <!--================= Preloader Section End Here =================--> */}
    </>
}