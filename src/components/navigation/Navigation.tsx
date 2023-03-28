import React from "react";
import "../../scss/Navigation.scss";
import BigButton from "../UI/big button/BigButton";
import MyInput from "../UI/input/MyInput";
import Cart from "./navigation-cart/NavigationCart";
import Info from "./navigation-info/NavigationInfo";

const Navigation = () => {
   return (
      <div className="navigation">
         <hr />
         <div className="navigation__container">
            <div className="navigation__element">
               <div className="navigation__logo">
                  <a href="/"><img src="/images/logo.svg" alt="" /></a>
               </div>
            </div>
            <div className="flex">
					<div className="navigation__element flex__element">
               <BigButton src="/images/white_square.svg">Каталог</BigButton>
            	</div>
            	<div className="navigation__element flex__element">
            	   <MyInput placeholder="Поиск..." />
            	</div>
				</div>
            <div className="flex">
					<div className="navigation__element flex__element">
            	   <Info />
            	</div>
            	<div className="navigation__element flex__element">
            	   <BigButton src="/images/download.svg">Прайс-лист</BigButton>
            	</div>
				</div>
            <div className="navigation__element">
               <a href="/cart"><Cart /></a>
            </div>
         </div>
         <hr />
      </div>
   );
};

export default Navigation;
