import React, { useEffect } from 'react'
import TransactionsList from './TransactionsList.js'
import TransactionForm from './TransactionForm.js'
import { withVice } from '../../context/ViceProvider.js'





const Budget = props => {

    useEffect(() => {
        // Component Did Mount
        props.getTransactions()
    }, [props.getTransactions] )
    
//     transChange = (e) => {
//         const { name, value } = e.target
// // ? are radio buttons special like checkboxes? or do they just use "value" like regular inputs?
//         this.setState({
//             [name]: value
//         })
//     }

//     transSubmit = (e) => {
//         e.preventDefault()
//         const newTrans = {
//             transName: this.state.transName,
//             transAmount: this.state.transAmount,
//             transType: this.state.transType,
//             transDate: this.state.transDate
//         }
//         this.setState(prevState => ({
//             transName: "",
//             transAmount: "",
//             transType: "",
//             transDate: "",
//             transArray: [prevState.transArray, newTrans]
//         }))
//     }

    
    
    console.log(props)
    return (
            <div>
                {/* <TransactionForm context={props.transactions}/> */}
                <TransactionsList transactions={props.transactions}/>
                
            </div>
        )
}

export default withVice(Budget)