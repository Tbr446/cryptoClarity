import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import axios from "axios";
import Navigo from "navigo";
import { capitalize } from "lodash";
import dotenv from "dotenv";
dotenv.config();

const router = new Navigo(window.location.origin);

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  //STICKY NAV
  window.onscroll = function() {
    stickyNav();
  };

  let navbar = document.getElementById("nav-links");
  let sticky = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  //CALC SECTION

  function agiTest() {
    let agi = document.getElementById("agi").value;
    console.log(agi);
  }
}

//BTC COLOR CHANGE

// const cryptoPrice = {
//   "btc": {
//     "2021-12": "46,674.70",
//     "2021-11": "56,882.90",
//     "2021-10": "61,309.60",
//     "2021-09": "43,823.30",
//     "2021-08": "47,130.40",
//     "2021-07": "41,553.70",
//     "2021-06": "35,026.90",
//     "2021-05": "37,298.60",
//     "2021-04": "57,720.30",
//     "2021-03": "58,763.70",
//     "2021-02": "45,164.00",
//     "2021-01": "33,108.10",
//     "2020-12": "19,698.10",
//     "2020-11": "13,797.30",
//     "2020-10": "10,776.10",
//     "2020-09": "11,644.20",
//     "2020-08": "11,333.40",
//     "2020-07": "9,135.40",
//     "2020-06": "9,454.80",
//     "2020-05": "8,629.00",
//     "2020-04": "6,412.50",
//     "2020-03": "8,543.70",
//     "2020-02": "9,349.10",
//     "2020-01": "7,196.40",
//     "2019-12": "7,546.60",
//     "2019-11": "9,152.60",
//     "2019-10": "8,284.30",
//     "2019-09": "9,594.40",
//     "2019-08": "10,082.00",
//     "2019-07": "10,818.60",
//     "2019-06": "8,558.30",
//     "2019-05": "5,320.80",
//     "2019-04": "4,102.30",
//     "2019-03": "3,816.60",
//     "2019-02": "3,437.20",
//     "2019-01": "3,709.40",
//     "2018-12": "4,039.70",
//     "2018-11": "6,365.90",
//     "2018-10": "6,635.20",
//     "2018-09": "7,033.80",
//     "2018-08": "7,729.40",
//     "2018-07": "6,398.90",
//     "2018-06": "7,502.60",
//     "2018-05": "9,245.10",
//     "2018-04": "6,938.20",
//     "2018-03": "10,333.90",
//     "2018-02": "10,265.40",
//     "2018-01": "13,850.40",
//     "2017-12": "9,946.80",
//     "2017-11": "6,451.20",
//     "2017-10": "4,360.60",
//     "2017-09": "4,735.10",
//     "2017-08": "2,883.30",
//     "2017-07": "2,480.60",
//     "2017-06": "2,303.30",
//     "2017-05": "1,351.90",
//     "2017-04": "1,079.10",
//     "2017-03": "1,189.30",
//     "2017-02": "965.5",
//     "2017-01": "963.4",
//     "2016-12": "742.5",
//     "2016-11": "698.7",
//     "2016-10": "608.1",
//     "2016-09": "573.9",
//     "2016-08": "621.9",
//     "2016-07": "670",
//     "2016-06": "528.9",
//     "2016-05": "448.5",
//     "2016-04": "415.7",
//     "2016-03": "436.2",
//     "2016-02": "369.8",
//     "2016-01": "430",
//     "2015-12": "378",
//     "2015-11": "311.2",
//     "2015-10": "235.9",
//     "2015-09": "229.5",
//     "2015-08": "283.7",
//     "2015-07": "264.1",
//     "2015-06": "229.8",
//     "2015-05": "235.8",
//     "2015-04": "244.1",
//     "2015-03": "254.1",
//     "2015-02": "218.5",
//     "2015-01": "318.2",
//     "2014-12": "374.9",
//     "2014-11": "337.9",
//     "2014-10": "388.2",
//     "2014-09": "481.8",
//     "2014-08": "589.5",
//     "2014-07": "635.1",
//     "2014-06": "627.9",
//     "2014-05": "445.6",
//     "2014-04": "444.7",
//     "2014-03": "573.9",
//     "2014-02": "938.8",
//     "2014-01": "805.9",
//     "2013-12": "1,205.70",
//     "2013-11": "211.2",
//     "2013-10": "141.9",
//     "2013-09": "141",
//     "2013-08": "106.2",
//     "2013-07": "97.5",
//     "2013-06": "128.8",
//     "2013-05": "139.2",
//     "2013-04": "93",
//     "2013-03": "33.4",
//     "2013-02": "20.4",
//     "2013-01": "13.5",
//     "2012-12": "12.6",
//     "2012-11": "11.2",
//     "2012-10": "12.4",
//     "2012-09": "10.2",
//     "2012-08": "9.4",
//     "2012-07": "6.7",
//     "2012-06": "5.2",
//     "2012-05": "4.9",
//     "2012-04": "4.9",
//     "2012-03": "4.9",
//     "2012-02": "5.5",
//     "2012-01": "4.7",
//     "2011-12": "3",
//     "2011-11": "3.3",
//     "2011-10": "5.1",
//     "2011-09": "8.2",
//     "2011-08": "13.4",
//     "2011-07": "16.1",
//     "2011-06": "8.7",
//     "2011-05": "3.5",
//     "2011-04": "0.8",
//     "2011-03": "0.9",
//     "2011-02": "0.5",
//     "2011-01": "0.3",
//     "2010-12": "0.2",
//     "2010-11": "0.2",
//     "2010-10": "0.1",
//     "2010-09": "0.1"
//   }
// };

// router.hooks({
//   before: (done, params) => {
//     const page =
//       // eslint-disable-next-line no-prototype-builtins
//       params && params.hasOwnProperty("page")
//         ? capitalize(params.page)
//         : "Home";

//     if (page === "Home") {
//       axios
//         .get(
//           `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
//         )
//         .then(response => {
//           state.Home.weather = {};
//           state.Home.weather.city = response.data.name;
//           state.Home.weather.temp = response.data.main.temp;
//           state.Home.weather.feelsLike = response.data.main.feels_like;
//           state.Home.weather.description = response.data.weather[0].main;
//           done();
//         })
//         .catch(err => console.log(err));
//     }

//     if (page === "Home") {
//       axios
//         .get(
//           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
//         )
//         .then(response => {
//           state.Home.crypto = {};
//           state.Home.crypto.btcPrice = response.data.bitcoin.usd;
//           state.Home.crypto.change24hr = response.data.bitcoin.usd_24h_change;

//           done();
//         })
//         .catch(error => {
//           console.log("It puked", error);
//         });
//     }
//   }
// });

router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
