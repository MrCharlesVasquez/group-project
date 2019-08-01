import React from 'react'

const Transaction = props => {
    const { transName, transAmount, transType, deleteTransaction, _id } = props
    

    return (

        <div className="trans-divContainer">
            
            <div className="transaction-div" >
            <p className="transType">{transType}</p>
                <h1 className="transName">{transName}</h1>
                {transType === 'income' ? <h1 className="transAmount" > +${transAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}  </h1>
                    : <h1 className="transAmount"> -${transAmount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })} </h1>}
                
                <button className="delTransBut" onClick={() => deleteTransaction(_id)}>Delete</button>
            </div>
        </div>
    )
}

export default Transaction