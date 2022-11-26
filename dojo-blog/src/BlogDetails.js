import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  // useParams allows access to Route parameters - in this case the parameters in the path of the Route which contains BlogDetails
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;