import React from 'react';
import Goal from './Goal.js';


const GoalList = props => {
    const { goalArray } = props

    const mappedGoals = goalArray.map((goal, i) => <Goal key={(goal._id ? goal._id : i)} {...goal} />)

    return (
        <div>
            { mappedGoals} 
        </div>
    )
}


export default GoalList