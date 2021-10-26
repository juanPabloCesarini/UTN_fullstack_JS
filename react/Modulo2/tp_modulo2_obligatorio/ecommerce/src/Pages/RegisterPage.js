import Footer from "../Components/Footer";
import FormRegister from "../Components/FormRegister";
import Header from "../Components/Header";
function RegisterPage() {
    return (
        <>
        <Header></Header>
        <div className="m-0 vh-100 row justify-content-center align-items-center">
        <FormRegister></FormRegister>
        </div>
        <Footer></Footer>
    
        </>
    );
}

export default RegisterPage;