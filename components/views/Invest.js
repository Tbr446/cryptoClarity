import html from "html-literal";

export default st => html`
  <section class="invest">
    <form id="fomocalc-form" onsubmit="return false">
      <div class="fomocalc-container">
        <ul>
        <li class="fomolabel">
          <h1 class="fomolabel">BITCOIN FOMO CALCULATOR</h1>
          <div class="info">FOMO stands for "Fear of Missing Out". Enter a US dollar amount and a date (mm/yyyy) between today and September 2010, and find out how much it would be worth today if you had invested it in Bitcoin.</div>
      </li>
        </ul>
        <div class="fomocalc">
          <label for="start">Buy date:</label>

          <input
            type="month"
            id="start"
            name="invest-start"
            placeholder="March 2015"
          />
          <label for="amount">Amount Purchased (in USD):</label>

          <input type="number" id="amount" name="USDamount" step="100" />
          <button class="submit fas fa-calculator fa-2x"></button>
        </div>
      </div>
    </form>
    <form id="cap-gain-form" onsubmit="return false">
      <div class="tax-rate-calc">
        <ul ><li class="tax-label">
        <h1 class="tax-label">CAPITAL GAINS TAX CALCULATOR</h1>
        <div class="info"> <p>Capital Gain taxes are the taxes you pay on <em>investment gains</em>. It can be hard to know what your tax liability might be as a result of an investment gain and crypto exchanges rarely alert you to the potential  tax consequences of selling crypto for a profit. This calculator will give you a ballpark estimate of taxes due for any given gain based on 2022 tax rates.</p></div>
        </li></ul>
        <div class="taxcalc">
          <label for="taxable-income">Taxable Income</label>
          <input type="number" id="taxable-income" name="taxable-income" />

          <label for="purch-price">Purchase Price</label>
          <input type="number" id="purch-price" name="purch" />

          <label for="sale-price">Sale Price</label>
          <input type="number" id="sale-price" name="sale" />

          <label for="hold-term">Check for Long-Term (Held for over 1 yr)</label>
          <input type="checkbox" id="hold-term" name="hold-term" />

          </form>
          <button
            class="submit fas fa-calculator fa-2x"
            type="submit"
            form="cap-gain-form"
            onclick="agiTest()"
          ></button>

        </div>
      </div>

    <form id="dca-form" onsubmit="return false">
      <div class="dca-calc">
        <ul><li class="dca-label"><h1 class="dca-label">DOLLAR COST AVERAGE CALCULATOR</h1>
        <div class="info">Dollar Cost Averaging is a great way to begin investing. 1) Choose a lump sum that you would like to invest. 2) Choose a time frame for this investment. 3) Choose an interval for investing (ex: once a week, bi-weekly, monthly) </div>
        </li></ul>
        <div class="dca-calc-inner">
          <label for="lumpsum">Lump Sum to Invest</label>
          <input type="number" id="lumpsum" name="lumpsum" />

          <label for="purch-price">Purchase Price</label>
          <input type="number" id="purch-price" name="purch" />

          <label for="purch-date">Purchase Date</label>
          <input type="date" id="purch-date" name="purch-date" />

          <label for="sale-price">Sale Price</label>
          <input type="number" id="sale-price" name="sale" />

          <label for="sale-date">Sale Date</label>
          <input type="date" id="purch-date" name="sale-date" />
          <button class="submit fas fa-calculator fa-2x"></button>
        </div>
      </div>
    </form>
  </section>
`;
//BTC FOMO CALC
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

const fomoAns = [];

function fomoCalc(date, amount) {
  const ans = Number(cryptoPrice.btc.date) * amount * crypto.btcPrice;
  fomoAns.push(ans);
}

console.log(fomoCalc("b201010", 500));
//^^^^NEED TO GET ^^^ API TO ^^^ WORK BEFORE ^^^^^ THIS CALC ^^^^^ WILL WORK

//CAP GAIN TAX CALC BELOW
function taxCalc(purchPrice, sellPrice, longTerm, agi) {
  class Tax {
    constructor(purchPrice, sellPrice, longTerm, agi) {
      this.purchPrice = purchPrice;
      this.sellPrice = sellPrice;
      this.longTerm = longTerm;
      this.agi = agi;
      this.gain = sellPrice - purchPrice;
    }
  }

  const taxes = new Tax(purchPrice, sellPrice, longTerm, agi);

  const due = {
    bracket: "",
    owed: "",
    effective: "",
    ltRate: ""
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

  due.effective = due.owed / taxes.agi;

  if (longTerm == false) {
    due.capGainTax = taxes.gain * due.effective;
  } else {
    due.capGainTax = taxes.gain * due.ltRate;
  }

  console.log(due);
}
taxCalc(1000, 21000, 1, 207050);

//DCA CALC BELOW
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

  if (interval === "Daily") {
    dollarCost.amount = userInput.sum / userInput.time;
    dollarCost.userInterval = "day";
  }

  if (interval === "Weekly") {
    dollarCost.amount = userInput.sum / (userInput.time / 7);
    dollarCost.userInterval = "week";
  }

  if (interval === "Bi-Weekly") {
    dollarCost.amount = userInput.sum / (userInput.time / 14);
    dollarCost.userInterval = "two weeks";
  }

  if (interval === "Monthly") {
    dollarCost.amount = userInput.sum / (userInput.time / 30);
    dollarCost.userInterval = "month";
  }

  const ans = `You will need to invest ${dollarCost.amount} dollars every ${dollarCost.userInterval} for the next ${dollarCost.horizon} days`;

  console.log(ans);
}

dca(50000, 180, "Weekly");
