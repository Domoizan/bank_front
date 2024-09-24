import { useState } from "react";
import { useUpdateUserMutation } from "../services/userApi";

import { userSlice } from "../pages/User/userSlice";
import { useDispatch } from "react-redux";

export const useUpdateuser=()=>{
    const dispatch = useDispatch()
    const [errorPutuser,setError] = useState(false)
    const [isOK,setIsOK] = useState(false)
    const [msg,setMsg] = useState("")
    const [updateUser] = useUpdateUserMutation()
    const handleUpdateuser = async (token,userData) => {
        setMsg("")
        setError(false)
        setIsOK(false)
        setError(false)
        try {
        const rep=await updateUser({token:token,userData:userData})
        if(rep.data){
            switch(rep.data.status){
                case 200 :
                    const arg={user:{
                        email: rep.data.body.email,
                        firstName:rep.data.body.firstName,
                        lastName:rep.data.body.lastName,
                        userName: rep.data.body.userName,
                        id:rep.data.body.id,
                    }}
                    dispatch(userSlice.actions.getUser(arg))
                    setIsOK(true) 
                    
                    setMsg("Successfully updated") 
                    break
                default : setError("Error inattendu")
            }
        }
        if(rep.error){
            if ('status' in rep.error) {
                const errMsg = 'error' in rep.error ? rep.error.error : JSON.stringify(rep.error.data)
                setError(errMsg)
            }else{
                const errMsg =rep.error.message
                setError(errMsg)
            }
        }

        } catch  (e){
            setError(`Error : ${e}`)
        }
        };

        return [handleUpdateuser, errorPutuser, isOK, msg ]
}