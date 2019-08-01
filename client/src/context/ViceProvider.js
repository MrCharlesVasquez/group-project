import React, { Component } from 'react'
import axios from 'axios'

const ViceContext = React.createContext()
const userAxios = axios.create()
// * userAxios Interceptor
userAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


class ViceProvider extends Component {
    constructor() {
        super()
        this.state = {
            goalName: "",
            goalDescription: "",
            goalPrice: "",
            goalDate: "",
            goalArray: [],
            mainGoal:{},
            goalTotal: 0,

            transactions: [],
            transName: "",
            transAmount: "",
            transType: "",
            transDate: "",
            total: 0,

<<<<<<< HEAD
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || "",
            authErrMsg: "",
=======
            mathPart: null,
            thermoHeight: null,
>>>>>>> master
        }
    }
    
    // * Axios requests
    getTransactions = () => {
        userAxios.get("/api/transactions")
            .then(res => {
                console.log(res.data)
                this.setState({
                    transactions: res.data
                }, () => this.calculateTotal(),
                )
                // this.calculateTotal()
                
                
            })
            
            .catch(err => console.log(err))
    }

    addNewTransaction = newTrans => {
        
        userAxios.post("/api/transactions", newTrans)
            .then(res => { 
                console.log(res.data)
                this.setState(prevState => ({
                    transactions: [...prevState.transactions, newTrans]
                
                // }, () => {
                //     this.getTransactions()
                //     this.calculateTotal()
                //     console.log ('test')
                }))
                this.getTransactions()
            })
            .catch(err => console.log(err))
    }

    deleteTransaction = transID => {
        userAxios.delete(`/api/transactions/${transID}`)
            .then(res => {
                alert(res.data.msg)
                this.getTransactions()
            }
            )
            .catch(err => console.log(err))
    }

    // updateTransaction = transID => {
    //     userAxios.put(`/transactions/${transID}`)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    // *    uAxios Request for Goals
    getGoals = () => {
        userAxios.get("/api/goals")
            .then(res => {
               const goalArray = res.data.sort((a, b) => (b.goalPrice - a.goalPrice))
               const goalTotal = goalArray.reduce ((sum, x) => {
                   sum += x.goalPrice
                   return sum
                }, 0)
            
                this.setState({
                    goalArray,
                    goalTotal,
                    mainGoal: goalArray[0]

                }, () => this.setThermo())
            })
            .catch(err => console.log(err))
            
    }

    addNewGoal = newGoal => {
        userAxios.post("/api/goals", newGoal)
            .then(res => {
                this.setState(prevState => ({
                    goalArray: [...prevState.goalArray, newGoal]
                }))
            })
            .catch(err => console.log(err))
    }

    deleteGoal = goalID => {
        userAxios.delete(`/api/goals/${goalID}`)
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
        })
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
            goalPrice: "",
            goalDate: "",
            // goalArray: [...prevState.goalArray, newGoal]
        }))
        this.addNewGoal(newGoal)
        this.getGoals()
    }

    // * Home Functions
    setThermo = () => {
        const mathPart = (this.state.total / this.state.goalTotal * 100)
        const thermoHeight = (mathPart <= 100) ? mathPart : 100
        this.setState({
            mathPart,
            thermoHeight
        })
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

    // * Transaction Functions
    calculateTotal = () => {
        let total = this.state.transactions.reduce((savings, transaction) => {
            return transaction.transType === 'income' ? savings + transaction.transAmount : savings - transaction.transAmount
        }, 0)
        this.setState({
            total:total
        }, () => this.getGoals())
    }

    // * User Authentication Functions
    handleAuthErr = errMsg => {
        this.setState({ authErrMsg: errMsg })
    }
    clearAuthErr = () => {
        this.setState({ authErrMsg: "" })
    }

    signup = credentials => {
        userAxios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }
    login = credentials => {
        userAxios.post("/auth/login", credentials)
            .then(res => {
                const { user, token, } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({ user, token })
            })
            .catch(err => this.handleAuthErr(err.response.data.errMsg))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: "",
            authErrMsg: ""
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

                    user: this.state.user,
                    token: this.state.token,
                    authErrMsg: this.state.authErrMsg,

                    thermoHeight: this.state.thermoHeight,
                    mathPart: this.state.mathPart,
                    
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    clearAuthErr: this.clearAuthErr,
                    



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