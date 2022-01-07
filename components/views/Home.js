import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
const greenOrRed = btcChange => {
  if (Number(btcChange) < 0) {
    document.getElementById("btcPrice").style.color = "red";
  }
};
export default st => html`
  <div class="currentview"><h2>Home</h2></div>
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>
  <p id="btcPrice">
    Bitcoin price is ${st.crypto.btcPrice} ${greenOrRed(st.crypto.change24hr)}
  </p>

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
