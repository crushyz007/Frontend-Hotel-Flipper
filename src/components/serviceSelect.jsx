import React from "react"
import "../css/serviceSelect.css"

const serviceSelect =()=>{
    return(
        <div>
        <div className="detailBoxSelect">
            <div className="service-TopicSelect">บริการที่ต้องการ</div>
            <div className="service-TopicSelect">วันที่ที่ต้องการรับบริการ</div>
            <div className="service-TopicSelect">ระยะเวลา</div>


            <div className="AddService-button">
                <div className="AddService-font">เพิ่มเข้ารายการ</div> 
            </div>
        </div>
        
        </div>
    )
}

export default serviceSelect