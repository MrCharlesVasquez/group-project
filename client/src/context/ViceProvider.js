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
            transactions: []
        }
    }

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


    /////////  Goal Form handleChange & handleSubmit ////////////
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

                    transactions: this.state.transactions,
                    
                    getTransactions: this.getTransactions,


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