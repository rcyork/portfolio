import React from "react";

import { CONTACT_DATA } from "../../contact_data";

export const ContactMe = () => {
  return (
    <div className="contact">
      {CONTACT_DATA.map(item => {
        return (
          <div className="linkWrap" key={item.text}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <i className={item.class} />
            </a>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};
