import React, { useEffect, useRef } from 'react';
import { withVice } from "../../context/ViceProvider.js"
import Clock from './Clock.js'


const Home = (props) => {
    const { deadline, setTimer, goalTotal, total, getGoals, getTransactions, goalArray, mainGoal, thermoHeight } = props
    
    useEffect(() => {
        getTransactions()
        getGoals()
    }, [getTransactions, getGoals])
    
    useEffect(() => {
       
        
        thermoRef.current.style.height = `${thermoHeight}%`
        setTimer()
    }, [thermoHeight, setTimer])
    
    const thermoRef = useRef(total)

    
    const goalLabels = goalArray.map((goal, i) => <p className="goal-tag" key={(goal._id ? goal._id : i)} style={{ position: "absolute", right: "0", top: `${goal.goalPrice / goalTotal * 100}%`, margin: "0" }}>{goal.goalName} - ${goal.goalPrice}</p>)
    
    return (
        <div>

        <div className="allOfIt">
            <div className="outer-Container">
                <div className="mainGoalDiv">
                    {!mainGoal ? <div className="mainGoal" > "Set up your savings goals in profile!"</div> : <div className="mainGoal" > Goal : {mainGoal.goalName}</div>}
                </div>
                <div className="App">
                    <div className="App-title">Countdown Timer</div>
                    <div className="App-date">{deadline}</div>
                    <Clock deadline={deadline} />
                </div>
                <div className="saveDIV">
                <h2>Savings Goal: ${goalTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2>
                </div>
                <div className="outerContainer">
                    <div className="home-container">
                        <div className="graphic" style={{ height: " 450px", width: "200px", position: "relative" }}>
                            {goalLabels}
                            <div className="allThermo"></div>
                            <div className="outerThermo" style={{ height: " 450px", width: "200px" }}>
                                <div className="innerThermo" ref={thermoRef} ></div>
                                </div>
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
