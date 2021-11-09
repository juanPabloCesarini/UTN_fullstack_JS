import Footer from "../Components/Footer";
import FormLogin from "../Components/FormLogin";
import Header from "../Components/Header";
function LoginPage() {
    return (
        <>
        <Header></Header>
        <div className="m-0 vh-100 row justify-content-center align-items-center">
        <FormLogin></FormLogin>
        </div>
        <Footer></Footer>
    
        </>
    );
}

export default LoginPage;