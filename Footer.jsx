import React from "react";

function foot(){

     var currentYear = new Date().getFullYear()

     return (<footer>
     <p>copyright &copy;{currentYear}</p>
     </footer>);
};

export default foot;