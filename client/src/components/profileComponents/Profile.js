import React/*, { useEffect } */ from 'react';
import GoalList from './Goal.js'
import GoalForm from './GoalForm.js';
import { withVice } from '../../context/ViceProvider.js'




const Profile = (props) => {

    // useEffect(() => {
    //     // Component Did Mount
    //     props.getGoals()
    // }, [props.getGoals])

    console.log(props.goals)

    return (
        <div>
            <GoalForm
                {...props} />
            <GoalList goals={props.goals} />

        </div>
    )
}



export default withVice(Profile)