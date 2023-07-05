import { Component, Custom } from "../../utils/Сonstants"
import SecondComponent from "../SecondComponent/SecondComponent"
import CustomComponent from "../reusecomponents/CustomComponent"
const Section = () => {
    return (
        <>
            {
                Component.map((val)=>(
                    <CustomComponent  
                    key={val.componet_id}
                    props={val}
                    />
                ))
            }
            {
                Custom.map((val)=>(
                    <SecondComponent  
                    key={val.componet_id}
                    props={val}
                    />
                ))
            }
           
        </>
    )
}

export default Section;