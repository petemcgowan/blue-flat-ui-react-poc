import React from "react";
import "../styles.css";

export function TweetsSection() {
  return (
    <div>
      {/* <!-- TWEETS (MIDDLE-CONTAINER) --> */}
      <div class="tweets block">
        <h2 class="titular">
          <span class="icon zocial-twitter"></span>LATEST TWEETS
        </h2>
        {/* <div class="tweet first">
          <p>
            Ice-cream trucks only play music when out of ice-cream. Well played
            dad. On{" "}
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
        <div class="tweet">
          <p>
            We are in the process of pushing out all of the new CC apps! We will
            tweet again once they are live{" "}
            <a class="tweet-link" href="#19">
              #CreativeCloud
            </a>
          </p>
          <p>
            <a class="scnd-font-color" href="#20">
              6 hours ago
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
