import React from "react"
import "../css/PaymentPage.css"
import ServiceOrder from "../components/serviceOrder"
import StepBox from '../components/stepBox'
import demoOrder from'./demoOrder'
const PaymentPage = () =>{
    console.log(demoOrder)
    //ลอง demo ไม่ขึ้นอ่า T-T

    return(
        <div>
            
            <div className="PaymentPage-container">
                <StepBox />
                {/* <ServiceOrder /> */}
                { demoOrder.map((item) => (
                <div ><ServiceOrder orders={item}/></div>
                ))}
            </div>
        </div>
    )
}

export default PaymentPage