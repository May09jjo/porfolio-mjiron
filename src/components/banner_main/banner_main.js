import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from "gatsby";
import TextLoop from "react-text-loop";
import Image from './image_perfil'
import NameSvg from './name_svg';

import "../../style/wall.less";

const BannerMain = () => {

    const { site } = useStaticQuery( graphql`
        query BannerMainQuery {
          site {
            siteMetadata {
              title
              subtitle
              listMainSkills {
                mainSkill
              }
            }
          }
        }
    `)

    const [ winHeight, setWindowHeight ] = useState(window.innerHeight)

    useEffect( ()=> {
        window.addEventListener("resize", handleWHeight);
        return () => { window.removeEventListener("resize", handleWHeight); }
    })

    const handleWHeight = () => setWindowHeight( window.innerHeight)
    const { title, subtitle, listMainSkills } = site.siteMetadata

    let mainSkills = listMainSkills.map( function(e) {
        return e['mainSkill']
    });
    
    return (
        <div className="wall" style={{ height: winHeight + "px" }} >
            <div className="intro container">
                <div className="row flex f-aling-center">
                    <div className="col xl5">
                        <div className="designer-thumbnail">
                            <Image/>
                        </div>
                    </div>

                    <div className="col xl7 text-left inner">
                        <span className="sub-title text-primary" >{subtitle}</span>
                        <NameSvg title={title}/>
                        <TextLoop className="mainSkillClass" children={ mainSkills } />
                        <div className="col xl12 " ><a href="#portfolio" className="btn"> SEE WORKS </a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerMain