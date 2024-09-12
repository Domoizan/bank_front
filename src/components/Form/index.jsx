import { useSelector } from "react-redux"
import { TYPFORM } from "../../common/conf"


const Form = ({type, btAction={
    handelSigin:null,
    handelSave:null,
    hadelCancel:null,
    chgUsername:null,
    chgPassword:null,
    handleLogin:null,
  } ,
  message=" ",
  isLoading,
  isError
})=>{





  const user=useSelector((state)=>state.userReducer.user)
 
 
switch (type){
case TYPFORM.LOGIN :
    return (
      
         <form>
          <div className="login input-wrapper">
            <label htmlFor="username">Username</label
            ><input type="text" id="username" onChange={btAction.chgUsername}/>
          </div>
          <div className="login input-wrapper">
            <label htmlFor="password">Password</label
            ><input type="password" id="password" onChange={btAction.chgPassword}/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
              >Remember me</label
            >
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me" id="msg">{
            isLoading?"Loading...":isError?message:""
            }</label>
          </div>
          <button id="btLogin" className="sign-in-button" onClick={btAction.handleLogin}>Sign In</button>
          
        </form>
      
      )
    case TYPFORM.UPDATE_USER :
      return (
        

      <form  onSubmit={btAction.handelSave}>
        <div className="updateuser input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" defaultValue={user.userName}/>
          </div>
          <div className="updateuser input-wrapper">
            <label htmlFor="name" >Nom</label>
            <input type="texte" id="name" disabled  placeholder={user.lastName}/>
          </div>
          <div className="updateuser input-wrapper">
            <label htmlFor="surname" >Prenom</label>
            <input type="texte" id="surname" disabled placeholder={user.firstName}/>
          </div>
          <div className="updateuser input-wrapper">
            <label id="msg" className="form_err" >{message?message:""}</label>
          </div>
          <div className="updateuser input-wrapper">
            <input type="submit" className="updateuser-button" value="Save" />
            <input type="reset" className="updateuser-button" onClick={btAction.hadelCancel} value="Cancel"/>
          </div>
      </form>
     
      )
    default : return
  }
}

export default Form