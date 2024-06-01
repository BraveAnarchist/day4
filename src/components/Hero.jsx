import data from "./Data"
import Card from "./Card"
function Hero() {
    return(
 <section className="hero" style={{marginTop:"20vh"}}>
       {data.map((ele,idx)=>{
          return (<Card author={ele.author} quote={ele.quote}/>) 
       })}
    </section>
    )
}
export default Hero;