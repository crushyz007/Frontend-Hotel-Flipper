import React from "react";
import { useState,useEffect } from "react"
import "../css/QAPage.css"
import StepBox from "../components/stepBox"
import axios from "axios";

const QAPage =()=>{

    const [formData,setFormData] = useState({
        q1:'',
        q2:'',
        q3:'',
        q4:''
    })
    const[isSubmit,setIsSubmit] = useState(false)

    const handleChange = e =>{
        const{name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    useEffect(()=>{
            if (isSubmit===true){
                console.log(formData)
            }
        })

    // ส่งไปให้ back ตรงนี้
    const sendAnsToDB = e =>{
        e.preventDefault();
        setIsSubmit(true)
        axios
        .post('url',
        {token:localStorage.getItem("token"),
        //มี 2แบบ ไม่รู้ถูกมั้ย งง55555555555555555
        //แบบที่ 1
        // q1:formData.q1,
        // q2:formData.q2,
        // q3:formData.q3,
        // q4:formData.q4  
        //แบบที่ 2
        // q:[formData.q1,formData.q2,formData.q3,formData.q4]
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    return(
        <div>
            <div className="QAPage-container">
                <StepBox />
                <div className="QAPage-box">
                    <div className="QAPage-Topicfont">คำถามเพิ่มเติม</div>

                    <div className="QAPage-Qfont">1. สถานที่หน้างานมีความสุ่มเสี่ยงจากโควิด-19 หรือไม่</div>
                    <div className="radio-pos"> 
                        <input type="radio" name="q1" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>
                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q1" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">2. สถานที่หน้างานมีมาตรการคัดกรองคนเข้า-ออกหรือไม่</div>
                    <div className="radio-pos"> 
                        <input type="radio" name="q2" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>
                        
                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q2" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">3. สถานที่หน้างานมี หรือเคยมีการทำความสะอาดฆ่าเชื้อหรือไม่</div>
                    <div className="radio-pos"> 
                        <input type="radio" name="q3" value="yes" onChange={handleChange}></input>
                        <div className="radio-font">ใช่</div>
                        
                    </div>
                    <div className="radio-pos">
                        <input type="radio" name="q3" value="no" onChange={handleChange}></input>
                        <div className="radio-font">ไม่</div>
                    </div>

                    <div className="QAPage-Qfont">3. ลักษณะของสถานที่หน้างานเป็นรูปแบบใด</div>
                    <div className="radio-pos"> 
                        <input type="radio" name="q4" value="hotel" onChange={handleChange}></input>
                        <div className="radio-font">โรงแรม</div>
                        
                    </div>
                    <div className="radio-pos">
                        {/* <span className="checkmark"></span> */}
                        <input type="radio" name="q4" value="resort" onChange={handleChange}></input>
                        
                        <div className="radio-font">รีสอร์ท</div>
                    </div>

                    <div className="QAPage-button" onClick={sendAnsToDB}>
                        <div className="QAPage-buttonFont">ดำเนินการต่อ</div>
                    </div>
                    {/* <p>{formData.q1}</p> */}
                </div>
            </div>
        </div>
    )
}
export default QAPage