
import { useDispatch, useSelector } from "react-redux"
import Form from "../Form"
import { userSlice } from "../../pages/User/userSlice"
import { TYPFORM } from "../../common/conf"
import { useUpdateuser} from "../../hooks/useUpdateuser"

const HeadAcc = ()=>{
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.userReducer.user)
    const mode=useSelector((state)=>state.userReducer.edit)
    const token=useSelector((state)=>state.userReducer.token)
    const [handleUpdateuser, message] = useUpdateuser()
    
const handelEditUser = ()=>{
    dispatch(userSlice.actions.setEdit({edit:true}) )
    console.log(`mode = ${mode}`)
}

const handelCancel = (e)=>{
    e.preventDefault()
    dispatch(userSlice.actions.setEdit({edit:false}))
}

const handelSave = (e)=>{
    e.preventDefault()
    
    const userData={userName : document.getElementById("username").value}
    //const userData=document.getElementById("username").value
    console.log (`data = ${userData}`)
    handleUpdateuser(token,userData)
    //document.getElementById("msg").innerHTML="nouveau texte"
    //dispatch(userSlice.actions.setEdit({edit:false}))
}


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