import React from "react";
import "../styles.css";

export function ResultsSection(props) {
  // translatePhraseResultPOC={translatePhraseResultPOC}
  // setTranslatePhraseResultPOC={setTranslatePhraseResultPOC}

  return (
    <div>
      {/* <!-- TWEETS (MIDDLE-CONTAINER) --> */}
      <div className="tweets block">
        <h2 className="titular">
          {/* <span class="icon zocial-twitter"></span>Translation Results */}
          <span className="icon entypo-language"></span>Translation Results
        </h2>
        {/* <div class="tweet first">
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played. On{" "}
            <a class="tweet-link" href="#17">
              @Quora
            </a>
          </p>
          <p>
            <a class="time-ago scnd-font-color" href="#18">
              3 minutes ago
            </a>
          </p>
        </div> */}
        <div className="tweet">
          <p>
            {props.translatePhraseResultPOC}
            {/* <a class="tweet-link" href="#19">
              #CreativeCloud
            </a> */}
          </p>
          {/* <p>
            <a class="scnd-font-color" href="#20">
              6 hours ago
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
}
