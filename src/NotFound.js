import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page cannot be found</p>
            <Link to ="/"> back to page home</Link>
        </div>
     );
}
 
export default NotFound;