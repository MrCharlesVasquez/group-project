import React from 'react';


const Goal = props => {
    const { goalDate, goalName, goalPrice, goalDescription, deleteGoal, _id } = props
    // console.log(goalDate)
    return (

        <div className="goal-divContainer">
            <div className="goal-div">
                <h1 className="goalName" >{goalName}</h1>
                <h2 className="goalPrice" >${goalPrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}</h2>
                <p className="goalDescription" >{goalDescription}</p>
                <p className="goalDate" >{goalDate}</p>
               <div className="delBtnContainer">
                <button  className="goalDelButton" onClick={() => deleteGoal(_id)}>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default Goal