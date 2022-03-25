import Header from "./components/Header";
import Heros from "./components/Heros";
import Heros1 from "./components/Heros1.js";
import Heros2 from "./components/Heros2";
import MissionVisionCard from "./components/MissionVisionCard";

function About(){
/* About slide start */
 const firstHeros=[{"title":"About Us",
 "content":"Empowering start-ups to bring their ideas to life, cost-effectively.",
 "image":"/Images/About.png"
}
];
 /* About slide end */

 /* MISSION VISION-CARD START */
 const bgColor={
    background: 'rgba(248, 251, 255, 1)',
 }

 const mission=[
     {"title":"Mission",
     "image":"/Images/icons/mission.png",
     "content":"We enable early-stage startups to bring their ideas to life by providing cost-effective technology solutions with the shortest time to market."
    }];
const vision=[
        {"title":"Vision",
        "image":"/Images/icons/mission.png",
        "content":"Accelerate the growth of early-stage start-ups by becoming the most reliable,  efficient, and innovative technology partner."
      
    }];
const missionImageBgColor={
     backgroundColor:'rgba(255, 114, 94, 1)',
     float:'right'
}
const visionImageBgColor={
    backgroundColor:'rgba(64, 123, 255, 1)',
    float:'right'
}
/* MISSION VISION-CARD END */
/*About-Believe Section Start */
const AboutBelieve=[
      {
        "title":"What We Believe",
        "image":"/Images/About-believe.png",
        "content":"We believe that together we are stronger, you bring the ideas, we bring the technology expertise. With sound technological guidance and strong experience, we can bring your ideas to life sustainably. Stackmybiz strives to develop and deliver disruptive innovations, as well as define long-term relationships with clients, employees and the community as a whole. We promote collaborative relationships based on trust and mutual respect. Our values are the foundation for achieving the highest standards of quality.We have connected with amazing clients to enable them with all that the digital revolution has to offer. Seeing our clients being so passionate about their ideas makes us want to deliver successful mobile applications and websites. And that’s what we strive to do everyday."
      },
]


/* About-Believe Section End */

 return(
       <div>
         <div className="About">
             <Header/>
             <Heros1 title={firstHeros[0].title} content={firstHeros[0].content} link={firstHeros[0].image}/>
             <div className="mission-vision-card w-full border-dotted border-b-2 border-blue-500" style={bgColor}>
               <div className="md:p-20 p-5 md:flex justify-center">
                   <MissionVisionCard title={mission[0].title} link={mission[0].image} content={mission[0].content} style={{backgroundColor:'white',border:'2px solid rgba(255, 114, 94, 1)'}} bgColor={missionImageBgColor}/>
                   <MissionVisionCard title={vision[0].title}  link={vision[0].image} content={vision[0].content} style={{backgroundColor:'white',border:'2px solid rgba(64, 123, 255, 1)' }} bgColor={visionImageBgColor}/>
               </div>
            </div>
           <section className="About-Believe">
             <div>
                <Heros2 title={AboutBelieve[0].title} link={AboutBelieve[0].image} content={AboutBelieve[0].content} />
             </div>
           </section>
            </div>
      </div>
    )
}export default About;