import { Link } from "react-router-dom";
function TeamCard(props){
    
    const{image,name,desination,about,quote}=props.Data;
    const{facebook,twitter,linkedin}=props.icons;
    return(
        <div className="Team-Card md:grid md:grid-cols-2 gap-2 md:ml-auto md:mr-auto m-5 md:p-10 p-5 rounded-lg hover: border-b-2  hover:border-gray-400" style={{background:'rgba(251, 244, 240, 1)'}}>
           <div className="grid row-span-4 p-2 md:p-3">
              <div className="image ml-auto mr-auto">
                <img src={image} alt="profile" className="rounded-full w-40 h-40" /> 
              </div>
              <div className="title ">
                  <h2 className="text-xl font-bold text-center font-[Poppins]">
                      {name}
                  </h2>
              </div>
              <div className="Desination">
                 <h4 className="text-center font-[Poppins] ">{desination}</h4>
              </div>
              <div className="Social-media flex ml-auto mr-auto">
                 <Link to="#" ><img src={facebook} className="ml-2" alt="facebook" /></Link>
                 <Link to="#" ><img src={twitter}  className="ml-2" alt="twitter"/></Link>
                 <Link to="#"> <img src={linkedin} className="ml-2" alt="linkedin" /></Link>
              </div>
         </div>
         <div className="About  mt-5 md:mt-0">
             <p className="font-[Poppins]">
              {about}
              <br/><br/>
              <span>{quote}</span>
            </p>
         </div>
        </div>
    );
}export default TeamCard;