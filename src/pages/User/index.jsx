import { useSelector } from "react-redux"
import HeadNav from "../../components/HeadNav"
import AccList from "../../components/AccList"
import HeadAcc from "../../components/HeadAcc"


const User  = ()=>{
  
  const user=useSelector((state)=>state.userReducer.user)
  const mode=useSelector((state)=>state.userReducer.edit)
  const logged=useSelector((state)=>state.userReducer.logged)
  const classe =mode?"main-user":"main bg-dark"





if (logged){
  return(
  <>
      <HeadNav lnks=
    {[{
      lnk:`/User`,
      txt:user.firstName,
      icone:"fa fa-user-circle",
    }
  ]}
    />
    <main className={classe}>
      <HeadAcc />
      <h2 className="sr-only">Accounts</h2>
      <AccList />
    </main>
    <footer className="footer">
      <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </>)
  }
  else{

    return (
      <>
      <HeadNav lnks=
    {[{
      lnk:"/Sign_in",
      txt:"Sign In",
      icone:"fa fa-user-circle",
    }
  ]}
    />
    <main className="user_unlogged">
      
      <h2>You must be authenticated to access this page.</h2>
      
    </main>

    <footer className="footer">
    <p className="footer-text">Copyright 2020 Argent Bank</p>
    </footer>
  </>
    )
  }
}

export default User