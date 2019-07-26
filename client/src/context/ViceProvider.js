import React, { Component } from 'react'
import axios from 'axios'

const ViceContext = React.createContext()

class ViceProvider extends Component {
    constructor(){
        super()
        this.state = {
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


    render(){
        return(
            <ViceContext.Provider
                value ={{
                    getTransactions: this.getTransactions,
                    transactions: this.state.transactions
                }}
            >
            { this.props.children }
            </ViceContext.Provider>
        )
    }
}

export default ViceProvider

export const withVice = C => props => (
    <ViceContext.Consumer>
        { value => <C {...value} {...props}/> }
    </ViceContext.Consumer>
)