
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { TransSlice } from "../../pages/Transactions/TransSlice"



const BlockAcc = ({ val, block_mode })=>{
    const navigate = useNavigate()
    
    //const view=useSelector((state)=>state.TransReducer.view)
    const mode=useSelector((state)=>state.userReducer.edit)
    //const mode_trans=useSelector((state)=>state.TransReducer.mode)
    const dispatch=useDispatch()
    const handelTransaction = (e)=>{
        const AccId=e.target.dataset.id
        dispatch(TransSlice.actions.setView({view:true}))
        dispatch(TransSlice.actions.setMode({mode:true}))
        navigate(`/Transactions/${AccId}`)
    }

    const handelCloseTransaction = (e)=>{
        dispatch(TransSlice.actions.setView({view:false}))
        dispatch(TransSlice.actions.setMode({mode:false}))
        navigate(`/User`)
    }
    
   
       
    
    const classe=(block_mode==="user"&&mode)||block_mode==="transac"?"account account-bg-dark":"account account-bg-white"
    return (<>
        <section className={classe} >
        <div className="account-content-wrapper" >
            <h3 className="account-title">{val.AccLib}</h3>
            <p className="account-amount">{val.AccDevise.symbol}{val.AccSold}</p>
            <p className="account-amount-description">{val.AccDesc}</p>
        </div>
        <div className="account-content-wrapper cta">

            {
            block_mode==="transac"?
                <button className="transaction-button" data-id={val.AccId} onClick={handelCloseTransaction} >close</button> 
            :
                <button className="transaction-button" data-id={val.AccId} onClick={handelTransaction} >View transactions</button>
            }
        </div>
        </section>
        </> )
}

export default BlockAcc