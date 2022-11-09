import React from "react"
import '../css/feedbackBox.css'

const FeedbackBox =() =>{
    return(
    <div>
        <div className="feedbackBox-Box">
            <div className="feedbackBox-grid feedbackBox-font">
                <div>รูป</div>
                <div>Name
                <div className="feedbackBox-commentPos">Rating</div>
                </div>
                <div>Rate</div>
            </div>
        </div>
    </div>
    )
}
export default FeedbackBox