import React from "react";
import "../styles.css";
import { TweetsSection } from "./TweetsSection";

export function MiddleContainer() {
  return (
    <div>
      {/* <!-- MIDDLE-CONTAINER --> */}
      <div class="middle-container container">
        {/* <!-- PROFILE (MIDDLE-CONTAINER) --> */}
        <div class="profile block">
          <a class="add-button" href="#28">
            <span class="icon entypo-plus scnd-font-color"></span>
          </a>
          <div class="profile-picture big-profile-picture clear">
            <img
              width="150px"
              alt="Anne Hathaway"
              src="https://i.pinimg.com/736x/b8/69/5f/b8695f007aea9a08a0419479217ca6aa.jpg"
            />
          </div>
          <h1 class="user-name">Dream Girl</h1>
          <div class="profile-description">
            <p class="scnd-font-color">
              Lorem ipsum dolor sit amet consectetuer adipiscing
            </p>
          </div>
          <ul class="profile-options horizontal-list">
            <li>
              <a class="comments" href="#40">
                <p>
                  <span class="icon fontawesome-comment-alt scnd-font-color"></span>
                  23
                </p>
              </a>
            </li>
            <li>
              <a class="views" href="#41">
                <p>
                  <span class="icon fontawesome-eye-open scnd-font-color"></span>
                  841
                </p>
              </a>
            </li>
            <li>
              <a class="likes" href="#42">
                <p>
                  <span class="icon fontawesome-heart-empty scnd-font-color"></span>
                  49
                </p>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- WEATHER (MIDDLE-CONTAINER) --> */}
        <div class="weather block clear">
          <h2 class="titular">
            <span class="icon entypo-location"></span>
            <strong>CLUJ-NAPOCA</strong>/RO
          </h2>
          <div class="current-day">
            <p class="current-day-date">FRI 29/06</p>
            <p class="current-day-temperature">
              24º<span class="icon-cloudy"></span>
            </p>
          </div>
          <ul class="next-days">
            <li>
              <a href="#43">
                <p class="next-days-date">
                  <span class="day">SAT</span>{" "}
                  <span class="scnd-font-color">29/06</span>
                </p>
                <p class="next-days-temperature">
                  25º<span class="icon icon-cloudy scnd-font-color"></span>
                </p>
              </a>
            </li>
            <li>
              <a href="#44">
                <p class="next-days-date">
                  <span class="day">SUN</span>{" "}
                  <span class="scnd-font-color">30/06</span>
                </p>
                <p class="next-days-temperature">
                  22º<span class="icon icon-cloudy2 scnd-font-color"></span>
                </p>
              </a>
            </li>
            <li>
              <a href="#45">
                <p class="next-days-date">
                  <span class="day">MON</span>{" "}
                  <span class="scnd-font-color">01/07</span>
                </p>
                <p class="next-days-temperature">
                  24º<span class="icon icon-cloudy2 scnd-font-color"></span>
                </p>
              </a>
            </li>
            <li>
              <a href="#46">
                <p class="next-days-date">
                  <span class="day">TUE</span>{" "}
                  <span class="scnd-font-color">02/07</span>
                </p>
                <p class="next-days-temperature">
                  26º<span class="icon icon-cloudy scnd-font-color"></span>
                </p>
              </a>
            </li>
            <li>
              <a href="nolink">
                <p class="next-days-date">
                  <span class="day">WED</span>{" "}
                  <span class="scnd-font-color">03/07</span>
                </p>
                <p class="next-days-temperature">
                  27º<span class="icon icon-sun scnd-font-color"></span>
                </p>
              </a>
            </li>
            <li>
              <a href="nolink">
                <p class="next-days-date">
                  <span class="day">THU</span>{" "}
                  <span class="scnd-font-color">04/07</span>
                </p>
                <p class="next-days-temperature">
                  29º<span class="icon icon-sun scnd-font-color"></span>
                </p>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- TWEETS (MIDDLE-CONTAINER) --> */}
        <TweetsSection />
        {/* <!-- SOCIAL (MIDDLE-CONTAINER) --> */}
        <ul class="social block">
          <li>
            <a href="#50">
              <div class="facebook icon">
                <span class="zocial-facebook"></span>
              </div>
              <h2 class="facebook titular">SHARE TO FACEBOOK</h2>
            </a>
          </li>
          <li>
            <a href="#51">
              <div class="twitter icon">
                <span class="zocial-twitter"></span>
              </div>
              <h2 class="twitter titular">SHARE TO TWITTER</h2>
            </a>
          </li>
          <li>
            <a href="#52">
              <div class="googleplus icon">
                <span class="zocial-googleplus"></span>
              </div>
              <h2 class="googleplus titular">SHARE TO GOOGLE+</h2>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
