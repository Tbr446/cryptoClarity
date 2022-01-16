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
//FUNCTION FOR CONVERTING TO USD FORMAT
const usDollarize = amount => {
  let input = amount;
  let stringVersion = input.toString();
  let arr = [];
  for (const i in stringVersion) {
    arr.push(stringVersion[stringVersion.length - i - 1]);
  }
  let ans = [];
  let inc = 0;
  for (let i in arr) {
    ans.push(arr[i]);
    if ((ans.length - inc) % 3 === 0) {
      ans.push(",");
      inc++;
    }
  }
  let final = [];
  for (let i in ans) {
    final.push(ans[ans.length - i - 1]);
  }
  if (final.length % 4 === 0) {
    final.shift();
  }
  let answer = final.join("");
  answer = "$" + answer;
  return answer;
};
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
      document.getElementById("gain").innerHTML = due.gain;
      document.getElementById("bracket").innerHTML = due.bracket;
      document.getElementById("effective").innerHTML = due.effective;
      document.getElementById("owed").innerHTML = due.owed;
      document.getElementById("cap-gain").innerHTML = due.capGainTax;
    }

    taxCalc(parseInt(taxinc), parseInt(purch), parseInt(sale), parseInt(term));
  });
  document.querySelector("#tax-button").addEventListener("click", () => {
    const trans = document.getElementById("trans2");
    trans.style.opacity = 1;
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
    let histPrice = Number(cryptoPrice.btc[final]);
    console.log(histPrice);
    const answer = (amount / histPrice) * state.Home.crypto.btcPrice;
    console.log(answer);
    document.getElementById("btcAmount").innerHTML = usDollarize(amount);
    //convert date to readable
    function dateConv(date2) {
      let date = date2;
      let year = date.slice(0, 4);
      let month = Number(date.slice(5, 7));
      let match = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let ans = `${match[month]} ${year}`;
      return ans;
    }
    document.getElementById("btcDate").innerHTML = dateConv(date);
    document.getElementById("today").innerHTML = usDollarize(parseInt(answer));

    //^^^^^ ONLY OPEN FOR REAL TIME BTC PRICE
  });
  document.querySelector("#fomoButton").addEventListener("click", () => {
    const trans = document.getElementById("trans3");
    trans.style.opacity = 1;
  });

  // -------DCA CALC------
  document.getElementById("dca").addEventListener("click", () => {
    let sum = window.document.dcaForm.lumpsum.value;
    let time = window.document.dcaForm.time.value;
    let interval = window.document.dcaForm.interval.value;
    function dca(sum, time, interval) {
      class Dca {
        constructor(sum, time, interval) {
          this.sum = sum;
          this.time = time;
          this.interval = interval;
        }
      }

      const userInput = new Dca(sum, time, interval);

      const dollarCost = {
        amount: "",
        horizon: userInput.time,
        userInterval: userInput.interval
      };

      if (interval === 1) {
        dollarCost.amount = userInput.sum / userInput.time;
        dollarCost.userInterval = "day";
      }

      if (interval === 7) {
        dollarCost.amount = userInput.sum / (userInput.time / 7);
        dollarCost.userInterval = "week";
      }

      if (interval === 14) {
        dollarCost.amount = userInput.sum / (userInput.time / 14);
        dollarCost.userInterval = "two weeks";
      }

      if (interval === 30) {
        dollarCost.amount = userInput.sum / (userInput.time / 30);
        dollarCost.userInterval = "month";
      }

      const ans = `You will need to invest ${dollarCost.amount} dollars every ${dollarCost.userInterval} for the next ${dollarCost.horizon} days`;

      console.log(ans);
      document.getElementById("dcaP").innerHTML = ans;
    }
    dca(parseInt(sum), parseInt(time), parseInt(interval));
  });
  document.querySelector("#dca").addEventListener("click", () => {
    const trans = document.getElementById("trans1");
    trans.style.opacity = 1;
  });
  // HIDE/UNHIDE BELOW (NOT WORKING IN COMBO WITH TRANSITION)
  // document.querySelector("#dca").addEventListener("click", () => {
  //   document.querySelector(".answer-container-dca").classList.toggle("hidden");
  // });
}

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
          state.Home.crypto.btcPriceUSD = usDollarize(
            response.data.bitcoin.usd
          );

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
    if (page === "Invest") {
      console.log("CRYPTO", state.Home.crypto);
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true`
        )
        .then(response => {
          state.Invest.crypto = {};
          state.Invest.crypto.btcPrice = response.data.bitcoin.usd;
          state.Invest.crypto.change24hr = response.data.bitcoin.usd_24h_change;
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
