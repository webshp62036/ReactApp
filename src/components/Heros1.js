

function Heros1(props){
   const{title,content,image}=props.Data;
    return(
        <div className="main-div">
            <div className="md:grid md:grid-cols-2 p-5  ">
            <div className=" items-center md:pl-5 ml-auto mr-auto mt-auto mb-auto md:w-1/2 ">
                  <h2 className="font-bold text-2xl -tracking-wide font-[Poppins]">{title}</h2><br/>
                  <p className="font-[Poppins]">{content}
                  
                </p>
              </div>
              <div className=" md:ml-32 md:p-10 md:w-1/2 p-2 mt-5">
                  <img src={image} alt="heros" width="400" height="auto"/>
              </div>
            </div>
        </div>
    )
}export default Heros1;
