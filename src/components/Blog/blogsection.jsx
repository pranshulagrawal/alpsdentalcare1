import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9); // Display 9 posts per page

  useEffect(() => {
    // Fetch the testimonials data from the data.json file
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data.blogs))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the index of the last and first blog post on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  // Calculate the total number of pages
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="page-banner-area">
        <div className="container">
          <div className="page-banner-content" data-cues="slideInUp">
            <h2>Latest Blogs</h2>
            <ul className="list">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>BLOG</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Banner Area --> */}

      {/* <!-- Start Blog Area --> */}
      <div className="blog-area ptb-150">
        <div className="container">
          <div className="row justify-content-center" data-cues="slideInUp">
            {currentPosts.map((blog) => (
              <div className="col-xl-4 col-md-6" key={blog.id}>
                <div className="blog-card extra-gap">
                  <div className="blog-image">
                    <Link to={`/blog/${blog.id}`}>
                      <img src={blog.image} alt="image" />
                    </Link>
                    <div className="user">
                      <Link to="blog-style-one.html">
                        <img src={blog.authorImage} alt="image" />
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <Link to="blog-style-one.html" className="tag-btn">
                      DENTAL
                    </Link>
                    <h3>
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <div className="date">{blog.date}</div>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <div className="nav-links">
                  <button
                    className="page-numbers"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i data-feather="chevron-left"></i>
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      className={`page-numbers ${
                        currentPage === index + 1 ? "current" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    className="page-numbers"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i data-feather="chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
