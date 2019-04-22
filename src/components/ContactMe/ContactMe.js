import React from "react";

import { CONTACT_DATA } from "../../contact_data";
import "./ContactMe.css";

export const ContactMe = () => {
  return (
    <div className="contact">
      {CONTACT_DATA.map(item => {
        return (
          <div className="linkWrap" key={item.text}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.class} />
            </a>
          </div>
        );
      })}
    </div>
  );
};
