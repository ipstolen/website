import React, { useState } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../layout";
import PostListing from "../components/PostListing";
import useDropdown from "../hooks/useDropdown";

import { capitalize } from "../utils";
import config from "../../data/SiteConfig";

// Modify this to add/remove categories
const RESOURCES_CATEGORIES = [
  "whitepaper",
  "presentations",
  "talks & videos",
  "events",
];

const Resources = ({ data }) => {
  const { toggle, collapsing, toggleMenuRef, handleToggle } = useDropdown();
  const [category, setCategory] = useState(RESOURCES_CATEGORIES[0]);

  const postEdges = data.allMarkdownRemark.edges;
  const postEdgesByCategory = {};
  postEdges.forEach((postEdge) => {
    const key = postEdge.node.frontmatter.category.toLowerCase();
    if (!postEdgesByCategory[key]) postEdgesByCategory[key] = [];
    postEdgesByCategory[key].push(postEdge);
  });

  const categories = [
    ...new Set([...RESOURCES_CATEGORIES, ...Object.keys(postEdgesByCategory)]),
  ];

  const renderMenuLink = (name) => {
    const formattedCategory = capitalize(name);
    const handleMenuClick = () => {
      if (window.innerWidth < 767) handleToggle(toggle);
      setCategory(name);
    };

    return (
      <li className="dropdown-item" onClick={handleMenuClick} key={name}>
        <div className={`menu-link ${category === name ? "active" : ""}`}>
          {formattedCategory}
        </div>
      </li>
    );
  };

  return (
    <Layout>
      <Helmet title={`Resources | ${config.siteTitle}`} />

      <div className="page-header">
        <h1>Centaurus Resources</h1>
      </div>

      <div className="resources-container container">
        <div className="resources-side-menu">
          <div
            className="dropdown-item dropdown-toggle"
            onClick={() => handleToggle(toggle)}
          >
            {capitalize(category)}
          </div>
          <ul
            className={`dropdown ${toggle ? "show" : ""} ${
              collapsing ? "collapsing" : ""
            }`}
            ref={toggleMenuRef}
          >
            {categories.map((category) => renderMenuLink(category))}
          </ul>
        </div>

        <div className="resources-posts">
          <PostListing postEdges={postEdgesByCategory[category] || []} />
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ResourcesQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "resources" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            category
            url
            author
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`;

export default Resources;
