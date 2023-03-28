import React from "react";

const HeaderEmail = () => {
   return (
      <div className="header__email">
         <div className="header__email_icon">
            <img
               className="header__icon_email"
               src="/images/letter-icon.svg"
               alt=""
            />
         </div>
         <div className="header__email_container">
            <div className="header__email_title">opt.sultan@mail.ru</div>
            <div className="header__email_subtitle">На связи в любое время</div>
         </div>
      </div>
   );
};

export default HeaderEmail;
