import React from "react";

const Basket = () => {
   return (
      <div className="navigation__basket">
         <div className="navigation__basket_logo">
            <div className="navigation__basket_cart">
               <img src="/images/cart.svg" alt="" />
            </div>
            <div className="navigation__basket_notification">
               <img
                  className="navigation__basket_circle"
                  src="/images/circle.svg"
                  alt=""
               />
               <div className="navigation__basket_count">3</div>
            </div>
         </div>
         <div className="navigation__basket_text">
            <div className="navigation__basket_title">Корзина</div>
            <div className="navigation__basket_balance">12 478 ₸ </div>
         </div>
      </div>
   );
};

export default Basket;
