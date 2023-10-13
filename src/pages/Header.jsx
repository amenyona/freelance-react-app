import React from "react";
import { Link } from 'react-router-dom';
import AuthConsumer from "../hooks/Auth";
import FrontHeader from "./FrontHeader";
import BackHeader from "./BackHeader";


const Header = () => {
  const [authed, dispatch] = AuthConsumer();

    return(
      
        <>
        {authed
        ?<FrontHeader />:<BackHeader />
      }
         
        </>
    )
}

export default Header;