import React from 'react';
import Goal from './Goal.js';


const GoalList = props => {
    const { goalArray, deleteGoal } = props
    // console.log(props.mainGoal)

    const mappedGoals = goalArray.map((goal, i) => <Goal key={(goal._id ? goal._id : i)} {...goal} deleteGoal={deleteGoal}/>)

    return (
        <div>
            { mappedGoals} 
        </div>
    )
}


export default GoalList