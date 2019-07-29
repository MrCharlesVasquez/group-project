import React from 'react'

const Transaction = props => {
    const { transName, transAmount, transType, deleteTransaction, _id } = props
    
    return(
        <div className="transaction-div" style={{border: "1px solid black"}}>
            <h1>{transName}</h1>
            <h1>{transAmount}</h1>
            <p>{transType}</p>
            <button onClick={() => deleteTransaction(_id)}>Delete</button>
        </div>
    )
}

export default Transaction