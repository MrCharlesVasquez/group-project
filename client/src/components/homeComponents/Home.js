import React, { useEffect, useRef } from 'react';
import { withVice } from "../../context/ViceProvider.js"



const Home = (props) => {

    const { total, getGoals, getTransactions, goalArray, mainGoal } = props


    useEffect(() => {
        getTransactions()
        thermoRef.current.style.height = `${thermoHeight}%`
    }, [getTransactions])

    const thermoRef = useRef(total)
    console.log(mainGoal)
    const thermoHeight = ((total / mainGoal.goalPrice * 100) <= 100 ) ? thermoHeight: 100
    
    const goalLabels = goalArray.map((goal, i) => <p key={(goal._id ? goal._id : i)} style={{ position: "absolute", right: "0", top: `${goal.goalPrice / mainGoal.goalPrice * 100}%`, margin: "0"}}>{goal.goalName} - ${goal.goalPrice}</p>)
    return (
        <div>
            <div className="graphic" style={{border: " 1px solid black ", height: " 500px", width: "200px", position: "relative"}}>
               {/* <p style={{ position: "absolute", right: "0", top: `${thermoHeight}%`}}> dummy </p> */}
               { goalLabels }
               
                <div className="outerThermo" style={{ border: " 1px solid black ", height: " 500px", width: "100px" }}>
                    <div className="innerThermo" ref={thermoRef} style={{ backgroundColor: " green " }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withVice(Home) 
