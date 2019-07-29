import React, { useEffect } from 'react';
import GoalList from './GoalList.js'
import GoalForm from './GoalForm.js';
import { withVice } from '../../context/ViceProvider.js'




const Profile = (props) => {
    const { getGoals } = props

    useEffect(() => {
        // Component Did Mount
        getGoals()
    }, [getGoals])


    return (
        <div>
            <GoalForm
                {...props} />
            <GoalList {...props} />

        </div>
    )
}



export default withVice(Profile)