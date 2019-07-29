import React from 'react';

const Goal = props => {
    const { goalName, goalPrice, goalDescription, deleteGoal, _id } = props

    return(
        <div className="goal-div" style={{border: "1px solid red"}}>
            <h1>{goalName}</h1>
            <h2>{goalPrice}</h2>
            <p>{goalDescription}</p>
            <button onClick={() => deleteGoal(_id)}>Delete</button>
        </div>
    )
}

export default Goal