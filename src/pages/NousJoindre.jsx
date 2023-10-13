import React from "react";
import AuthConsumer from "../hooks/Auth";


const NousJoindre =() =>{
    const auth = AuthConsumer();
    console.log(auth)
    return(
        <>
        <h2>Nous Joindre</h2>
        </>
    )
}
export default NousJoindre;