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
            goalDate: "",
            goalArray: [],
            mainGoal:{},
            goalTotal:0,

            transactions: [],
            transName: "",
            transAmount: "",
            transType: "",
            transDate: "",
            total: 0,
        }
    }
    
    // * Axios requests
    getTransactions = () => {
        axios.get("/transactions")
            .then(res => {
                this.setState({
                    transactions: res.data
                })
                this.calculateTotal()
            })
            
            .catch(err => console.log(err))
    }

    addNewTransaction = newTrans => {
        
        axios.post("/transactions", newTrans)
            .then(res => { 
                console.log(res.data)
                this.setState(prevState => ({
                    transactions: [...prevState.transactions, newTrans]
                // }, () => {
                //     this.getTransactions()
                //     this.calculateTotal()
                //     console.log ('test')
                }))
            })
            .catch(err => console.log(err))
    }

    deleteTransaction = transID => {
        axios.delete(`/transactions/${transID}`)
            .then(res => {
                alert(res.data.msg)
                this.getTransactions()
            }
            )
            .catch(err => console.log(err))
    }

    // updateTransaction = transID => {
    //     axios.put(`/transactions/${transID}`)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    // *    Axios Request for Goals
    getGoals = () => {
        axios.get("/goals")
            .then(res => {
               const goalArray = res.data.sort((a, b) => (b.goalPrice - a.goalPrice))
               const goalTotal = goalArray.reduce ((sum, x) => {
                   sum += x.goalPrice
                   return sum
                }, 0)
            
                this.setState({
                    goalArray,
                    goalTotal
                })
            })
            .catch(err => console.log(err))
    }

    addNewGoal = newGoal => {
        axios.post("/goals", newGoal)
            .then(res => {
                this.setState(prevState => ({
                    goalArray: [...prevState.goalArray, newGoal]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteGoal = goalID => {
        axios.delete(`/goals/${goalID}`)
            .then(res => {
                alert(res.data.msg)
                this.getGoals()
            }
        )
            .catch(err => console.log(err))
    }


    // *  Goal Form handleChange & handleSubmit ////////////
    goalChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, () => console.log(name))
    }

    goalSubmit = e => {
        e.preventDefault()
        const newGoal = {
            goalName: this.state.goalName,
            goalDescription: this.state.goalDescription,
            goalPrice: this.state.goalPrice,
            goalDate: this.state.goalDate
        }
        this.setState(prevState => ({
            goalName: "",
            goalDescription: "",
            goalPrice: 0,
            goalDate: "",
            // goalArray: [...prevState.goalArray, newGoal]
        }))
        this.addNewGoal(newGoal)
        this.getGoals()
    }
    
    

    // getMainGoal = e => {
    //     const { goalArray } = this.state
        
    //     goalArray.sort((a, b) => (b.goalPrice - a.goalPrice))
    //     console.log(goalArray[0])

    // //    this.setState({mainGoal: goalArray[0]})
   
   
    // }


    

    // * Transaction Form handleChange and handleSubmit
    transChange = (e) => {
        const { name, value } = e.target
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
            // transactions: [...prevState.transactions, newTrans]
            
        }))
        
        this.addNewTransaction(newTrans)
        
    }

    //*Transaction Functions
    calculateTotal = () => {
        let total = this.state.transactions.reduce((savings, transaction) => {
            return transaction.transType === 'income' ? savings + transaction.transAmount : savings - transaction.transAmount
        }, 0)
        this.setState({
            total:total
        })
    }
    render() {
        return (
            <ViceContext.Provider
                value={{
                    goalName: this.state.goalName,
                    goalDescription: this.state.goalDescription,
                    goalPrice: this.state.goalPrice,
                    goalDate: this.goalDate,
                    goalArray: this.state.goalArray,
                    mainGoal: this.state.mainGoal,
                    goalTotal: this.state.goalTotal,

                    getGoals: this.getGoals,
                    goalChange: this.goalChange,
                    goalSubmit: this.goalSubmit,
                    deleteGoal: this.deleteGoal,
                    getMainGoal: this.getMainGoal,

                    transactions: this.state.transactions,
                    transName: this.state.transName,
                    transAmount: this.state.transAmount,
                    transType: this.state.transType,
                    transDate: this.state.transDate,
                    total: this.state.total,
                

                    getTransactions: this.getTransactions,
                    transChange: this.transChange,
                    transSubmit: this.transSubmit,
                    deleteTransaction: this.deleteTransaction,
                    calculateTotal:this.calculateTotal,





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