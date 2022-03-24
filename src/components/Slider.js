import { useState } from "react";

let count=0;
function Slider(){
    const images=[
        "/Images/slider1.jpg",
        "/Images/slider2.jpg",
        "/Images/slider3.jpg"
    ];
    const[currentIndex,setIndex ]=useState(0);

    // code for next button
     const nextButton=()=>{
     count=(count+1)%images.length;
     setIndex(count);
     };
     // code for previous button
    const previousButton=()=>{
    const imagesLength=images.length;
    count=(imagesLength+currentIndex-1)%imagesLength;
    setIndex(count);
     };

    // for getting state
    return(
        <div className="Slider w-full h-1/6">
          <div className="slider-image h-1/6">
            <img src={images[currentIndex]} alt="slide-show" className="w-full h-1/6 ease-linear duration-1000" />
          </div>
          <div className="buttons absolute top-1/2 transform translate-y-1/2  flex flex-row justify-between items-center h-fit w-full">
              <div className="left-arrow">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white cursor-pointer hover:border-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
                     stroke-width="2" onClick={previousButton}>
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
             </div>
             <div className="righ-arrow">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white cursor-pointer hover:border-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    stroke-width="2" onClick={nextButton}>
                     <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                   </svg>
             </div>
          </div>
        </div>
    );
}
export default Slider;