import React from "react";
import { Link } from "react-router-dom"
import "../css/homepage.css"
import StepBox from "../components/stepBox"
// import StepBox1 from "../components/stepBox"
import ServiceDetail from "../components/serviceDetail"
import ServiceSelect from "../components/serviceSelect"
import PaymentModal from "../components/paymentModal";
const HomePage = () =>{
    return(
        <div className="bg-color">

            For Test Component
            <StepBox />
            {/* <StepBox1 /> */}
            Test
            {/* <ServiceDetail /> */}
            <ServiceSelect />
            {/* <PaymentModal /> */}
            <Link to="detailpage"><button>test</button></Link>
            <Link to="qapage"><button>qa</button></Link>
            <Link to="paymentpage"><button>payment</button></Link>
            <Link to="feedbackpage"><button>rating</button></Link>
            
        </div>
    )

}

export default HomePage