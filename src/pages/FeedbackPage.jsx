import React from "react"
import FeedbackBox from "../components/feedbackBox"
import '../css/FeedbackPage.css'
const FeedbackPage =()=>{
    return(
        <div className="FeedbackPage-bg">
            {/* <div className="test3"> */}
            <div className="FeedbackPage-Circle1"></div>
            {/* <div className="FeedbackPage-Circle2"></div>  */}
            {/* </div> */}
        <div className="FeedbackPage-container">
            <div className="FeedbackPage-fontTopic">ทำไมต้อง</div>
            <div className="FeedbackPage-fontTopic">Hotel Flipper</div>
            <FeedbackBox />
        </div>
        </div>
    )
}
export default FeedbackPage