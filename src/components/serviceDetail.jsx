import React from "react"
import "../css/serviceDetail.css"

const serviceDetail =()=>{

    return(
            <div className="detailBox">
                <div className="service-name">ชื่อบริการ</div>

                <div className="service-pic"><img width="970" height="400" src="" alt=""/></div>

                <div className="service-Topic">ขอบเขตการทำงาน</div>
                <div className="service-scope"><i class="fi fi-ss-bulb"></i>ขอบเขตการทำงาน 1</div>

                <div className="service-Topic">เงื่อนไขบริการ</div>
                <div className="service-scope"><i class="fi fi-sr-exclamation"></i>เงื่อนไขบริการ 1</div>

                <div className="service-Topic">รายการบริการ</div>
                <div className="service-scope"><i class="fi fi-ss-circle"></i>รายการบริการที่ 1</div>
            
            </div> 
    )
}

export default serviceDetail
