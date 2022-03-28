import React from "react";
import CustomerCard from "./components/CustomerCard";
import Header from "./components/Header";
import Heros1 from "./components/Heros1";
import Dot from "./components/Dot";
import {useState } from "react";



function Services(){
    const Banner={
        "title":"Cloud Services",
        "content":"Custom Cloud Solutions for every business.",
        "image":"/Images/Cloud-hosting.png"
    };
    /* customer card content start */
    let count=0;
    const Testimonial=[{"image":"/Images/Testimonial.png","title":"-Elli","title1":"Designer","statement":" “ You have a entire team covering all verticals, but you are running low on resources. You do not have a recruitment team capable of making swift hiring. ”  "},
        {"image":"/Images/Testimonial.png","title":"-Anil Kumar","title1":"Developer","statement":"“ TopDoc has been technology partners with Stackmybiz for about 1+years now and as TopDoc is a unique platform that offers online educational courses specially designed for dentists. It's extremely important to have deadlines met, technology services delivered, and promises kept. Everything that StackMyBiz has delivered so far has been top-notch. ” "}
        ,{"image":"/Images/Testinomial1.png","title":"Ankit HDB","title1":"Tester","statement":"“ TopDoc has been technology partners with Stackmybiz for about 1+years now and as TopDoc is a unique platform that offers online educational courses specially designed for dentists. It's extremely important to have deadlines met, technology services delivered, and promises kept. Everything that StackMyBiz has delivered so far has been top-notch. ” "},
      ]
      /* for next and previous button */
      const[currentIndex,setIndex ]=useState(0);
      // code for next button
        const nextButton=()=>{
        count=(count+1)%Testimonial.length;
        setIndex(count);
        };
        // code for previous button
       const previousButton=()=>{
       const sliderLength=Testimonial.length;
       count=(sliderLength+currentIndex-1)%sliderLength;
       setIndex(count);
        };
        /* Dot class start */
        const Color={
         background:'rgba(255, 235, 225, 1)'
        }
    /* customer card content end */
   const Banefit1={
          "title":"Scalable Virtual Resources",
          "image":"/Images/Service-scalable.png",
          "content":"Within a cloud environment, developers have access to virtual servers that enhance the speed of software development, testing, and delivery, ultimately increasing productivity and launching features faster and easier than ever before. Cloud infrastructure is highly scalable, allowing the team to spin up resources and scale them down as needed. "
       };
   const Banefit2={
        "title":"Faster Time to Markets",
        "image":"/Images/Faster-time.png",
        "content":"Software development in the cloud also speeds up a time to market, as developers can release new, high-quality products quickly and efficiently. This makes it a lot easier to keep  up with competition and customer demands."
     };
     const Banefit3={
        "title":"Robust Security",
        "image":"/Images/Robust-security.png",
        "content":"Security is always top-of-mind when it comes to software product development. Maintaining data integrity is crucial during the testing and production stages. Cloud infrastructure provisions proper security measures and data recovery plans, and we ensure that your product and data is secure. "
     };
     const Banefit4={
        "title":"Lower Total Cost of Ownership (TCO)",
        "image":"/Images/Lower-cost.png",
        "content":"Use cloud services to save costs on expensive server equipment, desktops, and licences, as well as time-consuming setups and extensive maintenance. Bring down the total cost of ownership, while improving product performance and efficiency. Maintain, scale, and upgrade your IT infrastructure, even when migrating from traditional on-premises hardware to the cloud. No upfront hardware and software purchases. (CAPEX) Reduced spending on storage, networking, and security. Reductions in operational costs, maintenance, and upgrade expenses. Reduction in operation-oriented personnel."
     };


    return(
        <div className="Services">
         <section className="Header-section">
             <Header/>
         </section>
         <section className="Heros-section md:p-10 p-5">
             <Heros1 Data={Banner}/>
         </section>
         {/*Testimonial section start */}
         <section className="Testimonial-section md:p-20 p-5 border-dotted border-b-4  border-t-4 border-r-gray-50" style={{background: 'rgba(248, 251, 255, 1)'}}>
            <div className="contents text-center font-[Poppins] ">
               <h1 className="font-bold font-[Poppins] text-xl tracking-wider">Clients Testimonials</h1>
               <p className=" text-lg">You can scale up and down the team quickly as per <br/>your requirements.</p>
          </div>
            <div className="customerCard-section">
              <CustomerCard link={Testimonial[currentIndex].image} title={Testimonial[currentIndex].title} title1={Testimonial[currentIndex].title1} content={Testimonial[currentIndex].statement}/>   
              <div className="icons flex justify-center ">
                <div className="previous-button ">
                  <img src="/Images/icons/previous.png" alt="previous" width="10" onClick={previousButton}  className=" cursor-pointer"/>
              </div>
              <div className="dot icons ">
                  <Dot bgColor={Color}/>  
              </div>
              <div className="next-button">
                <img src="/Images/icons/next.png" width="10" alt="next" onClick={nextButton}  className="cursor-pointer transition-all ease-in  "/>
              </div>
           </div>
         </div>
        </section>
      {/*Testimonial section end */}
      {/*Why Cloud section start */}
      <section className="Why-Cloud-section md:p-20 p-5">
          <div className="title font-[Poppins] text-center" >
              <h1 className="font-bold text-2xl">Why Use the Cloud?</h1>
              <p>Cloud computing provides improved agility, increased performance, and faster time to market <br/>for software development.</p>
          </div>
          <div className="Banefits container ml-auto mr-auto ">
              <h2 className="text-xl font-bold font-[Poppins] mt-5">Benefits</h2>
              
              <div className="Scalable">
                 <Heros1 Data={Banefit1}/>
              </div>
              <div className="Scalable">
                 <Heros1 Data={Banefit2} />
              </div>
              <div className="Scalable">
                 <Heros1 Data={Banefit3} />
              </div>
              <div className="Scalable">
                 <Heros1 Data={Banefit4} />
              </div>
          </div>
      </section>

    </div>
 );
}export default Services;