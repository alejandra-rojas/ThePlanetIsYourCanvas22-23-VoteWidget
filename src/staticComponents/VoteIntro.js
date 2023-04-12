import React from "react";

function VoteIntro() {
  const href = window.location.pathname;

  return (
    <>
      <div className="padding-main-container">
        <div className="dottedline"></div>
        <div className="header-offset" id="vote"></div>
        <section className="vote">
          <div className="boxed-title">
            <img
              className="svg-inline"
              src="media/iconswhite/vote.svg"
              alt="icon of a thumbs up"
              srcset="media/iconswhite/vote.svg"
              height="35px"
              width="auto"
            />
            <h2>
              {href === "/" ? <b>Public Vote</b> : <b>Voto del público</b>}
            </h2>
          </div>

          <p>
            {href === "/"
              ? "The finalists of each category have been selected and you can help decide who the winner is. To vote, register with a google account or a phone number, only one registration is allowed per person. The public vote closes on April 25."
              : "Los finalistas de cada categoría han sido seleccionados y tú puedes ayudar a decidir quien es el ganador. Para votar, registrate con una cuenta de google o un número de teléfono, solo se permite un registro por persona. La votación del público cierra el 25 de abril. "}
          </p>
        </section>
      </div>
    </>
  );
}

export default VoteIntro;
