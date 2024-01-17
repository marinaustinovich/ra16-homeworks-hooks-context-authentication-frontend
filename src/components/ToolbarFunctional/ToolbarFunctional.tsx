import { useContext, Fragment } from "react";
import { News } from "../News";
import AuthContext from "../../contexts/AuthContext";
import { Logout } from "../Logout";
import LandingPage from "../LandingPage/LandingPage";


export  const ToolbarFunctional = () => {
    const {token} =   useContext(AuthContext);
    console.log(token)
    return (
        <Fragment>
        {token && <Fragment>
                <Logout/>
                <News />  
            </Fragment>
        }
        {!token && <LandingPage/>}
        </Fragment>
    )
}

