import React, { useEffect, useRef } from 'react';
import { withVice } from "../../context/ViceProvider.js"



const Home = (props) => {

    const { goalTotal, total, getGoals, getTransactions, goalArray, mainGoal } = props


    useEffect(() => {
        getTransactions()
        
    }, [getTransactions])

    useEffect(() => {
        getGoals()
        thermoRef.current.style.height = `${thermoHeight}%`
    }, [getGoals])

    const thermoRef = useRef(total)
    const mathPart = (total / goalTotal.goalPrice * 100)
    const thermoHeight = (mathPart <= 100) ? mathPart : 100

    const goalLabels = goalArray.map((goal, i) => <p key={(goal._id ? goal._id : i)} style={{ position: "absolute", right: "0", top: `${goal.goalPrice / goalTotal * 100}%`, margin: "0" }}>{goal.goalName} - ${goal.goalPrice}</p>)
    return (
        <div>
            <div className="graphic" style={{ border: " 1px solid black ", height: " 500px", width: "200px", position: "relative" }}>
                {/* <p style={{ position: "absolute", right: "0", top: `${thermoHeight}%`}}> dummy </p> */}
                {goalLabels}
                
                <div className="outerThermo" style={{ border: " 1px solid black ", height: " 500px", width: "100px" }}>
                    <div className="innerThermo" ref={thermoRef} style={{ backgroundColor: " green " }}>

                    </div>
                </div>
            </div>
            <h1>Total Savings: {total}</h1>
        </div>
    )
}

export default withVice(Home) 
