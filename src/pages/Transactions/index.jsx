import React from 'react'
import { useParams } from 'react-router-dom'

const Transactions = ()=>{
    const {AccId} = useParams() 
    

    return (
        <>
        <h1>transactions compte {AccId}</h1>
        </>
    )
}

export default Transactions