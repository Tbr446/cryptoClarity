import html from "html-literal";

const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

export default st => html`
  <h3>
    Temperature in ${st.weather.city} is
    ${kelvinToFahrenheit(st.weather.temp)}F. It feels like
    ${kelvinToFahrenheit(st.weather.feelsLike)}F.
  </h3>
  <section id="jumbotron">
    <h2>Home</h2>
  </section>
  <div class="home-section">
    <div class="btc">
      <img
        src="https://www.investopedia.com/thmb/_Mj32d8tO6QSO-t6eH3-oLiteKQ=/1828x800/filters:no_upscale():max_bytes(150000):strip_icc()/BTC_ALL_graph_coinmarketcap-d9e91016679f4f69a186e0c6cdb23d44.jpg"
      />
    </div>
    <div class="eth">
      <img
        src="https://www.statista.com/graphic/1/806453/price-of-ethereum.jpg"
      />
    </div>
  </div>
  <div id="overlap"></div>

  <a
    href=""
    onClick="alert('Hello! Welcome to CryptoClarity, get ready to learn!')"
    >"Where am I???"</a
  >
`;
