import React from "react";

const personalInfoContent = [
  { meta: "Vorname", metaInfo: "Robin" },
  { meta: "Nachname", metaInfo: "Speckbacher" },
  { meta: "Alter", metaInfo: "24 Jahre" },
  { meta: "Nationalität", metaInfo: "Österr." },
  { meta: "Email", metaInfo: "robin.speckbacher@gmx.at" },
  { meta: "Sprachen", metaInfo: "Deutsch, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
