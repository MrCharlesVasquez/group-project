import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = props => {
    const { transactions, deleteTransaction } = props
    console.log(props)
    
    const mappedTransactions = transactions.map((transaction, i) => <Transaction key={(transaction._id ? transaction._id : i)} {...transaction} deleteTransaction={deleteTransaction}/>)
    
    return(
        <div>
            { mappedTransactions }
            
        </div>
    )
}

export default TransactionsList