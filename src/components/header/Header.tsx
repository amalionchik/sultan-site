import React from "react";
import "../../scss/Header.scss";
import HeaderAdress from "./header-adress/HeaderAdress";
import HeaderEmail from "./header-email/HeaderEmail";
import HeaderNavigation from "./header-navigation/HeaderNavigation";

const Header = () => {
   return (
      <div className="header">
         <div className="header__container">
            <div className="header__container_element">
               <HeaderAdress />
               <HeaderEmail />
            </div>
            <div className="header__container_element">
               <HeaderNavigation />
            </div>
         </div>
      </div>
   );
};

export default Header;
