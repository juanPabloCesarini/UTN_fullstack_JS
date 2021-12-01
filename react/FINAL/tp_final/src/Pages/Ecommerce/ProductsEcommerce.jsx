import { React } from "react"
import HeaderEcommerce from "../../Components/Ecommerce/HeaderEcommerce";
import FooterEcommerce from "../../Components/Ecommerce/FooterEcommerce";
import ProdEcommerce from "../../Components/Ecommerce/ProdEcommerce";
function ProductsEcommerce(){
    


    return(
        <>
            <HeaderEcommerce></HeaderEcommerce>

                <div className="album py-5 bg-dark">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <ProdEcommerce />    
                        </div>   
                    </div>
                </div>
                    
                        
               
            <FooterEcommerce></FooterEcommerce>
        </>
    )
}
export default ProductsEcommerce;