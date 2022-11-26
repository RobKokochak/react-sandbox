import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // useParams allows access to Route parameters - in this case the parameters in the path of the Route which contains BlogDetails
  const { id } = useParams();

  return ( 
    <div className="blog-details">
      <h2>Blog Details - { id } </h2>
    </div>
   );
}
 
export default BlogDetails;