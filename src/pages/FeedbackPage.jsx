import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import FeedbackBox from "../components/feedbackBox"
import '../css/FeedbackPage.css'
const FeedbackPage =()=>{
    const[feedback,setFeedback] = useState('')
    const[score,setScore] = useState('')
    const[isSubmit,setIsSubmit] = useState(false)
    
    //maxminตัวอักษร
    //see all
    const handleChange =e=>{
        setFeedback(e.target.value)
    }
    const handleScore=e=>{
        setScore(e.target.value)
    }

    //ส่งให้backตรงนี้
    const submitHandler=e=>{
        e.preventDefault();
        setIsSubmit(true)
    }

    useEffect(()=>{
        if (isSubmit===true){
            console.log(feedback)
            console.log(score)
        }
    })

    return(
        <div className="FeedbackPage-bg">
            {/* <div className="test3"> */}
            <div className="FeedbackPage-Circle1"></div>
            {/* <div className="FeedbackPage-Circle2"></div>  */}
            {/* </div> */}
            <div className="FeedbackPage-container">
                <div className="FeedbackPage-fontTopic">ทำไมต้อง</div>
                <div className="FeedbackPage-fontTopic">Hotel Flipper</div>
                see all
                <FeedbackBox />
                <FeedbackBox />
                <FeedbackBox />
            
                <div className="FeedbackPage-line"></div>
                <div className="FeedbackPage-fontTopic2">ส่งฟีดแบ็กให้เราเพื่อปรับปรุงคุณภาพให้ดีขึ้น</div>
                <div className="FeedbackPage-fontTopic3">ข้อเสนอแนะของคุณ</div>
                {/* <form> */}
                <textarea className="FeedbackPage-input" name="feedback" value={feedback} onChange={handleChange}></textarea>
                
                <div className="FeedbackPage-fontTopic4">คะแนนการบริการ</div>
                
                <div className="FeedbackPage-radio-grid">
                    <div>
                        <input type="radio"  name="score" value="one" onChange={handleScore}></input>
                        1
                    </div>

                    <div>
                        <input type="radio" name="score" value="two" onChange={handleScore}></input>
                        2
                    </div>

                    <div>
                        <input type="radio"  name="score" value="three" onChange={handleScore}></input>
                        3
                    </div>

                    <div>
                        <input type="radio"  name="score" value="four" onChange={handleScore}></input>
                        4
                    </div>

                    <div>
                        <input type="radio"  name="score" value="five" onChange={handleScore}></input>
                        5
                    </div>
                </div>
                <button className="FeedbackPage-button" type="Submit" onClick={submitHandler}>ส่งฟีดแบ็กเลย ! </button>
            {/* </form>  */}
            </div>
        </div>
    )
}
export default FeedbackPage