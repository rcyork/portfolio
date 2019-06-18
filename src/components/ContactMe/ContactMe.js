import React from "react";

import { CONTACT_DATA } from "../../contact_data";
import "./ContactMe.css";

export const ContactMe = () => {
  return (
    <div className="contact">
      {CONTACT_DATA.map(item => {
        return (
          <a
            id="linkWrap"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`linkWrap ${item.text === "résumé" ? "resumeWrap" : ""}`}
            key={item.text}
          >
            <i className={item.class} />
            {item.text === "résumé" ? (
              <p className="resume">{item.text}</p>
            ) : null}
          </a>
        );
      })}
    </div>
  );
};
