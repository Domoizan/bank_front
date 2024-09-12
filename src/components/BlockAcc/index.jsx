import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const BlockAcc = ({ val })=>{
    const navigate = useNavigate()
    const mode=useSelector((state)=>state.userReducer.edit)
    const handelTransaction = (e)=>{
        const AccId=e.target.dataset.id
        navigate(`/Transactions/${AccId}`)
    }
    const classe=mode?"account account-bg-dark":"account account-bg-white"
    return (<>
        <section className={classe} >
        <div className="account-content-wrapper" >
            <h3 className="account-title">{val.AccLib}</h3>
            <p className="account-amount">{val.AccDevise.symbol}{val.AccSold}</p>
            <p className="account-amount-description">{val.AccDesc}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button" data-id={val.AccId} onClick={handelTransaction} >View transactions</button>
        </div>
        </section>
        </> )
}

export default BlockAcc