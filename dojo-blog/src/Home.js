import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect fires the callback function in 1st argument when the page loads
  // if no 2nd argument specified, useEffect fires on every re-render of the dom - whenever anything changes
  // putting an empty array for 2nd argument means the dependency list is empty - meaning useEffect will only run on page load
  // putting dependencies in the list means useEffect runs at page load and also when those dependencies changes
  useEffect(() => {
    // setTimeout is used to simulate real world request
    setTimeout(()=> {
      fetch('http://localhost:8000/blogss')
      .then(res => {
        console.log(res);
        if(!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, []);

  return (  
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
    </div>
  );
}
 
export default Home;