import Header from "./components/Header";
import Heros1 from "./components/Heros1.js";
import Heros2 from "./components/Heros2";
import TeamCard from "./components/TeamCard";
import TextImageCard from "./components/TextImageCard";
import Footer from "./components/Footer";
import Button from "./components/Button";

function About() {
  /* About slide start */
  const firstHeros = {
    "title": "About Us",
    "content": "Empowering start-ups to bring their ideas to life, cost-effectively.",
    "image": "/Images/About.png"
  };
  /* About slide end */

  /* MISSION VISION-CARD START */
  const bgColor = {
    background: 'rgba(248, 251, 255, 1)',
  };

  const mission =
  {
    "title": "Mission",
    "image": "/Images/icons/mission.png",
    "content": "We enable early-stage startups to bring their ideas to life by providing cost-effective technology solutions with the shortest time to market."
  };
  const vision =
  {
    "title": "Vision",
    "image": "/Images/icons/mission.png",
    "content": "Accelerate the growth of early-stage start-ups by becoming the most reliable,  efficient, and innovative technology partner."

  };
  const missionImageBgColor = {
    backgroundColor: 'rgba(255, 114, 94, 1)',
    float: 'right'
  }
  const visionImageBgColor = {
    backgroundColor: 'rgba(64, 123, 255, 1)',
    float: 'right'
  };
  /* MISSION VISION-CARD END */
  /*About-Believe Section Start */
  const AboutBelieve =
  {
    "title": "What We Believe",
    "image": "/Images/About-believe.png",
    "content": "We believe that together we are stronger, you bring the ideas, we bring the technology expertise. With sound technological guidance and strong experience, we can bring your ideas to life sustainably. Stackmybiz strives to develop and deliver disruptive innovations, as well as define long-term relationships with clients, employees and the community as a whole. We promote collaborative relationships based on trust and mutual respect. Our values are the foundation for achieving the highest standards of quality.We have connected with amazing clients to enable them with all that the digital revolution has to offer. Seeing our clients being so passionate about their ideas makes us want to deliver successful mobile applications and websites. And that’s what we strive to do everyday."
  };

  /* About-Believe Section End */
  /* Team Card start */
  const amit = {
    "image": "https://ca.slack-edge.com/TTAGUFCUF-USVT4B1U2-27566db520f9-512",
    "name": "Kumar Amit Singh",
    "desination": "Co-founder & Chief Operating Officer",
    "about": "Amit comes with 16+ years of experience in Information Technology. He is a Software Engineer, graduated from the Cochin University of Science and Technology. He has spent many years working with Accord & Samsung. Amit is an effective mentor who takes the initiative of guiding individuals towards their goals.  He has the ability to balance strategic and software thinking with operational implementation and execution. He builds sustainable relationships with customers, partners, and employees, and strives to create a holistic ecosystem of technical resources. He ensures quality development and optimizes resources for efficiency and scalability. Amit likes to learn about the different cultures of the world in his free time.",
    "quote": "His Mantra is - Believe in Innovation and Endeavour to reach new horizons. "
  };

  const icons = {
    "facebook": "/Images/icons/facebook.png",
    "twitter": "/Images/icons/twitter.png",
    "linkedin": "/Images/icons/linkedin.png"
  };

  const rakesh = {
    "image": "https://ca.slack-edge.com/TTAGUFCUF-USVTS996W-89a446887920-512",
    "name": "Rakesh Kumar ",
    "desination": "Co-founder & Chief Operating Officer",
    "about": "Rakesh comes with 16+ years of experience in the software industry across the globe. He holds a Master’s degree in Computer Science from the State University of New York and a Bachelor’s degree from the Cochin University of Science and Technology. He built his career working with Accord, Motorola, CA Technologies, Location Labs, and Lyft.Rakesh leads the technical team in emerging web and mobile technologies. He helps the team track market trends build scalable architecture and multi-channel platforms using modular programming methodologies in an agile environment. He uses his strong technical  fundamentals and extensive experience in software programming to steer the company towards its vision. You will most often find him mentoring young talent or reading in his free time.",
    "quote": " His Mantra is - Imagination is the true magic carpet.",
  };
  /* Team Card end */

  /* Footer Contact start */
  const buttonColor = {
    background: 'rgba(3, 44, 87, 1)',
    borderRadius: "2"
  }

  /* Footer Contact end */
  return (
    <div>
      <div className="About">
        <Header />
        <Heros1 Data={firstHeros} />
        <div className="mission-vision-card w-full border-dotted border-b-2 border-blue-500" style={bgColor}>
          <div className=" md:flex justify-center md:p-20 p-5 ">
            <TextImageCard Data={mission} style={{ backgroundColor: 'white', border: '2px solid rgba(255, 114, 94, 1)' }} bgColor={missionImageBgColor} />
            <TextImageCard Data={vision} style={{ backgroundColor: 'white', border: '2px solid rgba(64, 123, 255, 1)' }} bgColor={visionImageBgColor} />
          </div>
        </div>
        <section className="About-Believe">
          <div>
            <Heros2 Data={AboutBelieve} />
          </div>
        </section>
      </div>
      <section className="founder-message justify-center border-t-4 border-b-4 border-dotted border-gray-200" style={{ background: 'rgba(248, 251, 255, 1)' }}>
        <div className="p-5 md:p-20 text-center container ml-auto mr-auto">
          <h1 className="font-bold text-2xl font-[Poppins]">Founder’s Message </h1>
          <p className="font-[Poppins] p-10 tracking-wider">
            “We are known for our beliefs, a commitment to providing outstanding customer value with our excellent technology expertise. We are visionaries, dreamers, specialists and perfectionists. The diversity, commitment and expertise of our team, working cohesively with our clients, and partners, inspire our goal to be a global leader in IT solutions and services.”
          </p>
        </div>
      </section>
      <section className="Our Team  p-5 md:p-24 ">
        <div className="container ml-auto mr-auto">
          <div className="title">
            <h1 className="text-2xl text-center md:text-left font-bold font-[Poppins] ">Our Team</h1>
          </div>
          <div>
            <TeamCard Data={amit} icons={icons} />
            <TeamCard Data={rakesh} icons={icons} />
          </div>
        </div>
      </section>
      <section className="about-expert border-t-4 border-dotted border-gray-200 " style={{ background: 'rgba(248, 251, 255, 1)' }}>
        <div className="md:grid md:grid-cols-2 container ml-auto mr-auto md:p-20 p-5" >
          <div className="image  md:order-2">
            <img src="/Images/expert.png" alt="expert" className="" />
          </div>
          <div className=" md:mt-auto md:mb-auto md:order-1  ">
            <div className="content">
              <h1 className="font-[Poppins] font-bold text-lg">Interested in Working With Us?</h1>
              <p className="font-[Poppins] text-sm">Tell us about your project.</p>
            </div>
            <div className="button mt-3">
              <Button text="Get In Touch" style={buttonColor} />
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
} export default About;