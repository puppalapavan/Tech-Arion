import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div>
            <ul>
                <Link to="/Api"><li>Api</li></Link>
                <Link to="/Get"><li>Get</li></Link>
                <Link to="/Third/"><li>Third</li></Link>
            </ul>
        </div>
     );
}
 
export default Navbar;