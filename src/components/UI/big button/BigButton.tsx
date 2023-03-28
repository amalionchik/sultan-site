import React from "react";
import "../../../scss/BigButton.scss";

const BigButton = ({ children, src, ...props }: any) => {
   return (
      <button className="bigbutton">
         <div className="bigbutton__name">{children}</div>
         <div className="bigbutton__image">
            <img src={src} alt="" />
         </div>
      </button>
   );
};

export default BigButton;
