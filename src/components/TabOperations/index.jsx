import { useDispatch, useSelector } from "react-redux"
import { TransSlice } from "../../pages/Transactions/TransSlice"


const TabOperations=()=>{
    const list=useSelector((state)=>state.TransReducer.list)
    const deploy=useSelector((state)=>state.TransReducer.idopen)
    const dispatch=useDispatch()
    const handleDeploy=(e)=>{
        const id=e.target.dataset.id
        const val=(deploy===id)?"":id
        dispatch(TransSlice.actions.setIdopen({idopen:val})) 
    }
    
    return (
        <section className="list_transac">
            <div className="content_transac">
                <div className="content_transac_col-x3 head">Date</div>
                <div className="content_transac_col-x4 head .cel-align-left">Description</div>
                <div className="content_transac_col-x2 head">Amount</div>
                <div className="content_transac_col-x2 head">Balance</div>
                <div className="content_transac_col-x1 head"></div>
            </div>
            {
            list?.map((item,idx)=>{
                const id= item.TransId
                const cl=(deploy===id)?"content_transac_col-x12":"content_transac_col-x12 hidden"
                return (
                    <div className="content_transac transac-tab-color" key={idx}>
                        <div className="content_transac_col-x3">{item.TransDate}</div>
                        <div className="content_transac_col-x4 cel-align-left">{item.TransLib}</div>
                        <div className="content_transac_col-x2" >{item.TransAmount}</div>
                        <div className="content_transac_col-x2">{item.TransBalance}</div>
                        <div className="content_transac_col-x1"><button className="content_transac-button" data-id={item.TransId} onClick={handleDeploy}><i className="fa-solid fa-chevron-down" data-id={item.TransId}></i></button></div>
                        <div className={cl}>
                            <div className="content_transac_col-x12"></div>
                            <div className="content_transac_col-x2 cel-align-left">Transaction type</div>
                            <div className="content_transac_col-x4 cel-align-left">{item.TransType.name}</div>
                            <div className="content_transac_col-x6"></div>
                            <div className="content_transac_col-x2 cel-align-left">Category</div>
                            <div className="content_transac_col-x4 cel-align-left">{item.TransCategory.name}<button className="content_transac-button"><i className="fa-solid fa-pencil"></i></button></div>
                            <div className="content_transac_col-x6 cel-align-left"></div>
                            <div className="content_transac_col-x2 cel-align-left">Note</div>
                            <div className="content_transac_col-x4 cel-align-left" >{item.TransNote}<button className="content_transac-button"><i className="fa-solid fa-pencil"></i></button></div>
                            <div className="content_transac_col-x6"></div>
                        </div>
                    </div>
                    )
                }
            )
        }
            
        </section>
    )
}

export default TabOperations