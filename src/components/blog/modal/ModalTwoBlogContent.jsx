import React from "react";

const ModalTwoBlogContent = () => {
  return (
    //  Article Starts
    <article>
      <div className="title-section text-left text-sm-center">
        <h1>
          Post <span>Details</span>
        </h1>
        <span className="title-bg">posts</span>
      </div>
      {/* Meta Starts */}

      <div className="meta open-sans-font">
        <span>
          <i className="fa fa-user"></i> steve
        </span>
        <span className="date">
          <i className="fa fa-calendar"></i> 9 January 2017
        </span>
        <span>
          <i className="fa fa-tags"></i> wordpress, business, economy, design
        </span>
      </div>
      {/* Meta Ends */}
      {/* Article Content Starts */}

      <h1>Teilnahme und Erfolg beim Landessprachenwettbewerb Englisch 2022 in Salzburg</h1>
      <img src="img/blog/Landessprachenwettbewerb.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        Im Jahr 2022 habe ich erfolgreich am Landessprachenwettbewerb im Fach Englisch in Salzburg teilgenommen. Der Wettbewerb versammelte talentierte Schülerinnen und Schüler aus verschiedenen Schulen in Salzburg, die ihre Fähigkeiten in der englischen Sprache präsentierten.
              
        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Das diesjährige Wettbewerbsthema war anspruchsvoll und erforderte von den Teilnehmenden eine intensive Auseinandersetzung mit aktuellen globalen Themen. In meiner Präsentation konnte ich mein Verständnis der englischen Sprache und die Fähigkeit, Ideen klar zu kommunizieren, unter Beweis stellen.
          </p>
        </div>
        <p>
        Die Vorbereitung auf den Wettbewerb war herausfordernd, aber die damit verbundenen Lernprozesse haben meine sprachlichen Fähigkeiten verbessert und mein Selbstbewusstsein gestärkt.
        </p>
        <p>
        Die Bekanntgabe meines Erfolgs beim Wettbewerb war für mich persönlich erfreulich und eine Anerkennung der investierten Arbeit sowie der Unterstützung durch Lehrer, Familie und Freunde.

Dieser Erfolg ermutigt mich, meine sprachlichen Fähigkeiten weiter zu verbessern und meine persönliche Entwicklung fortzusetzen.
        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalTwoBlogContent;
