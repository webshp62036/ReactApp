
function TextImageCard(props){
  const{title,image,content}=props.Data;
   return(
        <div className="h-1/5 md:w-1/3 pt-5 m-5  sm:w-11/12 rounded-lg p-10 " style={props.style}>
             <div className="flex ">
                <div className="title w-1/2">
                   <h3 className=" font-bold text-xl font-[Poppins] ">{title}</h3> 
                </div>
                <div className="image w-1/2 ml-10">
                  <img src={image} alt="icons"  className=" -mt-12 md:-mt-16  w-min h-min p-3 rounded-full " style={props.bgColor}/>
                </div>
            </div>
            <div className="content p-1 mt-2">
                <p className="font-[Poppins]">{content}</p>
            </div>
    </div>
)
}export default TextImageCard;



