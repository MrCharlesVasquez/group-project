import React from 'react';
import Image from '../../images/REWARD1.png'




const GoalForm = (props) => {

    const {  goalSubmit, goalName, goalDescription, goalPrice, goalDate, goalChange,   } = props

    return (
        <div className="goal-formContainer" >
            
            <div className="reward" >
                <img src={Image} className="rewardImgTag" alt="REWARD Logo"></img>
            </div>
            {/* <h1 className="GOAL"> REWARDS </h1> */}
            

            <form onSubmit={goalSubmit} className="goal-form">
                <input
                    type="text"
                    name="goalName"
                    value={goalName}
                    onChange={goalChange}
                    placeholder="Name your Goal!"
                />
                <input
                    type="text"
                    name="goalDescription"
                    value={goalDescription}
                    onChange={goalChange}
                    placeholder="Goal Description"
                />
                <input
                    type="number"
                    name="goalPrice"
                    value={goalPrice}
                    onChange={goalChange}
                    placeholder="Goal Price"
                />
                <input
                    type="date"
                    name="goalDate"
                    value={goalDate}
                    onChange={goalChange} />

                <button className="goalSubmitButton">Submit</button>

            </form>


        </div>
    )
}

export default GoalForm
