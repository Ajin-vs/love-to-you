import { useState } from "react";

function UserHomePage(){
    const [a,setA] = useState(0)
    const submit =()=>{
        if(a===0)setA(2)
        else setA(0)
    }
    setTimeout(() => {
        submit()
    }, 1000);
    return(
        <>
            <button onClick={submit} className={ ` d-block mx-auto mt-5 ${a === 0? "btn btn-danger":'btn btn-warning'}`}>I LOVE YOU</button>
            <img width="70%" className={`mx-auto d-block ${a===0? "shadow":''}`} src={"https://i.natgeofe.com/k/7bfcf2d2-542e-44f0-962a-c36f2efa98a5/heart.jpg?w=636&h=358"}></img>
        </>
    )
}
export default UserHomePage;