import React from 'react'

const TransactionForm = props => {
    const { transName, transAmount, transDate, transSubmit, transChange, } = props

    return (

        <div className="trans-formContainer">
        <h1 className="vice">VICE</h1>
            <form onSubmit={transSubmit} className="trans-form">
                <input
                    type="text"
                    name="transName"
                    value={transName}
                    onChange={transChange}
                    required
                    placeholder="memo" />
                <input
                    type="number"
                    name="transAmount"
                    value={transAmount}
                    onChange={transChange}
                    required
                    placeholder="amount" />

                <label className="container">
                    Expense<input className="radio"
                        type="radio"
                        name="transType"
                        value="expense"
                        onChange={transChange}
                        required />
                    <span className="checkmark"></span>
                </label>

                <label className="container">
                    Income<input className="radio"
                        type="radio"
                        name="transType"
                        value="income"
                        onChange={transChange} />
                    <span className="checkmark"></span>
                </label>
                <input
                    type="date"
                    name="transDate"
                    value={transDate}
                    onChange={transChange} />
                <button className="transSubmitButton">Submit</button>
            </form>
        </div>
    )
}


export default TransactionForm