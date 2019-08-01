import React from 'react';

const Goal = props => {
    const { goalDate, goalName, goalPrice, goalDescription, deleteGoal, _id } = props
    // console.log(goalDate)
    return(
        <div className="goal-div" style={{border: "1px solid red"}}>
            <h1>{goalName}</h1>
            <h2>{goalPrice.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:2})}</h2>
            <p>{goalDescription}</p>
            <p>{goalDate}</p>
            <button onClick={() => deleteGoal(_id)}>Delete</button>
        </div>
    )
}

export default Goal