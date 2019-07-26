import React, { Component } from 'react'
import axios from 'axios'

const ViceContext = React.createContext()

class ViceProvider extends Component {
    constructor() {
        super()
        this.state = {
            goalName: "",
            goalDescription: "",
            goalPrice: 0,
            goalArray: [],

            transactions: [],
            transName: "",
            transAmount: "",
            transType: "",
            transDate: "",
            transArray: [],
        }
    }

// * Axios requests
    getTransactions = () => {
        axios.get("/transactions")
            .then(res => {
                console.log(res)
                this.setState({
                    transactions: res.data
                })
            })
            .catch(err => console.log(err))
    }

    addNewTransaction = newTrans => {
        axios.post("/transactions", newTrans)
            .then(res => {
                this.setState(prevState => ({
                    transactions: [prevState.transactions, newTrans]
                }))
            })
            .catch(err => console.log(err))
    }   


// *  Goal Form handleChange & handleSubmit ////////////
    goalChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    goalSubmit = e => {
        e.preventDefault()
        const newGoal = {
            goalName: this.state.goalName,
            goalDescription: this.state.goalDescription,
            goalPrice: this.state.goalPrice
        }
        this.setState(prevState => ({
            goalName: "",
            goalDescription: "",
            goalPrice: 0,
            goalArray: [...prevState.goalArray, newGoal ]

        }))
    }
    
// * Transaction Form handleChange and handleSubmit
    transChange = (e) => {
        const { name, value } = e.target
// ? are radio buttons special like checkboxes? or do they just use "value" like regular inputs?
        this.setState({
            [name]: value
        })
    }

    transSubmit = (e) => {
        e.preventDefault()
        const newTrans = {
            transName: this.state.transName,
            transAmount: this.state.transAmount,
            transType: this.state.transType,
            transDate: this.state.transDate
        }
        
        this.setState(prevState => ({
            transName: "",
            transAmount: "",
            transType: "",
            transDate: "",
            transactions: [prevState.transArray, newTrans]
        }))
        console.log(newTrans)
        this.addNewTransaction(newTrans)
    }

    render() {
        return (
            <ViceContext.Provider
                value={{
                    goalName: this.state.goalName,
                    goalDescription: this.state.goalDescription,
                    goalPrice: this.state.goalPrice,
                    goalChange: this.goalChange,
                    goalSubmit: this.goalSubmit,
                    goalArray: this.state.goalArray,

                    transName: this.state.transName,
                    transAmount: this.state.transAmount,
                    transType: this.state.transType,
                    transDate: this.state.transDate,

                    transactions: this.state.transactions,
                    
                    getTransactions: this.getTransactions,
                    transChange: this.transChange,
                    transSubmit: this.transSubmit,



                }}
            >
                {this.props.children}
            </ViceContext.Provider>
        )
    }
}

export default ViceProvider

export const withVice = C => props => (
    <ViceContext.Consumer>
        {value => <C {...value} {...props} />}
    </ViceContext.Consumer>
)