import React from "react";
import "../css/DetailPage.css"
import StepBox from "../components/stepBox"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
const DetailPage=()=>{
    return(
        <div >
        <div className="DetailPage-container">
            ทำไมมันไม่ตรงกลางวะฟว
            <ServiceDetail />
            <ServiceSelect />
        </div>
        </div>
    )

}
export default DetailPage