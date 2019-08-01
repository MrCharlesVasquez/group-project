import React, { useEffect } from 'react'
import TransactionsList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'
import { withVice } from '../../context/ViceProvider.js'





const Budget = props => {
    const { total, getTransactions } = props

    useEffect(() => {
        // Component Did Mount
        getTransactions()
    }, [getTransactions])



    return (
        
        <div className="BudgetOuterContainer">
            <div className="BudgetContainer">
                <TransactionForm {...props} />
                <TransactionsList {...props} />
                <h1 className="BudgetTotal" >Total: <span className="totalSpan"> ${total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</span></h1>

            </div>
        </div>
    )
}

export default withVice(Budget)