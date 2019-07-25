import React from 'react'
import TransactionList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'




const Budget = () => {
    const transaction = [
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
        {name:'', amount:0, description:'', date:''},
    ]
    return (
        <div>
            <TransactionForm/>
            <TransactionList/>
        </div>
    )
}

export default Budget