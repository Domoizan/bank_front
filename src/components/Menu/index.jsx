import { useDispatch, useSelector } from "react-redux" 
import { useNavigate } from "react-router-dom"
import { userSlice } from "../../pages/User/userSlice"
import {  NavLink } from "react-router-dom"

/**
 * @param  {[{lnk:"String",txt:"string",icone:"string"}]} lnks
 * @returns {HTMLCollection} liens de navigation 
 */


const Menu = ({lnks}) =>{
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const logged=useSelector((state)=>state.userReducer.logged)
    const mode=useSelector((state)=>state.userReducer.edit)
    const logout = ()=>{
        dispatch(userSlice.actions.logOut({
            user:{
                email: "",
                firstName: "",
                lastName: "",
                userName: "",
                id: ""},
            logged:false,
            edit:false,
            token:""}))
        navigate('/')
    }

    





    return (
        <>
            {
            lnks.map((lnk,idx)=>(     
                mode?
                    <NavLink to={lnk.lnk} className="main-nav-item" href={lnk.lnk} key={`lnk_${idx}`} >
                    {lnk.txt} <i className={lnk.icone}></i> 
                    </NavLink>
                :
                    <NavLink to={lnk.lnk} className="main-nav-item" href={lnk.lnk} key={`lnk_${idx}`} >
                    <i className={lnk.icone}></i> {lnk.txt}
                    </NavLink>
                    )
                )
            }
            {(logged && mode)?<i class="fa-solid fa-gear"> </i>:" "}
            {(logged && mode)?
                <button className="main-nav-item" onClick={logout}>
                    <i class="fa-solid fa-power-off"></i> 
                </button>
                :
                <button className="main-nav-item" onClick={logout}>
                    <i className="fa fa-sign-out"> </i>Sign Out
                </button>
            }
        </>
    )
}

export default Menu