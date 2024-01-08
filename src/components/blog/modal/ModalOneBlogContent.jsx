import React from "react";

const ModalOneBlogContent = () => {
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
          <i className="fa fa-user"></i> Robin
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

      <h1>Mein Erfolg beim Jungspediteur-Wettbewerb 2022</h1>
      <img src="img/blog/Jungspediteur.jpg" className="img-fluid" alt="Blog" />
      <div className="blog-excerpt open-sans-font pb-5">
        <p>
        ich freue mich, meine aufregende Erfahrung beim Jungspediteur-Wettbewerb 2022 mit euch zu teilen. Dieses Jahr hatte ich die einzigartige Gelegenheit, meine Idee von Lademitteln aus Mycelium vorzustellen, und ich bin stolz darauf, dass meine Innovation den ersten Platz gewonnen hat.




        </p>
        <div className="quotebox">
          <div className="icon">
            <img src="img/blog/quote.svg" alt="blog quote" />
          </div>
          <p>
          Der Wettbewerb fand in Wien statt, wo ich eingeladen wurde, meine Idee vor dem Zentral Fachverband der Spediteure zu präsentieren. Es war eine inspirierende Gelegenheit, mein Konzept mit Branchenexperten zu teilen und von ihren Einblicken und Erfahrungen zu profitieren.

          </p>
        </div>
        <p>
        Die Anerkennung des ersten Platzes ist nicht nur eine persönliche Errungenschaft, sondern auch eine Bestätigung der Relevanz und des Potenzials meiner Idee. Die Möglichkeit, mit Fachleuten in der Speditionsbranche zu interagieren, hat meinen Horizont erweitert und mich weiter motiviert, innovative Lösungen in der Logistik voranzutreiben.

        </p>
        <p>
        Ich bin dankbar für diese Erfahrung und freue mich darauf, weiterhin an zukunftsweisenden Ideen zu arbeiten und die Logistikbranche mit innovativen Konzepten zu bereichern.


        </p>
      </div>
      {/* Article Content Ends */}
    </article>
    // Article Ends
  );
};

export default ModalOneBlogContent;
