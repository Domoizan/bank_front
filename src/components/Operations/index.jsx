
import Acclist from "../../common/Acclist"

import TabOperations from "../TabOperations"



const Operations = ({AccId})=>{
    const val=Acclist[AccId-1]
    return(
        <>
            <TabOperations AccId={val.AccId}/>
        </>
    )
}

export default Operations