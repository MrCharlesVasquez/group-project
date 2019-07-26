import React, { useEffect } from 'react'
import TransactionsList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'
import { withVice } from '../../context/ViceProvider.js'





const Budget = props => {

    useEffect(() => {
        // Component Did Mount
        props.getTransactions()
    }, [props.getTransactions] )
    
    
    console.log(props.transactions)
    return (
            <div>
                <TransactionForm {...props}/>
                <TransactionsList transactions={props.transactions}/>
                
            </div>
        )
}

export default withVice(Budget)