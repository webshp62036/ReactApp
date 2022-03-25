import React from "react";
function Elements(props){
    return(
        <div>
             <ul className="p-2">
                 <li className="font-bold font-[Poppins] m-1 md:text-xl">{props.text1}</li>
                 <li className="font-[Poppins]">{props.text2}</li>
                 <li className="font-[Poppins]">{props.text3}</li>
                 <li className="font-[Poppins]">{props.text4}</li>
                 <li className="font-[Poppins]">{props.text5}</li>
                 <li className="font-[Poppins]">{props.text6}</li>
             </ul>
        </div>
    );
    }
export default Elements;