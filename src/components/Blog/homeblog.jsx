import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/data.json"); // Update the path accordingly
        const data = await response.json();
        setBlogs(data.blogs.slice(-3)); // Get the last 3 blogs
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div className="blog-area pt-150 pb-25">
      <div className="container">
        <div className="section-title" data-cues="slideInUp">
          <h2>Find Our Latest Articles</h2>
        </div>
        <div
          className="row justify-content-center align-items-center"
          data-cues="slideInUp"
        >
          {blogs.length > 0 && (
            <>
              <div className="col-lg-8 col-md-12">
                <div className="blog-item">
                  <Link to={`/blog/${blogs[2].id}`}>
                    <img src={blogs[2].image} alt="main-blog-image" />
                  </Link>
                  <div className="content">
                    <h3>
                      <Link to={`/blog/${blogs[2].id}`}>{blogs[2].title}</Link>
                    </h3>
                    <ul className="meta">
                      <li>{blogs[2].date}</li>
                      <li>
                        <Link to={`/blog/${blogs[2].id}`}>
                          {blogs[2].category}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="row justify-content-center">
                  {blogs.slice(0, 2).map((blog) => (
                    <div key={blog.id} className="col-lg-12 col-md-6">
                      <div className="blog-item">
                        <Link to={`/blog/${blog.id}`}>
                          <img src={blog.image} alt="side-blog-image" />
                        </Link>
                        <div className="content little-wrap">
                          <h3>
                            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                          </h3>
                          <Link to={`/blog/${blogs[2].id}`} className="tag-btn">
                            {blog.category}
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
