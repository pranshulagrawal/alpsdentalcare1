import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../Preloader";

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null); // State to hold the blog data
  const [loading, setLoading] = useState(true); // Loading state

  const fetchBlogData = async () => {
    try {
      const response = await fetch("/data.json"); // Path to your data.json
      if (!response.ok) {
        throw new Error("Failed to fetch blog data");
      }
      const data = await response.json();
      const blogPost = data.blogs.find((blog) => blog.id == parseInt(id, 10));
      setBlog(blogPost); // Set the blog post data
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  if (loading) {
    return <Preloader />; // Loading state
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
                    <a href="#" className="tag-btn">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
