 function CustomerCard(props){
   
    return(
         <div className="m-5">
           <div className="md:w-1/2  p-5 md:p-10 md:flex justify-center rounded-lg mr-auto ml-auto text-sm " style={{background: 'rgba(255, 219, 209, 1)'}}>
            <div className="customer-logo md:ml-auto md:mr-auto md:order-2  ">
                  <img src={props.link} width="200" alt="customer-logo" className=" mr-auto ml-auto" />
              </div>
              <div className="statement-div font-[Poppins]  md:order-1  ">
                  <p className=" ">{props.content}</p><br/>
                  <h3 className="text-lg font-bold">{props.title}</h3>
                  <h4>{props.title1}</h4>
              </div>
            </div> 
       </div>
       );
}export default CustomerCard;