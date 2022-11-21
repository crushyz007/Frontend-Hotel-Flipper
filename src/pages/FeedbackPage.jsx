import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import FeedbackBox from "../components/feedbackBox"
import '../css/FeedbackPage.css'
import { Link } from "react-router-dom"
import axios from 'axios'
const FeedbackPage =()=>{
    const[feedback,setFeedback] = useState('')
    const[reviews,setReviews] = useState([])
    const[score,setScore] = useState()
    const[isSubmit,setIsSubmit] = useState(false)
    // let reviews

    
    //maxminตัวอักษร
    //see all
    const handleChange =e=>{
        setFeedback(e.target.value)
    }
    const handleScore=e=>{
        setScore(e.target.value)
    }

    //ส่งให้backตรงนี้
    const submitHandler= async(e) => {
        e.preventDefault();
        setIsSubmit(true)
        const data ={
            HId : "637b5c5ffa8815f3a1d71a2a",
            desc:feedback,
            star:Number(score),
            service : "1234"
        }
        
        const post = await axios.post(`http://localhost:3001/api/review/create`,data)
        .then(res=>{
            alert('เราได้รับรีวิวของคุณแล้ว')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        // if (isSubmit===true){
        //     console.log(feedback)
        //     console.log(score)
        // }
    review()
    },[])

    const review = async() =>{
        const res = await axios.get('http://localhost:3001/api/review')
                    .then(res=>{
                        // console.log("เกรซ",res.data)
                        setReviews(res.data)
                        // console.log(reviews)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
        console.log(">>>",reviews)

    }
    return(
        <div className="FeedbackPage-bg">
            {/* <div className="test3"> */}
            <div className="FeedbackPage-Circle1"></div>
            {/* <div className="FeedbackPage-Circle2"></div>  */}
            {/* </div> */}
            <div className="FeedbackPage-container">
                <div className="FeedbackPage-fontTopic">ทำไมต้อง</div>
                <div className="FeedbackPage-fontTopic" >Hotel Flipper</div>
                
                {/* {
                    console.log(reviews)
                } */}
                
                {
                    reviews.map((item)=>{
                        console.log('>',item)
                        return <FeedbackBox name={"เกรซ"} rate={item.star} ment={item.desc}/>
                    })
                }
                {/* <FeedbackBox />
                <FeedbackBox />
                <FeedbackBox /> */}
            
                <div className="FeedbackPage-line"></div>
                <div className="FeedbackPage-fontTopic2">ส่งฟีดแบ็กให้เราเพื่อปรับปรุงคุณภาพให้ดีขึ้น</div>
                <div className="FeedbackPage-fontTopic3">ข้อเสนอแนะของคุณ</div>
                {/* <form> */}
                <textarea className="FeedbackPage-input" name="feedback" value={feedback} onChange={handleChange}></textarea>
                
                <div className="FeedbackPage-fontTopic4">คะแนนการบริการ</div>
                
                <div className="FeedbackPage-radio-grid">
                    <div>
                        <input type="radio"  name="score" value={1} onChange={handleScore}></input>
                        1
                    </div>

                    <div>
                        <input type="radio" name="score" value={2} onChange={handleScore}></input>
                        2
                    </div>

                    <div>
                        <input type="radio"  name="score" value={3} onChange={handleScore}></input>
                        3
                    </div>

                    <div>
                        <input type="radio"  name="score" value={4} onChange={handleScore}></input>
                        4
                    </div>

                    <div>
                        <input type="radio"  name="score" value={5} onChange={handleScore}></input>
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