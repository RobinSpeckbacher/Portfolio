import React from "react";

const experienceContent = [
  
  {
    year: "2023",
    position: "Software-Engineering Student",
    compnayName: "IU",
    details: `Seit 2023 studiere ich leidenschaftlich Softwareentwicklung. Mit einem starken Interesse an der Gestaltung innovativer Lösungen und dem Streben nach kontinuierlichem Lernen, bin ich auf einer spannenden Reise in der Welt der Softwareentwicklung unterwegs.  `,
  },
  {
    year: "2022-2023",
    position: " Zivildienst",
    compnayName: "KIKU Kuchl",
    details: `In den Jahren 2022 bis 2023 habe ich meinen Zivildienst im Kindergarten Kiku absolviert. Während dieser Zeit konnte ich nicht nur meine zwischenmenschlichen Fähigkeiten vertiefen, sondern durfte selber auch noch einmal Kind sein.`,
  },
  {
    year: "2019-2023",
    position: "Matura",
    compnayName: "WIFI / BFI",
    details: ` In den Jahren 2019 bis 2022 habe ich mit Hingabe und Eifer an meiner Matura gearbeitet und sie erfolgreich abgeschlossen.`,
  },
  
 
 
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
