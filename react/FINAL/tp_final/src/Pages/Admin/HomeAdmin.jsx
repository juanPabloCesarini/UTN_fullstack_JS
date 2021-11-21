import FooterAdmin from '../../Components/Admin/FooterAdmin';
import HeaderAdmin from './../../Components/Admin/HeaderAdmin';
function HomeAdmin() {
    console.log("homePage");
    return (
        <>
            <HeaderAdmin></HeaderAdmin>
            <div className="container">
                <h3 className="display-3 text-center">Bienvenidos a SGE</h3>
                <h4 className="display-4 text-center"><strong>Sistema de Gestión de Ecommerce</strong></h4>
            </div>
            <FooterAdmin></FooterAdmin>
        </>
     );
}

export default HomeAdmin;