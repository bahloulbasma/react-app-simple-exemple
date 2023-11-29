
import BlogList from "./BlogLIst";
import useFetch from "./useFetch";


const Home = () => {

    const{  data:blogs, isPending, error} = useFetch('http://localhost:4000/blogs');
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {
                isPending && <div>Looding...</div>
            }
             {blogs && <BlogList listBlogs={blogs} title="All blogs"/>}
        
        </div>
     );
}
 
export default Home;