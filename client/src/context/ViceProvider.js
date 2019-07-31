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

            transactions: [],
            transName: "",
            transAmount: "",
            transType: "",
            transDate: "",
            total: 0,

            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
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
                this.calculateTotal()
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
               console.log(goalArray[0])
                this.setState({
                    goalArray,
                    mainGoal: goalArray[0]
                })
            })
            .catch(err => console.log(err))
    }

    addNewGoal = newGoal => {
        axios.post("/goals", newGoal)
            .then(res => {
                this.setState(prevState => ({
                    goalArray: [prevState.goalArray, newGoal]
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
            goalArray: [...prevState.goalArray, newGoal]
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
            transactions: [prevState.transactions, newTrans]
        }))
        console.log(newTrans)
        this.addNewTransaction(newTrans)
        this.getTransactions()
    }

    // * Transaction Functions
    calculateTotal = () => {
        console.log(this.state.transactions)
        let total = this.state.transactions.reduce((savings, transaction) => {
            return transaction.transType === 'income' ? savings + transaction.transAmount : savings - transaction.transAmount
        }, 0)
        this.setState({
            total:total
        }, () => console.log(total))
    }

    // * User Authentication Functions
    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => console.log(err))
    }
    login = credentials => {
        axios.post("/auth/login", credentials)
            .then(res => {
                const { user, token, } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: ""
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

                    user: this.state.user,
                    token: this.state.token,

                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,



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