import React from "react";
import moment from "moment";
import Img from "gatsby-image";

const PostPreview = ({ post }) => {
  const { thumbnail, author, path, title, date, excerpt, url } = post;
  return (
    <>
      <div className="post-preview">
        {thumbnail && (
          <div>
            <a href={url || path} target="_blank" rel="noreferrer">
              <Img
                className="post-image"
                fluid={thumbnail.childImageSharp.fluid}
                alt={title}
              />
            </a>
          </div>
        )}
        <div className="post-meta">
          <a
            className="post-preview__title"
            href={url || path}
            target="_blank"
            rel="noreferrer"
            alt={title}
          >
            {title}
          </a>

          {author ? (
            <h5 className="post-preview__subtitle">
              {`${author} - ${moment(date).format("MMM Do YYYY")}`}
            </h5>
          ) : (
            <h5 className="post-preview__subtitle">
              {moment(date).format("MMM Do YYYY")}
            </h5>
          )}

          {excerpt && <p className="post-preview__excerpt">{excerpt}</p>}
        </div>
      </div>
    </>
  );
};

export default PostPreview;
