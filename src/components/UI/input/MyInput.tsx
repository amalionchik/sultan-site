import React from "react";
import "../../../scss/MyInput.scss";

const MyInput = ({ placeholder, ...props }: any) => {
   return (
      <div className="myinput">
         <input
            className="myinput__input"
            type="text"
            placeholder={placeholder}
         />
         <button className="myinput__button">
            <img className="myinput__loop" src="/images/loop.svg" alt="" />
         </button>
      </div>
   );
};

export default MyInput;
