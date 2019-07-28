import React from 'react';

const Goal = props => {
    const { goalName, goalPrice, goalDescription } = props
    
    return(
        <div className="goal-div" style={{border: "1px solid red"}}>
            <h1>{goalName}</h1>
            <h2>{goalPrice}</h2>
            <p>{goalDescription}</p>
        </div>
    )
}

export default Goal