import React from "react";
import TextLoop from "react-text-loop";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";

import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    createSVGElement(n, v) {
        n = document.createElementNS("http://www.w3.org/2000/svg", n);
        for (var p in v) n.setAttributeNS(null, p, v[p]);
        return n;
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.setWindowHeight);
    }

    componentDidMount() {
        
        //this.setWindowHeight();

        window.addEventListener("resize", this.setWindowHeight);

        let sWidth = this.svg.clientWidth,
            tText = this.svg.querySelector("text"),
            tWidth = tText.getBoundingClientRect().width;

        if (tWidth > sWidth) {
            let tInnerText = tText.innerHTML;
            if (tInnerText.split(" ").length > 1) {
                tText.innerHTML = "";
                tInnerText.split(" ").forEach((e, i) => {
                    let tSpan = this.createSVGElement("tspan", {
                        dy: i === 0 ? "0em" : ".8em",
                        x: "50"
                    });
                    tSpan.innerHTML = e;
                    tText.appendChild(tSpan);
                });
                setTimeout(() => {
                    this.svg.style.height =
                        tText.getBoundingClientRect().height + 70;
                    this.svg.style.margin = "15px auto";
                }, 250);
            } else {
                while (tWidth > sWidth) {
                    let fontSize = parseInt(
                        window
                            .getComputedStyle(tText, null)
                            .getPropertyValue("font-size")
                    );
                    tText.style.fontSize = fontSize - 1 + "px";
                    tWidth = tText.getBoundingClientRect().width;
                }
            }
        }
    }

    setWindowHeight = () => {
        this.setState({ winHeight: window.innerHeight });
    }

    render() {
            const { title, description } = this.props.data.site.siteMetadata;
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="es"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div className="wall" style={{ height: this.state.winHeight + "px" }} >

                    <div className="intro container">
                    <div className="row flex f-aling-center">
                        <div className="col xl5"><div className="designer-thumbnail">
                            <Image/>
                        </div></div>

                        <div className="col xl7 text-left">
                        <div className="main-title text-primary">
                           <div className="position-image" >
                           <svg width="100%" height="110px" viewBox="16 0 80 100" preserveAspectRatio="xMidYMid slice" ref={c => (this.svg = c)} >
                                { title }
                                <pattern id="wallPattern" patternUnits="userSpaceOnUse" width="100" height="100" >
                                    <rect x="0" y="0" className="fill-primary" width="100" height="100" />
                                    <image xlinkHref="/images/rainbow.svg" height="100" width="100" y="0" preserveAspectRatio="none" ></image>
                                </pattern>
                                <text fill="url(#wallPattern)" textAnchor="middle" x="50" y="53" > { title } </text>
                            </svg>
                           </div>
                        </div>

                        <p className="tag-line text-secondary"> {this.props.data.site.siteMetadata.introTag} </p>
                        <p className="caption text-tertiary"> {this.props.data.site.siteMetadata.description} </p>

                        <TextLoop>
                                <span> UX Designer.</span>
                                <span> UI Designer.</span>
                                <span> Content Writter.</span>
                        </TextLoop>{" "}
                        <a href="#portfolio" className="btn">
                            SEE WORKS
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="social-buttons"> </div>

                </div>
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                capitalizeTitleOnHome
                titleImage
                introTag
                description

            }
        }
    }
`;
