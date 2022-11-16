// separating the BlogList component allows it to be embedded into any other part of the app repeatedly

const BlogList = ({ blogs, title }) => {
  
  return (  
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => ( // .map fires a callback function for each blog in blogs
      // key must be used so React can distinguish between root elements in the dom
        <div className="blog-preview" key={blog.id}> 
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;