import React from "react"
// import Select from 'react-select'
import { useState } from "react"
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import "../css/serviceSelect.css"

const ServiceSelect =()=>{
    
    const [selectService,setSelectservice] = useState('')
    const [selectDate,setSelectDate] = useState('')

    const handleSelectService = e =>{
        setSelectservice(e.target.value)
        console.log(selectService)
        // onChange={e=>setSelects(e.target.value)}
    }

    const handleSelectDate = e =>{
        setSelectDate(e)
        console.log(selectDate)
    }
    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]
    

    return(
        <div>
        <div className="detailBoxSelect">
            <div className="service-TopicSelect">บริการที่ต้องการ</div>
            {/* {selects} */}
            <select className="service-DropDown" value={selectService} onChange={handleSelectService}>  
                <option value='Apple'> Apple</option>  
                <option value='Mango'> Mango</option>  
                <option value='Banana'>Banana </option> 
            </select>
            

            <div className="service-TopicSelect">วันที่ที่ต้องการรับบริการ</div>
            <DatePicker
                className="service-DatePicker"
                selected={selectDate}
                onChange={handleSelectDate}
                dateFormat='yyyy/MM/dd'
                minDate={new Date()}
                showMonthDropdown
                useShortMonthInDropdown
                showYearDropdown
            />
            <div className="service-TopicSelect">ระยะเวลา</div>

            <div className="AddService-button">
                <div className="AddService-font">เพิ่มเข้ารายการ</div> 
            </div>
        </div>
        
        </div>
    )
}

export default ServiceSelect