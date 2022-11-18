import React from "react"
import '../css/paymentModal.css'
import receipt from '../pic/receipt.png'
const PaymentModal=({closeModal})=>{
    return(
        <div className="overlay">
        <div className="payment-ModalBox">
            <button className="payment-ModalButton" onClick={()=>closeModal(false)}>X</button>
            {/* <i class="fi fi-rs-receipt"></i> */}
            <img src={receipt} width="100" height="100" className="newReceipt"></img>
            <div className="payment-ModalFont payment-ModalFontPos">ทำรายการสำเร็จ</div>
            <div className="payment-ModalFont payment-ModalFont2">order no. 12345678</div>
        </div>
        </div>
    )
}
export default PaymentModal