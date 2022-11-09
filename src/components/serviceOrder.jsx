import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import "../css/serviceOrder.css"

const ServiceOrder = (props) =>{
    
    // demo ไม่ขึ้นนนนนนน

    // const {order} = props
    // const[currentOrder,setCurrentOrder] = useState({id:order.id,name:order.name,price:order.price})
    const[orders,SetOrder] = useState({number:'',service:'',price:'',total:''})

    //get data จาก back
    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
            SetOrder(res.data)
            // setCurrentOrder(res.data)
        })
    })
    return(
    
        <div className="orderBox">
            
            <div className="order-ID">รหัส {orders.number} </div>
                
            <div className="order-gridcolumn">
                <div className="order-detail">{orders.service}</div>
                <div className="order-price">{orders.price}</div>
            </div>

            <div className="order-gridcolumn">
                <div className="order-total">รวมทั้งสิ้น</div>
                <div className="order-totalprice">{orders.total} บาท</div>
            </div>

            {/* <div className="order-ID">รหัส {currentOrder.id} </div>
                
                <div className="order-gridcolumn">
                    <div className="order-detail">{currentOrder.name}</div>
                    <div className="order-price">{currentOrder.price}</div>
                </div>
    
                <div className="order-gridcolumn">
                    <div className="order-total">รวมทั้งสิ้น</div>
                    <div className="order-totalprice">{currentOrder.total} บาท</div>
                </div> */}

        </div>
    )
}

export default ServiceOrder