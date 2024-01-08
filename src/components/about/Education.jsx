import React from "react";

const educationContent = [
  {
    year: "   2022",
    degree: "Gewinner ",
    institute: "Jungspediteur 2022",
    details: `Im Jahr 2022 hatte ich die Ehre, den Innovationswettbewerb Jungspediteur zu gewinnen. Die prämierte Idee hinter meinem Erfolg befasst sich mit der Entwicklung von Lademitteln aus Mycelium. `,
  },
  
  {
    year: "2022",
    degree: "Lehrabschluss Spediteur ",
    institute: "LBS3",
    details: ` Mit Erfolg habe ich meinen Lehrabschluss abgeschlossen und mir ein fundiertes Verständnis für die dynamische Welt der Logistik angeeignet.`,
  },
  {
    year: "2019-2022",
    degree: "Disponent",
    institute: "Wildenhofer",
    details: ` In den Jahren 2019 bis 2022 habe ich meine Lehrausbildung bei Wildenhofer in Hallein durchlaufen und dabei wertvolle Erfahrungen als Disponent gesammelt. `,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
