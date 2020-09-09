import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import moment from "moment";
import Layout from "../layout";
import config from "../../data/SiteConfig";

const PostTemplate = ({ data }) => {
  const postNode = data.markdownRemark;
  const { html, frontmatter } = postNode;
  const { author, title, date } = frontmatter;

  return (
    <Layout>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>
      <div className="post-container container">
        <div className="post-header">
          <h1 className="post-title">{title}</h1>
          {author ? (
            <p className="post-date">
              {`${author} - ${moment(date).format("MMM Do YYYY")}`}
            </p>
          ) : (
            <p className="post-date">{moment(date).format("MMM Do YYYY")}</p>
          )}
        </div>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`;

export default PostTemplate;
