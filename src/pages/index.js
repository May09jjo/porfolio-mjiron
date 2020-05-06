import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BannerMain from "../components/banner_main/banner_main";

class IndexPage extends React.Component {

    render() {
        const { title, description } = this.props.data.site.siteMetadata;
        
        return (
            <Layout placeholder={false}>
                <SEO lang="es" title={title} description={ description } />
                <BannerMain/>

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
                description
            }
        }
    }
`;
