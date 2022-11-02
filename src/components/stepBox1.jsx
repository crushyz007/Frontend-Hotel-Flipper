import React from "react"
import "../css/stepBox.css"

const StepBox1 =()=>{
    return(
        <div className="stepBox">
                
            <div>
            <i class="fi fi-rs-circle">
                
                <i class="fi fi-rr-list"></i>
                <div className="linestepBox"></div>
            </i>
            <p className="stepBox-font stepBox-font1">รายการ</p>
            </div>

            <div>
            <i class="fi fi-rs-circle">
                <i class="fi fi-br-shopping-cart-check"></i>            
                <div className="linestepBox"></div>
            </i>
            <p className="stepBox-font stepBox-font2">บริการที่เลือก</p>
            </div>

            <div>
            <i class="fi fi-rs-circle">
                <i class="fi fi-bs-menu-dots"></i>
                <div className="linestepBox"></div>
            </i>
            <p className="stepBox-font stepBox-font3">เพิ่มเติม</p>
            </div>

            <div>
            <i class="fi fi-rs-circle">
                <i class="fi fi-rs-money bill wave"></i>            
            </i>
            <p className="stepBox-font stepBox-font4">ชำระเงิน</p>
            </div>
        </div>
    )
}
export default StepBox1