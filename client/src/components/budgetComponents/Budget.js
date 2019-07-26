import React from 'react'
import TransactionList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'




const Budget = () => {
    
    const transaction = [
        {name:'rent', amount:1000, description:'', date:'1'},
        {name:'car loan', amount:160, description:'', date:'15'},
        {name:'phone', amount:80, description:'', date:'7'},
        {name:'gas', amount:50, description:'', date:'17'},
        {name:'electric', amount:90, description:'', date:'12'},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
    ]

    const mappedBudget = transaction.map((bills) => 
                <Transaction  {...bills}
                                 />)
    return (
        <div>
            <TransactionForm/>
            <TransactionList/>
        </div>
    )
}

export default Budget