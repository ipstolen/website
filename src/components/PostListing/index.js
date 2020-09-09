import React from "react";
import PostPreview from "../PostPreview";

const PostListing = ({ postEdges }) => {
  const postList = postEdges.map((postEdge) => ({
    path: postEdge.node.fields.slug,
    title: postEdge.node.frontmatter.title,
    date: postEdge.node.frontmatter.date,
    author: postEdge.node.frontmatter.author,
    excerpt: postEdge.node.excerpt,
    thumbnail: postEdge.node.frontmatter.thumbnail,
    url: postEdge.node.frontmatter.url,
  }));

  return (
    <ul className="pure-g post-list">
      {postList.map((post) => (
        <li className="pure-u-1 post-list__item" key={post.path}>
          <PostPreview post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostListing;
