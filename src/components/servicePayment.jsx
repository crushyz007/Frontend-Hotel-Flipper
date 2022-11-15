import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import '../css/servicePayment.css'
import mastercard from '../pic/visa.png'
// import promptpay from '../pic/promptpay.png'
import pp from '../pic/pp.jpg'
import pp2 from '../pic/pp2.png'

const ServicePayment = () =>{

    //ยังไมไ่ด้กำหนด validate mastercard
    const[state,SetState]=useState('')
    const[isSubmit,setIsSubmit] = useState(false)
    const[details,setDetails] = useState({cardnum:"",name:"",expireddate:"",securecode:""})
    const handleChange =e=>{    
        SetState(e.target.value)
    }
    
    const handleChangePayment = (e) =>{
        const{name,value} = e.target
        setDetails({...details,[name]:value})
    }

    //ส่งให้backตรงนี้
    const submitHandler=e=>{
        e.preventDefault();
        setIsSubmit(true)
    }

    useEffect(()=>{
        if(isSubmit===true){
            console.log(state)
            console.log(details)
        }
    })

    return(
        <div className="paymentBox">
            <div className="payment-Topic">ข้อมูลการชำระเงิน</div>
            
            
            <div className="payment-font">    
                <input type="radio" className="payment-radiopost" name="state" value="1" onChange={handleChange}></input>
                ชำระด้วย qr-code

                {state==='1' && (
                <div className="payment-radiopost">
                    <div className="payment-promptpay">
                    {/* /* <img src={promptpay} alt="Logo" className="" ></img>  */}
                    <div className="payment-promptpayHeader">
                    <img src={pp} alt="Logo" width="150" height="60" className="payment-proptpaylogoPos" ></img>
                    <img src={pp2} alt="Logo" width="90" height="30" className="payment-proptpaylogoPos2" ></img>

                    </div>
                    </div>
                
                </div>)}

                {/* <div>qr-code</div> */}
            </div>

            <div className="payment-font">
                <input type="radio" className="payment-radiopost" name="state" value="2" onChange={handleChange}></input>
                ชำระด้วยบัตรเครดิต
                {state==='2' && (
                
                <div className="payment-creditcardBox">
                    <img src={mastercard} alt="Logo" width="280" height="50" className="mastercard" ></img>
                    <div className="payment-pos">Card Number</div>
                    <input type="text" name="cardnum" value={details.cardnum} onChange={handleChangePayment} className="payment-input" placeholder="1234 5678 9012 3456"></input>
                    <div className="payment-pos">Name on card</div>
                    <input type="text" name="name" value={details.name} onChange={handleChangePayment}className="payment-input" placeholder="Ex. Jesse Pinkman"></input>
                    <div className="payment-grid">
                        <div>Expiry date
                        <input type="text" name="expireddate" value={details.expireddate} onChange={handleChangePayment} className="payment-input2" placeholder="01/19"></input>
                        </div>
                        <div>Security code
                        <input type="text" name="securecode" value={details.securecode} onChange={handleChangePayment}className="payment-input2" placeholder="***"></input>
                        </div>
                    </div>
                </div>
                )}
            </div>
            <button type="submit" className="payment-button" onClick={submitHandler}>เสร็จสิ้น</button>
        
        
            
        

        </div>
        
    )
}
export default ServicePayment