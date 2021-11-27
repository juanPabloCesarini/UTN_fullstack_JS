import { Link } from "react-router-dom";
function MenuPublic() {
    return (
        <>
      
        <li className="nav-item"><Link to ="/" className="nav-link px-2 text-muted">Home</Link></li>
        
        <li className="nav-item"><Link to="/productos" className="nav-link px-2 text-muted">Productos</Link></li>
        
        <li className="nav-item"><Link to ="/carrito" className="nav-link px-2 text-muted">Carrito</Link></li>
      </>

              
     );
}

export default MenuPublic;