import React, { useEffect, useRef } from 'react';
import { withVice } from "../../context/ViceProvider.js"
// import Count from "../clockComponents/Count.js"
import Clock from './Clock.js'


const Home = (props) => {
    const { deadline, setTimer, goalTotal, total, getGoals, getTransactions, goalArray, mainGoal, thermoHeight } = props
    
    useEffect(() => {
        getTransactions()
        getGoals()
    }, [getTransactions, getGoals])
    
    useEffect(() => {
        // thermoRef.current.style.height = `${thermoHeight}`
        
        thermoRef.current.style.height = `${thermoHeight}%`
        setTimer()
    }, [thermoHeight, setTimer])
    
    const thermoRef = useRef(total)

    
    const goalLabels = goalArray.map((goal, i) => <p key={(goal._id ? goal._id : i)} style={{ position: "absolute", right: "0", top: `${goal.goalPrice / goalTotal * 100}%`, margin: "0" }}>{goal.goalName} - ${goal.goalPrice}</p>)
    
    return (
        <div>
            <div>
               {!mainGoal ? <h1>"Set up your savings goals in profile!"</h1> : <h1>Goal : {mainGoal.goalName}</h1> }
            </div>
            {deadline ? <div className="App">
                <div className="App-title">Countdown Timer</div>
                <div className="App-date">{deadline}</div>
                <Clock deadline={deadline} />
            </div> : <div></div>    }
            <div>
                <h2>Savings Goal: ${goalTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2
})}</h2>
            </div>
            <div className="outerContainer">
                <div className="home-container">
                    <div className="graphic" style={{ border: " 1px solid black ", height: " 500px", width: "200px", position: "relative" }}>
                        {/* <p style={{ position: "absolute", right: "0", top: `${thermoHeight}%`}}> dummy </p> */}
                        {goalLabels}

                        <div className="outerThermo" style={{ border: " 1px solid black ", height: " 500px", width: "100px" }}>
                            <div className="innerThermo" ref={thermoRef} style={{ backgroundColor: " green " }}>

                            </div>
                        </div>
                    </div>

                </div>
                <h1>Total Savings: ${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h1>
            </div>

        </div>
    )
}

export default withVice(Home) 