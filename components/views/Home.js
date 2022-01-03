import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>
  <h3>Bitcoin price is ${st.crypto.btcPrice}</h3>
  <section id="jumbotron">
    <h2>Home</h2>
  </section>
  <div class="home-section">
    <div class="btc"></div>
    <div class="eth"></div>
  </div>
  <div id="overlap"></div>

  <a
    href=""
    onClick="alert('Hello! Welcome to CryptoClarity, get ready to learn!')"
    >"Where am I???"</a
  >
`;
