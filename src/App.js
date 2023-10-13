import About from "./pages/About";
import Employeurs from "./pages/Employeurs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NousJoindre from "./pages/NousJoindre";
import Prestataires from "./pages/Prestataires";
import { useRoutes } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./pages/Register";
import AuthConsumer from "./hooks/Auth";
import BackHome from "./components/BackHome";

import RequireAuth from "./components/RequireAuth";


function App() {
  const [authed, dispatch] = AuthConsumer();
  const auth = authed.auth
  //console.log('dffgdfgdgdgdfg '+authed)
  console.log('sdfs ' + auth)
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/apropos",
      element: <About />
    },
    {
      path: "/employeurs",
      element: <Employeurs />
    }
    ,
    {
      path: "/prestataires",
      element: <Prestataires />
    }
    ,
    {
      path: "/nous-joindre",
      element: <NousJoindre />
    }
    ,
    {
      path: "/login",
      element: <Login />
    }
    ,
    {
      path: "/register",
      element: <Register />
    },
    {
      path: 'dashboard',
      element: <RequireAuth><BackHome /></RequireAuth>
    }
  ])
  if (auth == false) {
    return (
      <>


        {routes}

      </>
    )
  } else if (auth == true) {
    return (
      <><BackHome />
        {routes}</>
    )
  }
  // return (
  //   <div className="App">

  //   {authed
  //   ?<>
  //   <Header />
  //      {routes}
  //      <Footer />
  //      </>:<><BackHeader />
  //      {routes}</>
  //   }     
  //   </div>
  // );
}

export default App;