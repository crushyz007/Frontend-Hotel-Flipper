import React from "react";
import { Link } from "react-router-dom"
import "../css/homepage.css"
import StepBox from "../components/stepBox"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
const HomePage = () =>{
    return(
        <div className="bg-color">
            For Test Component
            <StepBox />
            Test
            <ServiceDetail />
            <ServiceSelect />
            {/* <Link to="Test"><button>test</button></Link> */}
        </div>
    )

}

export default HomePage