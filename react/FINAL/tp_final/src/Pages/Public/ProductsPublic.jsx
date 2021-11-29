import { React } from "react"
import HeaderPublic from "../../Components/Public/HeaderPublic";
import FooterPublic from "../../Components/Public/FooterPublic";
import ProdPublic from "../../Components/Public/ProdPublic";
function ProductsPublic(){
    
    return(
        <>
            <HeaderPublic></HeaderPublic>

                <div className="album py-5 bg-dark">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        
                            
                            <ProdPublic />
                            
                    </div>   
                    </div>
                </div>
                    
                        
               
            <FooterPublic></FooterPublic>
        </>
    )
}
export default ProductsPublic;