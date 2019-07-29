import React, { useEffect } from 'react'
import TransactionsList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'
import { withVice } from '../../context/ViceProvider.js'





const Budget = props => {
    const { getTransactions } = props
    
    useEffect(() => {
        // Component Did Mount
        getTransactions()
    }, [getTransactions] )


    
    
    console.log(props.transactions)
    return (
            <div>
                <TransactionForm {...props}/>
                <TransactionsList {...props}/>
                
            </div>
        )
}

export default withVice(Budget)