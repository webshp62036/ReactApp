import Button from "./Button";

function Heros(props){
    const bgcolor={
        background:'linear-gradient(180deg, rgba(255, 149, 119, 0.1) 26.04%, rgba(247, 226, 221, 0.02) 105.32%)'
    }
    const buttonBg={
        background:'rgba(4, 66, 132, 1)',
        textAlign:'center',
        marginLeft:"0",
    }
    return(
           <div className=" md:flex justify-center md:mt-22 py-20" style={bgcolor}>
               <div className=" mt-auto mb-auto text-center md:text-left p-10 md:w-1/3 " >
                   <h1 className="font-bold font-[Poppins] md:text-3xl tracking-wide">{props.title[0]}<br/>{props.title[1]}<br/>{props.title[2]}</h1>
                   <Button text="Learn More" style={buttonBg}/>
               </div>
             <div className="items-center md:p-10 mb-auto mt-auto ">
                   <img src={props.link} width="350px" alt="heros" />
               </div>
           </div>
          )
} export default Heros;