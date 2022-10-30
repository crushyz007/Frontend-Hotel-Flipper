import React from "react";
import { Link } from "react-router-dom"
import "../css/homepage.css"
import StepBox from "../components/stepBox"
import ServiceDetail from "../components/serviceDetail"

const HomePage = () =>{
    return(
        <div className="bg-color">
            <StepBox />
            <ServiceDetail />
            Hello
            {/* <Link to="Test"><button>test</button></Link> */}
        </div>
    )

}

export default HomePage