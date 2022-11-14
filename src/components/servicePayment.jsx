import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import '../css/servicePayment.css'
const ServicePayment = () =>{

    const[state,SetState]=useState('')

    const handleChange =e=>{    
        SetState(e.target.value)
    }
    useEffect(()=>{
        if(state===1){
            console.log("hello")
        }
    })

    return(
        <div className="paymentBox">
            <div className="payment-Topic">ข้อมูลการชำระเงิน</div>
            
            <div className="payment-column">
                <input type="radio" className="payment-radiopost" name="select" value="1" onClick={handleChange}></input>
                <div>ชำระด้วย qr-code</div>
                qr-code
            </div>

            <div className="payment-column">
                <input type="radio" className="payment-radiopost" value="2" onClick={handleChange}></input>
                <div>ชำระด้วยบัตรเครดิต</div>
                บัตรเครดิต
            </div>
        </div>
    )
}
export default ServicePayment