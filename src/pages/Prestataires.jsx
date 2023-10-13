import React from "react";
import AuthConsumer from "../hooks/Auth";


const Prestataires = () => {
    const auth = AuthConsumer();
     console.log(auth)
    return(
        <>
        <h2>Prestataires Page</h2>
        </>
    )
}

export default Prestataires;