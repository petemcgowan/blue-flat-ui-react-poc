import React from "react";
import "../styles.css";

export function NewsletterSection() {
  return (
    <div>
      {/* <!-- JOIN NEWSLETTER (RIGHT-CONTAINER) --> */}
      <div class="join-newsletter block">
        <h2 class="titular">JOIN THE NEWSLETTER</h2>
        <div class="input-container">
          <input
            type="text"
            placeholder="yourname@gmail.com"
            class="email text-input"
          />
          <div class="input-icon envelope-icon-newsletter">
            <span class="fontawesome-envelope scnd-font-color"></span>
          </div>
        </div>
        <a class="subscribe button" href="#21">
          SUBSCRIBE
        </a>
      </div>
    </div>
  );
}
