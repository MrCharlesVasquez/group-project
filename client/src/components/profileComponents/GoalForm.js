import React from 'react';




const GoalForm = (props) => {
    
const { goalChange, goalDescription, goalName, goalPrice, goalSubmit } = props
    
        return (
            <div id="goalOuterContainer" >

                <h1> Goal Form </h1>

                <form onSubmit={goalSubmit}>
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

                    <button className="goalButton">Submit</button>

                </form>


            </div>
        )
}

export default GoalForm
 