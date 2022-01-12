import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <div class="currentview"><h2>Home</h2></div>

  <div id="homepage-container" class="main-container">
    <div class="homepage-summary">
      <p>Homepage Summary</p>

      <h4 id="btc-price">
        Bitcoin price is
        <span class=${st.crypto.styling}>${st.crypto.btcPrice}</span>
      </h4>
    </div>

    <div id="contact-us-container">
      <form
        id="contact-us"
        action="https://formspree.io/f/xpzbwgpk"
        method="POST"
      >
        <h2 class="homepage-titles">Contact Us</h2>
        <label>
          Your email:
          <input type="email" name="_replyto" required="required" />
        </label>
        <label>
          Your message:
          <textarea name="message" required="required"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit"><i class="far fa-paper-plane fa-2x"></i></button>
      </form>
      <form
        id="newsletter"
        action="https://formspree.io/f/xpzbwgpk"
        method="POST"
      >
        <h2 class="homepage-titles">Newsletter Sign-Up</h2>
        <p>
          Enter your email below to receive the weekly newsletter along with
          real-time updates
        </p>
        <label>
          Your email:
          <input type="email" name="_replyto" required="required" />
        </label>
        <!-- your other form fields go here -->
        <button type="submit"><i class="far fa-paper-plane fa-2x"></i></button>
      </form>
    </div>

    <div class="home-section">
      <span id="btc-price">${st.crypto.change24hr}</span>
    </div>
    <h3>
      Temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
      ${kelvinToFahrenheit(st.weather.feelsLike)}F.
    </h3>
  </div>
`;

//BTC COLOR CHANGE (NOT WORKING)
