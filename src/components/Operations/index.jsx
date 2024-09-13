
import Acclist from "../../common/Acclist"
import BlockAcc from "../BlockAcc"
import TabOperations from "../TabOperations"



const Operations = ({AccId})=>{
    const val=Acclist[AccId-1]
    return(
        <>
            <BlockAcc val={val}/>
            <TabOperations AccId={val.AccId}/>
        </>
    )
}

export default Operations