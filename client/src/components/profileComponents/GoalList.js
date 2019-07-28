import React from 'react';
import Goal from './Goal.js';


const GoalList = props => {
    const { goals } = props
    console.log(props)

    const mappedGoals = goals.map(goal => <Goal key={goal._id} {...goal} />)

    return (
        <div>
            {mappedGoals}

        </div>
    )
}


export default GoalList