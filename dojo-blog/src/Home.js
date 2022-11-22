import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  // useEffect fires the callback function in 1st argument when the page loads
  // if no 2nd argument specified, useEffect fires on every re-render of the dom - whenever anything changes
  // putting an empty array for 2nd argument means the dependency list is empty - meaning useEffect will only run on page load
  // putting dependencies in the list means useEffect runs at page load and also when those dependencies changes
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, []);

  return (  
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;