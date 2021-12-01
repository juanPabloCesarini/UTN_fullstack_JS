import { Link } from "react-router-dom";
function MenuEcommerce() {
    return (
        <>
      
        <li className="nav-item"><Link to ="/" className="nav-link px-2 text-muted">Home</Link></li>
        
        <li className="nav-item"><Link to="/productos" className="nav-link px-2 text-muted">Productos</Link></li>
        
        
      </>

              
     );
}

export default MenuEcommerce;