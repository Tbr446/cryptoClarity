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
  let logo = document.getElementById("navlogo");
  let sticky = navbar.offsetTop;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  //------------------CALC SECTION------------------
  // CAP GAIN CALC
  document.getElementById("tax-button").addEventListener("click", () => {
    let taxinc = window.document.capGain.taxableincome.value;
    let purch = window.document.capGain.purchase.value;
    let sale = window.document.capGain.sale.value;
    let term = window.document.capGain.holdterm.value;
    console.log(taxinc, purch, sale, term);
    function taxCalc(agi, purchPrice, sellPrice, longTerm) {
      class Tax {
        constructor(agi, purchPrice, sellPrice, longTerm) {
          this.purchPrice = purchPrice;
          this.sellPrice = sellPrice;
          this.longTerm = longTerm;
          this.agi = agi;
          this.gain = sellPrice - purchPrice;
        }
      }

      const taxes = new Tax(agi, purchPrice, sellPrice, longTerm);

      const due = {
        bracket: "",
        owed: "",
        effective: "",
        ltRate: "",
        gain: ""
      };

      if (taxes.agi <= 10275) {
        due.bracket = 0.1;
        due.owed = taxes.agi * 0.1;
        due.ltRate = 0;
      }
      if (taxes.agi > 10275 && taxes.agi < 41776) {
        due.bracket = 0.12;
        due.owed = 1027.5 + 0.12 * (taxes.agi - 10275);
        due.ltRate = 0;
      }
      if (taxes.agi > 41775 && taxes.agi < 89076) {
        due.bracket = 0.22;
        due.owed = 4807.5 + 0.22 * (taxes.agi - 41775);
        due.ltRate = 0.15;
      }
      if (taxes.agi > 89075 && taxes.agi < 170050) {
        due.bracket = 0.24;
        due.owed = 15213.5 + 0.24 * (taxes.agi - 89075);
        due.ltRate = 0.15;
      }
      if (taxes.agi > 170050 && taxes.agi < 215950) {
        due.bracket = 0.32;
        due.owed = 34647.5 + 0.32 * (taxes.agi - 170050);
        due.ltRate = 0.15;
      }
      if (taxes.agi > 215950 && taxes.agi < 539900) {
        due.bracket = 0.35;
        due.owed = 49335.5 + 0.35 * (taxes.agi - 215950);
        due.ltRate = 0.2;
        if (taxes.agi < 459750) {
          due.ltRate = 0.15;
        }
      }
      if (taxes.agi > 539899) {
        due.bracket = 0.37;
        due.owed = 162718 + 0.37 * (taxes.agi - 539900);
        due.ltRate = 0.2;
      }
      due.gain = taxes.gain;

      due.effective = due.owed / taxes.agi;

      if (longTerm == false) {
        due.capGainTax = taxes.gain * due.effective;
      } else {
        due.capGainTax = taxes.gain * due.ltRate;
      }
      console.log(taxes);

      console.log(due);
    }

    taxCalc(parseInt(taxinc), parseInt(purch), parseInt(sale), parseInt(term));
  });

  // BTC FOMO CALC
  document.getElementById("fomoButton").addEventListener("click", () => {
    let date = window.document.fomoCalcForm.investStart.value;
    let amount = window.document.fomoCalcForm.USDamount.value;
    console.log(date.length);
    // formatting date output to match object keys
    let newDate = [];
    for (let i = 0; i < date.length; i++) {
      newDate.push(date[i]);
    }
    console.log(newDate);
    let test = newDate.map((item, i) => {
      return item;
    });
    test.splice(4, 1);
    test.unshift("b");
    let final = test
      .map(item => {
        return item;
      })
      .join("");

    console.log(final);
    const cryptoPrice = {
      btc: {
        b202112: "46674.70",
        b202111: "56882.90",
        b202110: "61309.60",
        b202109: "43823.30",
        b202108: "47130.40",
        b202107: "41553.70",
        b202106: "35026.90",
        b202105: "37298.60",
        b202104: "57720.30",
        b202103: "58763.70",
        b202102: "45164.00",
        b202101: "33108.10",
        b202012: "19698.10",
        b202011: "13797.30",
        b202010: "10776.10",
        b202009: "11644.20",
        b202008: "11333.40",
        b202007: "9135.40",
        b202006: "9454.80",
        b202005: "8629.00",
        b202004: "6412.50",
        b202003: "8543.70",
        b202002: "9349.10",
        b202001: "7196.40",
        b201912: "7546.60",
        b201911: "9152.60",
        b201910: "8284.30",
        b201909: "9594.40",
        b201908: "10082.00",
        b201907: "10818.60",
        b201906: "8558.30",
        b201905: "5320.80",
        b201904: "4102.30",
        b201903: "3816.60",
        b201902: "3437.20",
        b201901: "3709.40",
        b201812: "4039.70",
        b201811: "6365.90",
        b201810: "6635.20",
        b201809: "7033.80",
        b201808: "7729.40",
        b201807: "6398.90",
        b201806: "7502.60",
        b201805: "9245.10",
        b201804: "6938.20",
        b201803: "10333.90",
        b201802: "10265.40",
        b201801: "13850.40",
        b201712: "9946.80",
        b201711: "6451.20",
        b201710: "4360.60",
        b201709: "4735.10",
        b201708: "2883.30",
        b201707: "2480.60",
        b201706: "2303.30",
        b201705: "1351.90",
        b201704: "1079.10",
        b201703: "1189.30",
        b201702: "965.5",
        b201701: "963.4",
        b201612: "742.5",
        b201611: "698.7",
        b201610: "608.1",
        b201609: "573.9",
        b201608: "621.9",
        b201607: "670",
        b201606: "528.9",
        b201605: "448.5",
        b201604: "415.7",
        b201603: "436.2",
        b201602: "369.8",
        b201601: "430",
        b201512: "378",
        b201511: "311.2",
        b201510: "235.9",
        b201509: "229.5",
        b201508: "283.7",
        b201507: "264.1",
        b201506: "229.8",
        b201505: "235.8",
        b201504: "244.1",
        b201503: "254.1",
        b201502: "218.5",
        b201501: "318.2",
        b201412: "374.9",
        b201411: "337.9",
        b201410: "388.2",
        b201409: "481.8",
        b201408: "589.5",
        b201407: "635.1",
        b201406: "627.9",
        b201405: "445.6",
        b201404: "444.7",
        b201403: "573.9",
        b201402: "938.8",
        b201401: "805.9",
        b201312: "1,205.70",
        b201311: "211.2",
        b201310: "141.9",
        b201309: "141",
        b201308: "106.2",
        b201307: "97.5",
        b201306: "128.8",
        b201305: "139.2",
        b201304: "93",
        b201303: "33.4",
        b201302: "20.4",
        b201301: "13.5",
        b201212: "12.6",
        b201211: "11.2",
        b201210: "12.4",
        b201209: "10.2",
        b201208: "9.4",
        b201207: "6.7",
        b201206: "5.2",
        b201205: "4.9",
        b201204: "4.9",
        b201203: "4.9",
        b201202: "5.5",
        b201201: "4.7",
        b201112: "3",
        b201111: "3.3",
        b201110: "5.1",
        b201109: "8.2",
        b201108: "13.4",
        b201107: "16.1",
        b201106: "8.7",
        b201105: "3.5",
        b201104: "0.8",
        b201103: "0.9",
        b201102: "0.5",
        b201101: "0.3",
        b201012: "0.2",
        b201011: "0.2",
        b201010: "0.1",
        b201009: "0.1"
      }
    };
    //get historical price
    let lol = Number(cryptoPrice.btc[final]);
    console.log(lol);
    const answer = amount / lol;
  });
}

//^^^^^ ONLY OPEN FOR REAL TIME BTC PRICE

// const cryptoPrice = {
//   btc: {
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

router.hooks({
  before: (done, params) => {
    const page =
      // eslint-disable-next-line no-prototype-builtins
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    if (page === "Home") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
        )
        .then(response => {
          state.Home.weather = {};
          state.Home.weather.city = response.data.name;
          state.Home.weather.temp = response.data.main.temp;
          state.Home.weather.feelsLike = response.data.main.feels_like;
          state.Home.weather.description = response.data.weather[0].main;
          done();
        })
        .catch(err => console.log(err));
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true`
        )
        .then(response => {
          state.Home.crypto = {};
          state.Home.crypto.btcPrice = response.data.bitcoin.usd;
          state.Home.crypto.change24hr = response.data.bitcoin.usd_24h_change;

          const greenOrRed = change => {
            if (change < 0) {
              console.log("negative");
              state.Home.crypto.styling = "btc-down";
            }
            if (change > 0) {
              console.log("positive");
              state.Home.crypto.styling = "btc-up";
            }
          };
          greenOrRed(state.Home.crypto.change24hr);

          done();
        })
        .catch(error => {
          console.log("It puked", error);
        });
    }
  }
});

router
  .on({
    ":view": params => render(state[capitalize(params.view)]),
    "/": () => render(state.Home)
  })
  .resolve();
