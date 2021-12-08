import { useState } from "react";
import img from "../components/songs/watr-double-overhead-11517.mp3"
function UserHomePage(){
    
    const [a,setA] = useState(0)
    const [data, setData] =useState('')
    const [show, setShow] =useState(false)
    let arr =[]
    const submit =()=>{
        if(a===0)setA(2)
        else setA(0)
    }
    const love =()=>{
        setData('I LOVE YOU AISHU')
        setShow(true)
    }
    setTimeout(() => {
        submit()
    }, 1000);
    return(
        <>
            <button onClick={love} className={ ` d-block mx-auto mt-5 ${a === 0? "btn btn-danger":'btn btn-warning'}`}>Clik To See My Love</button>
            {/* <img width="70%" className={`mx-auto d-block ${a===0? "shadow":''}`} src={"https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg?w=636&h=358"}></img> */}
            {
                love?
               
                 <>  
               
                <p className="text-center m-5 text-danger h1">{data}</p>
                {
                    show? <div className="row  container "> 
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                     <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <div className="col m-3">
                        <div className = "heart"></div>
                    </div>
                    <audio controls autoPlay hidden>
     <source src={img} type="audio/ogg"/>
     </audio>
                    </div>:''
                }    
                    </>:''
                
               
            }
    

        </>
    )
}
export default UserHomePage;