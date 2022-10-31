import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import "../css/serviceDetail.css"
import axios from 'axios'
const ServiceDetail =(props)=>{

    const [serviceName,setServiceName] = useState("")
    const [serviceScope,setServiceScope] = useState("")
    const [serviceCondition,setServiceCondition] = useState("")
    const [serviceList,setServiceList] = useState("")

    const[currentService,setCurrentService] = useState({name:'',scope:'',condition:'',list:''})
    
    // function fetchService (){

    //     const requestURL = axios.get('')
        
    //     axios.all([requestName,requestScope,requestCondition,requestList])
        
    //     .then(axios.spread((...res)=>
    //         setCurrentService({'name':res[0],'scope':res[1],'condition':res[2],'list':res[3]})))
    
    //     }
    
    // useEffect(()=>{
    //     fetchService()
        
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // })

    useEffect(()=>{
        axios
        .get('')
        .then(res=>{
            // setServiceName(res.data)
            // setServiceScope(res.data)
            // setServiceCondition(res.data)
            // setServiceList(res.data)

            setCurrentService(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    // const data = currentService.map(((currentService,index)=>{
    //     return(
    //         <td>{currentService.name}</td>
    //         <td>{currentService.scope}</td>
    //         // <p>{currentService.condition}</p>
    //         // <p>{currentService.list}</p>
    //     )
    // })
    return(
            <div className="detailBox">
                <div className="service-name">
                    {/* {serviceName.map(serviceName=> <div key={serviceName})} */}
                    {/* {serviceName} */}
                    {/* {currentService.name} */}
                    ชื่อบริการ
                </div>

                <div className="service-pic"><img width="970" height="400" src="" alt=""/></div>

                <div className="service-Topic">ขอบเขตการทำงาน</div>
                <div className="service-scope"><i class="fi fi-ss-bulb"></i>
                    {/* {serviceScope} */}
                    {currentService.scope}
                </div>

                <div className="service-Topic">เงื่อนไขบริการ</div>
                <div className="service-scope"><i class="fi fi-sr-exclamation"></i>
                    {/* {serviceCondition} */}
                    {currentService.condition}
                </div>

                <div className="service-Topic">รายการบริการ</div>
                <div className="service-scope"><i class="fi fi-ss-circle"></i>
                    {/* {serviceList} */}
                    {currentService.list}
                </div>
            
            </div> 
    )
}

export default ServiceDetail
