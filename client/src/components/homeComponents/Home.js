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

    // const currentGoal = goalArray.indexof(goal)
    const goalLabels = goalArray.map((goal, i, entireArray) => {
        const currentGoal = entireArray.indexOf(goal)
        let sum = 0
        for (let i = currentGoal + 1; i < entireArray.length; i++) {
            sum += (entireArray[i].goalPrice)
        }
        return <p className="goal-tag" key={(goal._id ? goal._id : i)} style={{ position: "absolute", right: "0", top: `${(goal.goalPrice + sum) / goalTotal * 100}%`, margin: "0" }}>{goal.goalName} - ${goal.goalPrice}</p>
    })

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
                        <h2 className="Savings-Goal" >Savings Goal: ${goalTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
                    </div>
                    <div className="Home-Container">


                      
                           
                           
                           
                            <div className="graphic" style={{ height: " 450px", width: "200px", position:"relative" }}>
                               
                                {goalLabels}

`                                    <div className="allThermo">

                                        <div className="outerThermo" style={{ height: " 450px", width: "200px" , overflow:"auto"}}>
                                            <div className="innerThermo" ref={thermoRef} > </div>

                                        </div>

                                    </div>


                            </div>
                        </div>
                    </div>

                </div>
                <h1>Total Savings: ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
            </div>
       

    )
}

export default withVice(Home) 
