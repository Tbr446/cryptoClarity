import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <div class="currentview"><h2>Home</h2></div>
  <!-- <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3> -->

  <h4 id="btc-price">
    Bitcoin price is
    <p class="cl">${st.crypto.btcPrice}</p>
    <!-- ${greenOrRed(st.crypto.change24hr)}</p> -->
  </h4>

  <div id="homepage-container">
    <div id="crypto-def">
      "B &sdot; C"
    </div>
  </div>
  <div id="contact-us-container">
    <h2>Contact Us</h2>
    <form
      id="contact-us"
      action="https://formspree.io/f/xpzbwgpk"
      method="POST"
    >
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
  </div>

  <div class="home-section">
    <span id="btc-price">${st.crypto.change24hr}</span>
  </div>
`;

const greenOrRed = change => {
  let cl = document.querySelector(".cl");
  if (change < 0) {
    console.log("negative");
    cl.classList.add("btc-up");
  }
  if (change > 0) {
    console.log("positive");
    cl.classList.remove("cl");
  }
};

//BTC COLOR CHANGE (NOT WORKING)
