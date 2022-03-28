
import './App.css';
import Card from './components/Card';
import Customer from './components/Customer';
import CustomerCard from './components/CustomerCard';
import Dot from './components/Dot';
import'./components/Header';
import Header from './components/Header';
import Heros from './components/Heros';
import Heros2 from './components/Heros2';
import {useState} from "react";
import FooterContact from './components/FooterContact';
import Footer from './components/Footer';

function Home(){
    let count=0;
    const style={
      background: 'rgba(255, 114, 94, 1)'
      }
     /*Heros1 start */
     const heros_image=["/Images/Heros1.png"];
     const title=["Converting Your Business", 
      "Ideas Into Our ",
      "Software Solutions"]
     /* Heros1 end */
      
    /* Heros2 start */
     const Heros2_content={"image":"/Images/Heros2.png",
                         "title":"Your One-Stop Solution for All Your Technology Needs", 
                         "content":"We offer flexible engagement models that enable you to opt for resources and management processes that work for you and your team. This allows you to bridge the gaps in your tech teams more quickly and assure project delivery within defined timelines. You can focus on providing great customer value and finding investors while we take care of building engaging, scalable products."
                        }
    /* Heros2 end */
   
    /*Engagement1 start */
     let Heros2_engagement={"title": "Our Engagement Models",
                "image":"/Images/Engagement1.png",
               "content":" We offer flexible engagement models that enable you to opt for resources and management processes that work for you and your team. This allows you to bridge the gaps in your tech teams more quickly and assure project delivery within defined timelines. You can focus on providing great customer value and finding investors while we take care of building engaging, scalable products."
       };
               /*Engagement2 End */

    
  /*Customer statement card start */
    
    const arrayList=[{"image":"/Images/Ellipse 190.png","title":"-TopDo","statement":" “ TopDoc has been technology partners with Stackmybiz for about 1+years now and as TopDoc is a unique platform that offers online educational courses specially designed for dentists. It's extremely important to have deadlines met, technology services delivered, and promises kept. Everything that StackMyBiz has delivered so far has been top-notch.  "},
    {"image":"/Images/Ellipse 190.png","title":"-TopDo","statement":"“ TopDoc has been technology partners with Stackmybiz for about 1+years now and as TopDoc is a unique platform that offers online educational courses specially designed for dentists. It's extremely important to have deadlines met, technology services delivered, and promises kept. Everything that StackMyBiz has delivered so far has been top-notch. ” "}
    ,{"image":"/Images/customer-log2.jpg","title":"-TopDo","statement":"“ TopDoc has been technology partners with Stackmybiz for about 1+years now and as TopDoc is a unique platform that offers online educational courses specially designed for dentists. It's extremely important to have deadlines met, technology services delivered, and promises kept. Everything that StackMyBiz has delivered so far has been top-notch. ” "},
  ]
   /* for next and previous button */
   const[currentIndex,setIndex ]=useState(0);
   // code for next button
     const nextButton=()=>{
     count=(count+1)%arrayList.length;
     setIndex(count);
     };
     // code for previous button
    const previousButton=()=>{
    const sliderLength=arrayList.length;
    count=(sliderLength+currentIndex-1)%sliderLength;
    setIndex(count);
     };
     /* Dot class start */
     const Color={
      background:'rgba(255, 235, 225, 1)'
     }
     /* Dot class start */
/*Customer statement card end */
    return(
      <div className="main-div">
          <Header/>
          <Heros link={heros_image} title={title}/>
          <Heros2 Data={Heros2_content}/> 
        <div className="md:flex justify-center ">
            <h2 className="font-[Poppins] text-3xl font-bold py-10  text-center md:w-1/6 ml-10">Our <br/>Services</h2>
            <Card link={"/Images/icons/fe_prototype.png"} title="Rapid Prototyping " style={style}/>
            <Card link={"/Images/icons/clarity_design-line.png"} title=" UI/UX Design" style={style}/> 
        </div>
         <div className=" md:flex justify-center ">
             <Card link={"/Images/icons/carbon_application-mobile.png"} title="Rapid Prototyping " style={style}/>
            <Card link={"/Images/icons/carbon_application-web.png"} title="Rapid Prototyping " style={style}/>
            <Card link={"/Images/icons/cloud.png"} title=" UI/UX Design" style={style}/> 
        </div>
          <hr className="text-slate-300"/>
           <Customer/>
          <section className="customerCard-section">
              <CustomerCard link={arrayList[currentIndex].image} title={arrayList[currentIndex].title} content={arrayList[currentIndex].statement}/>   
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
         </section>
         <Heros2 Data={Heros2_engagement} />
         <FooterContact/>
         <Footer/>
        </div>
      );
  }

export default Home;
