import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className="notfound">
            <h1>oopppss .!!! Page Not Found</h1>
            
            <Link to="/">Go To Homepage</Link>
        </div>
     );
}
 
export default Notfound;