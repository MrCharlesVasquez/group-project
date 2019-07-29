import React, { useEffect, useRef } from 'react';
import { withVice } from "../../context/ViceProvider.js"



const Home = (props) => {

    const {total, getTransactions} = props


    useEffect(() => {
        getTransactions()
        thermoRef.current.style.height = `${total}%`
    },[getTransactions])

    console.log(total)

    const thermoRef = useRef(total)
    return (
        <div>
            <div className="outerThermo" style={{ border: " 1px solid black ", height: " 500px", width: "100px"}}>
                <div className="innerThermo" ref={thermoRef} style={{ backgroundColor: " green "}}>

                </div>
            </div>
        </div>
    )
}

export default withVice(Home) 
