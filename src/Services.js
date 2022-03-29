import React from "react";
import CustomerCard from "./components/CustomerCard";
import Header from "./components/Header";
import Heros1 from "./components/Heros1";
import Dot from "./components/Dot";
import {useState } from "react";
import Benefits from "./components/Benefits";
import CloudServiceCard from "./components/CloudServiceCard";
import Button from "./components/Button";
import Footer from "./components/Footer";


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
    const CloudExperties={
         "title":"Our Cloud Expertise ",
         "image":"/Images/Cloud-expertise.png",
         "content":" Cloud infrastructure can be simple, yet challenging. From product development to launches to mergers, there is a broad spectrum of use cases wherein cloud services can be very useful.  We offer flexible, robust, agile, and scalable cloud solutions. Since every use case needs a different execution strategy, we help you put the best foot forward to enable the right cloud solutions for your business. We’ve helped businesses adapt to the cloud effectively on platforms such as AWS, Azure, and Google Cloud.  We also offer fully automated DevOps services by bringing business, development, and operation teams together."
    }
    /* cards data  start */
     const AWS={
          "title":"Amazon Web Services",
          "image":"/Images/icons/Aws-logo.png"
        };
      const AWS_services=[
                     "AWS Strategy & Consulting",
                     "Managed AWS Operations",
                     "Automation & Optimization",
                      "Enterprise Data Platform"
                     ];
      const bgColor1={
         background:'rgba(255, 190, 157, 1)',
        };
      const bgColor2={
         background:'white',
      };
   //###### Google Cloud ##### //
   const Google={
      "title":"Microsoft Azure",
      "image":"/Images/icons/Microsoft-azure.png "
   };
   const Google_services=[
       "GCP Strategy & Consulting",
      "Managed GCP Operations",
      "Enterprise Data Platform",
      "Migration to Google Cloud Platform"
      ];
   // ##### Microsoft Cloud #####/
   const Microsoft={
       "title":"Google Cloud",
       "image":"/Images/icons/Google-cloud.png"
   }
   const Microsoft_services=[
      "Azure Installation & Configuration",
      "Migration to MS Azure",
      "Azure Customization & Branding",
      "CustomAzure Development"];
    /* cards data end */
   const buttonColor = {
      background: 'rgba(3, 44, 87, 1)',
      borderRadius: "2"
    }
  
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
          <div className="title font-[Poppins] text-center md:p-10" >
              <h1 className="font-bold text-2xl">Why Use the Cloud?</h1>
              <p>Cloud computing provides improved agility, increased performance, and faster time to market <br/>for software development.</p>
          </div>
          <div className="Banefits container ml-auto mr-auto">
              <h2 className="text-2xl font-bold font-[Poppins] md:p-10">Benefits</h2>
             <div className="Banefits-list mt-10">
              <div className="Scalable  ">
                 <Benefits Data={Banefit1} style={{background:'white',color:'rgba(255, 181, 115, 1)',}}/>
             </div>
              <div className="Scalable">
                 <Benefits Data={Banefit2}  style={{background:'white',color:'rgba(255, 114, 94, 1)',}} />
              </div>
              <div className="Scalable">
                 <Benefits Data={Banefit3} style={{background:'white',color:'rgba(64, 123, 255, 1)',}}/>
              </div>
              <div className="Scalable">
                 <Benefits Data={Banefit4} style={{background:'white',color:'rgba(75, 154, 236, 1)',}}/>
              </div>
            </div>
          </div>
      </section>
      <section className="Cloud-Expertise">
         <div className="ml-auto mr-auto md:p-10 p-5 border-dotted border-t-4 border-b-4 border-gray-200 " style={{background:'rgba(248, 251, 255, 1)'}}>
           <Heros1 Data={CloudExperties}/>
         </div>
      </section>
      <section className="Cloud-technology p-5 md:p-20 ">
         <div className="title text-center font-[Poppins]">
            <h1 className="text-xl font-bold ">Cloud Technologies We Offer</h1>
            <p >Our cloud services are flexible, scalable, and cost-efficient.</p>
         </div>
         <div className="cards md:flex justify-center">
            
              <CloudServiceCard Data={AWS} Services={AWS_services} ParentBg={bgColor1} ChildBg={bgColor2} style={{color:'white'}}/>
              <CloudServiceCard Data={Microsoft} Services={Google_services} ParentBg={bgColor2} ChildBg={bgColor1} style={{color:'#FF725E'}}/>
              <CloudServiceCard Data={Google} Services={Microsoft_services} ParentBg={bgColor2} ChildBg={bgColor1} style={{color:'#FF725E'}}/>
        
         </div>
      </section>
      <section className="about-expert border-t-4 border-dotted border-gray-200 " style={{ background: 'rgba(248, 251, 255, 1)' }}>
        <div className="md:grid md:grid-cols-2 container md:p-20 p-5 ml-auto mr-auto" >
          <div className="image  ">
            <img src="/Images/expert.png" alt="expert" className="" />
          </div>
          <div className=" md:mt-auto md:mb-auto ">
            <div className="content">
              <h1 className="font-[Poppins] font-bold text-lg">Ready to start a Project?</h1>
            </div>
            <div className="button mt-3 mr-auto ml-auto ">
              <Button text="Let's get in touch" style={buttonColor} />
            </div>
          </div>
        </div>
      </section>
      <section className="Footer">
         <Footer/>
      </section>
    </div>
);
}export default Services;