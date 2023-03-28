import React from "react";

const HeaderAdress = () => {
   return (
      <div className="header__adress">
         <div className="header__adress_icon">
            <img
               className="header__icon_adress"
               src="/images/location-icon.svg"
               alt=""
            />
         </div>
         <div className="header__adress_container">
            <div className="header__adress_title">
               г. Кокчетав, ул. Ж. Ташенова 129Б
            </div>
            <div className="header__adress_subtitle">(Рынок Восточный)</div>
         </div>
      </div>
   );
};

export default HeaderAdress;
