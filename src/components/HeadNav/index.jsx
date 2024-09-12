import {  NavLink } from "react-router-dom"

import Menu from "../Menu"
/**
 * @param  {[{lnk:"String",txt:"string",icone:"string"}]} lnks
 * @returns {HTMLCollection} liens de navigation 
 */
const HeadNav = ({lnks})=>{
    return (
        <nav className="main-nav">
          <NavLink to="/" className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src="../img/argentBankLogo.webp"
              alt="Argent Bank Logo"
      /><h1 className="sr-only">Argent Bank</h1></NavLink>
        
      <div>
        <Menu lnks={lnks}/>
      </div>
    </nav>
    )
}

export default HeadNav