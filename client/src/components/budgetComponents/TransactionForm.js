import React from 'react'

const TransactionForm = props => {
    const { transName, transAmount, transDate, transSubmit, transChange,  } = props

    return(
        <form onSubmit={transSubmit}>
            <input 
                type="text" 
                name="transName" 
                value={transName} 
                onChange={transChange} 
                required
                placeholder="memo"/>
            <input 
                type="number" 
                name="transAmount" 
                value={transAmount} 
                onChange={transChange} 
                required
                placeholder="amount"/>
            Expense<input 
                type="radio" 
                name="transType" 
                value="expense" 
                required
                onChange={transChange}/>
            Income<input 
                type="radio" 
                name="transType" 
                value="income" 
                onChange={transChange}/>
            <input 
                type="date" 
                name="transDate" 
                value={transDate} 
                onChange={transChange} />
            <button>Submit</button>
        </form>
    )
}


export default TransactionForm