import React from 'react'
import Transaction from './Transaction.js'

const TransactionsList = props => {
    const { transactions } = props
    console.log(props)
    
    const mappedTransactions = transactions.map(transaction => <Transaction key={transaction._id} {...transaction}/>)
    
    return(
        <div>
            { mappedTransactions }
            
        </div>
    )
}

export default TransactionsList