import React from 'react'

const Transaction = props => {
    const { name, amount, description } = props
    
    return(
        <div className="transaction-div" style={{border: "1px solid black"}}>
            <h1>{name}</h1>
            <h1>{amount}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Transaction