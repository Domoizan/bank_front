import { useState } from "react";
import { useGetUserMutation } from "../services/userApi";
import { useDispatch } from "react-redux";
import { userSlice } from "../pages/User/userSlice";

export const useGetuser=()=>{
    const dispatch = useDispatch()
    const [errorGetuser,setError] = useState()
    const [isOK,setIsOK] = useState(false)
    const [getUser, {data} ] = useGetUserMutation()
    const handleGetuser = async (token) => {
        try {
        
        const rep=await getUser(token)
        console.log(`status : ${rep.data.status}`)
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
                break
            default : setError("Error inattendu")
        }
        } catch  {
            setError(`Error : ${data}`)
        }
        };

        return [handleGetuser, errorGetuser, isOK ]
}