import React from "react";

const Info = () => {
   return (
      <div className="navigation__info">
         <div className="navigation__info_element">
            <div className="navigation__info_right">
               <div className="navigation__info_number">+7 (777) 490-00-91</div>
               <div className="navigation__worktime">
                  время работы: 9:00-20:00
               </div>
               <a className="navigation__order">Заказать звонок</a>
            </div>
         </div>
         <div className="navigation__info_element">
            <img src="/images/navigation-img.png" alt="" />
         </div>
      </div>
   );
};

export default Info;
