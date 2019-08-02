import React from 'react';


const Goal = props => {
    const { goalDate, goalName, goalPrice, goalDescription, deleteGoal, _id } = props
    // console.log(goalDate)
    return (

        <div className="goal-divContainer">
            <div className="goal-div">
                <p className="goalName" >{goalName}</p>
                <h2 className="goalPrice" >${goalPrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h2>
                <h1 className="goalDescription" >{goalDescription}</h1>
                {/* <p className="goalDate" >{goalDate}</p> */}
                <button  className="goalDelButton" onClick={() => deleteGoal(_id)}>Delete</button>
            </div>
        </div>
    )
}

export default Goal