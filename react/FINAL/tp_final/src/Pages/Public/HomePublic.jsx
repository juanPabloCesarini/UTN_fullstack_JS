import React from "react";
import HeaderPublic from "../../Components/Public/HeaderPublic";
import FooterPublic from "../../Components/Public/FooterPublic";
function HomePublic() {
   

    return (
        <>
             <HeaderPublic />
                <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">tucelu.com</h2>
                        <p className="lead">Una nueva manera de estar comunicado.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto"></div>
                </div>
  
             <FooterPublic/>
        </>
           
            
        
    );
}
export default HomePublic;