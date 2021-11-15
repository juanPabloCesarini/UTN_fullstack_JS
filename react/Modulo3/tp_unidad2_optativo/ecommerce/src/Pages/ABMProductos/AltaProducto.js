import Footer from "../../Components/Footer";
import AltaProd from "../../Components/ABMProductos/AltaProd"
import Header from "../../Components/Header";
function AltaProducto() {
    return (
        <>
        <Header></Header>
        <div className="m-0 vh-100 row justify-content-center align-items-center">
        <AltaProd></AltaProd>
        </div>
        <Footer></Footer>
    
        </>
    );
}

export default AltaProducto;