
import Operations  from "../../components/Operations"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import HeadNav from '../../components/HeadNav'
import transactions from '../../common/transactions'
import { TransSlice } from './TransSlice'



const Transactions = ()=>{
    const {AccId}=useParams()
    const logged=useSelector((state)=>state.userReducer.logged)
    const user=useSelector((state)=>state.userReducer.user)
    const mode=useSelector((state)=>state.TransReducer.mode)
    const list=transactions.filter((item)=>item.AccId===parseInt(AccId))
    const dispatch=useDispatch()
    dispatch(TransSlice.actions.setTransac({list:list}))


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
            <Operations AccId={AccId}/>
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
export default Transactions