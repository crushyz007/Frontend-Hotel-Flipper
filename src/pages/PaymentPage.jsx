import React from "react"
import "../css/PaymentPage.css"
import ServiceOrder from "../components/serviceOrder"
import ServicePayment from "../components/servicePayment"
import StepBox from '../components/stepBox'
import demoOrder from'./demoOrder'
import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios'
import serviceList from "./Service.json"

const PaymentPage = () =>{
    // console.log(demoOrder)
    //ลอง demo order แล้วไม่ขึ้นอ่า T-T

    const cartlist = serviceList.maintainList
    
    const initialValue = 0
    const totalPrice = cartlist.reduce((total, current) => total += current.price, initialValue)
    const orderService = cartlist.map(item => {
        return (item.service+'\n')
    })
    const orderPrice = cartlist.map(item => {
        return (item.price +'\n')
    })
    


    return(
        <div>
            
            <div className="PaymentPage-container">
                <StepBox />
                {/* <ServiceOrder /> */}
                {/* { demoOrder.map((item) => (
                <div ><ServiceOrder orders={item}/></div>
                ))} */}
                <div className="orderBox">
                        <div className="order-ID">รหัส </div>
                        <div className="order-gridcolumn">
                            <div className="order-detail">{orderService}</div>
                            <div className="order-price">{orderPrice}</div>
                        </div>
                        <div className="order-gridcolumn">
                            <div className="order-total">รวมทั้งสิ้น</div>
                            <div className="order-totalprice">{totalPrice}&emsp;บาท</div>
                        </div>
                </div>
                <ServicePayment totalPrice={totalPrice}/>
            </div>
        </div>
    )
}

export default PaymentPage