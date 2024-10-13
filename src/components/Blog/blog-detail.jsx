import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold the blog data
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Fetch the blog data from data.json
    const fetchBlogData = async () => {
      try {
        const response = await fetch("data.json"); // Update with your actual path to data.json
        const data = await response.json();
        const blogPost = data.blogs.find((post) => post.id === id); // Find the blog post with the matching ID
        setBlog(blogPost);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (!blog) {
    return <div>Blog not found.</div>; // Blog not found state
  }

  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content" data-cues="slideInUp">
            <h2>Blog Details</h2>
            <ul className="list">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>BLOG</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="blog-details-area ptb-150">
        <div className="container">
          <div
            className="blog-details-desc without-sidebar"
            data-cue="slideInUp"
          >
            <div className="article-content">
              <div className="image">
                <img src={blog.image} alt="image" />{" "}
                {/* Assuming your blog data has an image property */}
              </div>
              <div className="inner">
                <ul className="meta">
                  <li>
                    <i data-feather="calendar"></i>
                    {blog.date}{" "}
                    {/* Assuming your blog data has a date property */}
                  </li>
                  <li>
                    <i data-feather="message-square"></i>
                    {blog.comments}{" "}
                    {/* Assuming your blog data has a comments property */}
                  </li>
                  <li>
                    <i data-feather="clock"></i>
                    {blog.readTime}{" "}
                    {/* Assuming your blog data has a readTime property */}
                  </li>
                  <li>
                    <a href="blog-style-one.html" className="tag-btn">
                      {blog.tag}{" "}
                      {/* Assuming your blog data has a tag property */}
                    </a>
                  </li>
                </ul>
                <h2>{blog.title}</h2>{" "}
                {/* Assuming your blog data has a title property */}
                <p>{blog.content}</p>{" "}
                {/* Assuming your blog data has content property */}
                {/* Add the rest of the blog content here... */}
                {/* For the quote, subheadings, etc. */}
                {blog.quote && (
                  <div className="quote">
                    <p>{blog.quote.text}</p>
                    <div className="info">
                      <img src={blog.quote.authorImage} alt="image" />{" "}
                      {/* Assuming your blog data has an authorImage property */}
                      <h5>{blog.quote.authorName}</h5>{" "}
                      {/* Assuming your blog data has an authorName property */}
                    </div>
                  </div>
                )}
                {/* Add other sections such as tags, comments, and reply form here... */}
              </div>
            </div>
            {/* Comments and Reply section */}
            <div className="article-comment">
              <h3>Comments</h3>
              {blog.commentsList.map(
                (
                  comment,
                  index // Assuming your blog data has commentsList property
                ) => (
                  <div className="comment-list" key={index}>
                    <img src={comment.userImage} alt="image" />{" "}
                    {/* Assuming your comment has a userImage property */}
                    <h4>{comment.userName}</h4>{" "}
                    {/* Assuming your comment has a userName property */}
                    <span>{comment.date}</span>{" "}
                    {/* Assuming your comment has a date property */}
                    <ul className="rating">
                      {Array.from({ length: comment.rating }, (_, i) => (
                        <li key={i}>
                          <i className="flaticon-star"></i>
                        </li>
                      ))}
                    </ul>
                    <p>{comment.text}</p>{" "}
                    {/* Assuming your comment has a text property */}
                    <div className="reply-btn">Reply</div>
                  </div>
                )
              )}
            </div>
            <div className="article-reply">
              <h3>Leave A Comment</h3>
              <form netlify>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="form-group">
                  <label>Your Phone</label>
                  <input
                    type="phone"
                    className="form-control"
                    placeholder="Enter your phone"
                  />
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your website"
                  />
                </div>
                <div className="form-group">
                  <label>Your Comment</label>
                  <textarea
                    className="form-control"
                    placeholder="Your comment here"
                  ></textarea>
                </div>
                <button type="submit" className="default-btn">
                  Post A Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
