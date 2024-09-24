import accList from "../../common/Acclist"
import BlockAcc from "../BlockAcc"

const AccList = ()=>{

return (
    accList.map((item)=><BlockAcc val={item} key={item.AccId} block_mode="user"/>)
    )
}




export default AccList