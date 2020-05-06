import React, { useEffect, useRef } from 'react'
import PropTypes from "prop-types"

const NameSvg = ({ title }) => {

    const svgRef = useRef()
   
    useEffect( () => {
        
        let sWidth = svgRef.current.clientWidth, tText = svgRef.current.querySelector("text"), tWidth = tText.getBoundingClientRect().width;

        if (tWidth > sWidth) {
            let tInnerText = tText.innerHTML;
            if (tInnerText.split(" ").length > 1) {
                tText.innerHTML = "";
                tInnerText.split(" ").forEach((e, i) => {
                    let tSpan = createSVGElement("tspan", {
                        dy: i === 0 ? "0em" : ".8em",
                        x: "50"
                    });
                    tSpan.innerHTML = e;
                    tText.appendChild(tSpan);
                });
                setTimeout(() => {
                    svgRef.current.style.height = tText.getBoundingClientRect().height + 70; 
                    svgRef.current.style.margin = "15px auto";
                }, 250);
            } else {
                while (tWidth > sWidth) {
                    let fontSize = parseInt( window.getComputedStyle(tText, null).getPropertyValue("font-size") );

                    tText.style.fontSize = fontSize - 1 + "px";
                    tWidth = tText.getBoundingClientRect().width;
                }
            }
        }
    })

    const createSVGElement = (n, v) => {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v) n.setAttributeNS(null, p, v[p]);
        return n;
    }

    return (
        <div className="main-title text-primary">
            <h1 className="h1SvgName" >
                <svg width="100%" height="110px" viewBox="16 0 80 100" preserveAspectRatio="xMidYMid slice" ref={svgRef} >
                    { title }
                    <pattern id="wallPattern" patternUnits="userSpaceOnUse" width="100" height="100" >
                        <rect x="0" y="0" className="fill-primary" width="100" height="100" />
                        <image xlinkHref="/images/rainbow.svg" height="100" width="100" y="0" preserveAspectRatio="none" ></image>
                    </pattern>
                    <text fill="url(#wallPattern)" textAnchor="middle" x="50" y="53" > { title } </text>
                </svg>
            </h1>
        </div>
    );
}

NameSvg.defaultProps = {
    title: 'Michael',
}
  
NameSvg.propTypes = {
    title: PropTypes.string.isRequired,
}

export default NameSvg
