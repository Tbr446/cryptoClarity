import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <div id="homepage-container" class="main-container">
    <div class="homepage-summary">
      <h1>Welcome to CryptoClarity</h1>
      <div id="mission">
        <h3>Our mission:</h3>
        <p>
          Provide a one-stop-shop for crypto newcomers wondering where to start
          in the cryptocurrency space.
        </p>
      </div>
      <div class="homeContent">
        <h4>If you've ever asked yourself...</h4>
        <div id="topics">
          <div id="one">What is cryptocurrency?</div>
          <div id="two">Why does it matter?</div>
          <div id="three">Where do I start?</div>
        </div>
      </div>
      <h5>
        We hope to provide you with some clarity! Click the "<i
          class="fas fa-book-reader"
        ></i
        >" icon in the tope right navigation section to visit the Learn page.
        Click the "<i class="fas fa-calculator"></i>" icon to check out our
        calculators. If you need to return to this page, click the "<i
          class="fas fa-home"
        ></i
        >" icon.
      </h5>
    </div>
    <div class="priceTracker">
      <h3>Crypto Price Tracker</h3>

        <div id="btc">
          <h3><i class="fab fa-btc"></i></h3>
          <h4 id="btc-price">
            Bitcoin price is
             <span class=${st.crypto.styling}> ${st.crypto.btcPriceUSD}</span>
          </h4><div class="test">
      <h4 id="btc-price" class=${
        st.crypto.styling
      }><span id="downUp"></span>${st.crypto.change24hr.toFixed(2)}%</h4>
    </div>
        </div>
      </div>
      <div id="contact-us-container">
      <form
        id="contact-us"
        action="https://formspree.io/f/xpzbwgpk"
        method="POST"
      >
        <h3 class="homepage-titles">Contact Us</h3>
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
      <form id="newsletter" name="newsletter" method="POST" action="">
        <h3 class="homepage-titles">Newsletter Sign-Up</h3>
        <p>
          Enter your email below to receive the weekly newsletter along with
          real-time updates
        </p>
        <label>
          Your email:
          <input type="email" name="emailAddress" required="required" />
        </label>
        <label>
          Your name:
          <input type="text" name="name" required="required" />
        </label>
        <!-- your other form fields go here -->
        <button type="submit"><i class="far fa-paper-plane fa-2x"></i></button>
        <!-- <input type="submit" name="submit" value="Submit Pizza" /> -->
      </form>
    </div>


    <h3>
      Temperature in ${st.weather.city} is
      ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
      ${kelvinToFahrenheit(st.weather.feelsLike)}F.
    </h3>

    <div id="emailSignUp">
      ${st.emails.map(item => {
        return `Name: ${item.name}, Email: ${item.emailAddress}<br>`;
      })}
    </div>
  </div>
    </div>



`;

//BTC COLOR CHANGE (NOT WORKING)
