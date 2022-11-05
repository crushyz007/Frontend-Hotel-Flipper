import React from "react";
import { Link } from "react-router-dom"
import "../css/homepage.css"
import StepBox from "../components/stepBox"
// import StepBox1 from "../components/stepBox"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
const HomePage = () =>{
    return(
        <div className="bg-color">

            For Test Component
            <StepBox />
            {/* <StepBox1 /> */}
            Test
            {/* {/* <ServiceDetail /> */}
            <ServiceSelect />
            <Link to="detailpage"><button>test</button></Link>
            <Link to="qapage"><button>qa</button></Link>

        </div>
    )

}

export default HomePage