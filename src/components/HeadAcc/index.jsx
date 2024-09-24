
import { useDispatch, useSelector } from "react-redux"
import Form from "../Form"
import { userSlice } from "../../pages/User/userSlice"
import { TYPFORM } from "../../common/conf"
import { useUpdateuser} from "../../hooks/useUpdateuser"
import { useEffect, useState } from "react"

const HeadAcc = ()=>{
    const dispatch=useDispatch()
    const [message,setMessage]=useState("")
    const user=useSelector((state)=>state.userReducer.user)
    const mode=useSelector((state)=>state.userReducer.edit)
    const token=useSelector((state)=>state.userReducer.token)
    const [handleUpdateuser, errorPutuser, isOK, msg] = useUpdateuser()
    
const handelEditUser = ()=>{
    dispatch(userSlice.actions.setEdit({edit:true}) )
}

const handelCancel = (e)=>{
    e.preventDefault()
    setMessage("")
    dispatch(userSlice.actions.setEdit({edit:false}))
}

const handelSave = (e)=>{
    e.preventDefault()
    const userData={userName : document.getElementById("username").value}
    //const userData=document.getElementById("username").value
    //console.log (`data = ${userData}`)
    handleUpdateuser(token,userData)
    //document.getElementById("msg").innerHTML="nouveau texte"
    //dispatch(userSlice.actions.setEdit({edit:false}))
}

useEffect(()=>
    {
        const val=isOK?msg:errorPutuser
        setMessage(val)

    },[isOK,errorPutuser])


return (
    <div className="header">
    {mode ?
        <section className="userupdate-content" >   
        <h1>Edit user info</h1>
        <Form type={TYPFORM.UPDATE_USER} btAction = {{handelSave:handelSave,hadelCancel:handelCancel,}} message={message} />
        </section>  
    :
        <>
        <h1>Welcome back<br />{user.firstName} {user.lastName}!</h1>
        <button className="edit-button" onClick={handelEditUser}>Edit Name</button>
        </>
    }
  </div>

)
}

export default HeadAcc