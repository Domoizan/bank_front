import { useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import HeadNav from "../../components/HeadNav"
import { useLoginMutation} from "../../services/userApi";
import { userSlice } from "../User/userSlice";
import { useGetuser } from "../../hooks/useGetuser";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import { TYPFORM } from "../../common/conf";


const Sign_in = ()=>{
    const navigate=useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //const [token,setToken] =useState("")
    //const [logged, setLogged] = useState(false)
    const logged=useSelector((state)=>state.userReducer.logged)
    const token=useSelector((state)=>state.userReducer.token)
    const [login, {isLoading, isError, error, isSuccess, data}] = useLoginMutation()
    const [handleGetuser, errorGetuser,isOk] = useGetuser()
    const dispatch=useDispatch()
    let message=""
    const handleLogin = (e) => {
      e.preventDefault()
      if(username && password){
        login({email:username, password:password});
      }
    }

    const chgUsername=(e)=>{
      const name = e.target.value
      setUsername(name)
    }

    const chgPassword=(e)=>{
      const pass=e.target.value
      setPassword(pass)
    }

    useEffect(() => {
      token && handleGetuser(token)
      //setToken()
    }, [token, handleGetuser])

    if(errorGetuser){
      message=errorGetuser
    }
    if(isOk){
      navigate('/user')
    }

    if(isError){
      message = error.data.message
    }


    if(isSuccess && !logged){
      switch(data.status){
        case 200: 
            dispatch(userSlice.actions.setToken({token:data.body.token,logged:true}))
            //setToken(data.body.token)
            //setLogged(true)
            break
        case 400:
            message=`${data.message}`
            break
        default: return
      }
 
    }

  return(
  <>
    <HeadNav lnks=
    {[{
      lnk:"/Sign_in",
      txt:"Sign In",
      icone:"fa fa-user-circle",
    }]}
    />
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
            <Form type={TYPFORM.LOGIN} 
            btAction = {{chgUsername:chgUsername,chgPassword:chgPassword,handleLogin:handleLogin}} 
            message={message} 
            isLoading={isLoading} 
            isError={isError}
            />

        
      </section>
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </>)
}

export default Sign_in