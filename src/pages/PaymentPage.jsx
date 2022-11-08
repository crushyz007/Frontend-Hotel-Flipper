import React from "react"
import "../css/PaymentPage.css"
import ServiceOrder from "../components/serviceOrder"
import StepBox from '../components/stepBox'
const PaymentPage = () =>{
    return(
        <div>
            
            <div className="PaymentPage-container">
                <StepBox />
                <ServiceOrder />
            </div>
        </div>
    )
}

export default PaymentPage