import axios from "axios"
import React from "react"
import { useEffect,useState } from "react"
import '../css/feedbackBox.css'
import person from '../pic/person.png'
const FeedbackBox =(props) =>{
    const[comment,setComment] = useState({name:'',rate:'',ment:''})

    //รับจาก back ตรงนี้
    // useEffect(()=>{
    //     axios
    //     .get('')
    //     .then(res=>{
    //         setComment(res.data)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])
    
    return(
    <div>
        <div className="feedbackBox-Box">
            <div className="feedbackBox-grid feedbackBox-font">
                <div>
                    <img src={person} width="100" height="100" alt="" className="personPos"/>
                    
                </div>
                <div>
                    เกรซ
                    {props.name}
                {/* <div className="feedbackBox-commentPos">RatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRatingRating</div> */}
                </div>
                <div>Rate:
                    {props.rate}
                </div>
                
            </div>
            <div className="feedbackBox-comment">
                <div className="gracefont">
                    {props.ment}
                    {/* gracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegracegrace */}
                </div>
            </div>
        </div>

    </div>
    )
}
export default FeedbackBox