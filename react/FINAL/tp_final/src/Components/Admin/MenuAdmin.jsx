import { Link } from "react-router-dom";
function MenuAdmin() {
    return (
        <>
      
        <li className="nav-item"><Link to ="/admin" className="nav-link px-2 text-muted">Home</Link></li>
        
        <li className="nav-item"><Link to ="/admin/productos/lista" className="nav-link px-2 text-muted">Productos</Link></li>
      </>

              
     );
}

export default MenuAdmin;