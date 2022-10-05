import React, { useState } from "react";
import '../SkillLoader/SkillLoader.css'
import { useEffect } from "react";
function SkillLoader(props) {
    const[offset,setOffSet]=useState(472);
    const[percent,setPercent]=useState(0);
    useEffect(()=>{
        let counter=0;
        let counter1=0;
        setInterval(()=>{
            if(counter===props.percent){
                clearInterval();
            }
            else{
                counter=counter+1
                setPercent(counter);
                
            }
            
        },38)
        setInterval(()=>{
            if(counter1===props.offset){
                clearInterval();
            }
            else{
                counter1=counter1+1;
                setOffSet(counter1);
            }
        },20)
    },[])

  return (
    <div className="skills-loader">
      <div className="Outer-Circle">
        <div className="Inner-Circle">
          <div className="loader-percentage" id="number">
            {percent}{"%"}
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#e91e63" />
            <stop offset="100%" stopColor="#677ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" strokeLinecap="round" style={{strokeDashoffset:offset}} id="circle-loader" />
      </svg>
    </div>
  );
}

export default SkillLoader;
