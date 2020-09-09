import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";

import config from "../../data/SiteConfig";

const Blog = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <div className="page-header">
        <h1>Centaurus Blog</h1>
      </div>
      <div className="blog-container container">
        <div className="blog-posts">
          <PostListing postEdges={postEdges} />
        </div>

        <div className="blog-side-menu">
          <h4 className="blog-side-menu__heading">Join our community</h4>
          <div className="projects">
            <div className="arktos">
              <h5 className="heading">Arktos</h5>
              <a
                className="link"
                href="https://github.com/futurewei-cloud/arktos"
              >
                Github
              </a>
              <a
                className="link"
                href="https://join.slack.com/t/arktosworkspace/shared_invite/zt-cmak5gjq-rBxX4vX2TGMyNeU~jzAMLQ"
              >
                Slack Channel
              </a>
              <a
                className="link"
                href="https://groups.google.com/forum/#!forum/arktos-user"
              >
                Email Group
              </a>
            </div>
            <div className="mizar">
              <h5 className="heading">Mizar</h5>
              <a
                className="link"
                href="https://github.com/futurewei-cloud/mizar"
              >
                Github
              </a>
              <a
                className="link"
                href="https://join.slack.com/t/mizar-group/shared_invite/zt-9md5gw7m-Fp8n1iV9H04Nn8P3lwTEMA"
              >
                Slack Channel
              </a>
              <a
                className="link"
                href="https://groups.google.com/forum/#!forum/mizar-cloud-networking"
              >
                Email Group
              </a>
              <a
                className="link"
                href="https://www.youtube.com/playlist?list=PL_7gYB_Le9d31Bpd3ZfyNE-c3AY-fYYw1"
              >
                Community Meetings
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "blog" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            url
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default Blog;
