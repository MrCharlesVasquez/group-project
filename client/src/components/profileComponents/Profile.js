import React from 'react';
import GoalForm from './GoalForm.js';
import { withVice } from '../../context/ViceProvider.js'




const Profile = (props) => {



    return (
        <div>
            <GoalForm
                {...props} />
            
        </div>
    )
}



export default withVice(Profile)