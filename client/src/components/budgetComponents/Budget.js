import React, { useEffect } from 'react'
import TransactionsList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'
import { withVice } from '../../context/ViceProvider.js'





const Budget = props => {
    const { total, getTransactions } = props
    
    useEffect(() => {
        // Component Did Mount
        getTransactions()
    }, [getTransactions] )

    
    
    return (
            <div>
                <TransactionForm {...props}/>
                <TransactionsList {...props}/>
                <h1>Total: {total}</h1>
                
            </div>
        )
}

export default withVice(Budget)