import html from "html-literal";

export default st => html`
  <h1 id="learn-title">Learn</h1>
  <div class="learn-container">
    <h1 id="learn-title">Learn</h1>
    <div class="learn-flexbox learn-item1">
      <h3>What does it mean to invest?</h3>

      <p>
        Investing is a strategy that is used to grow and maintain the value of
        money.
      </p>
    </div>

    <div class="learn-flexbox learn-item2">
      <h3>Who can invest?</h3>

      <p>
        Historically ${Number(cryptoPrice.btc.b202112) * 10}, investing has been
        a tool used primarily by wealthy asset owners. After the invention of
        the internet, though, investing has been made increasingly accessible
        for everyone. Within the past five years, a number of applications have
        been created that bring the power of investing to anyone who has a bank
        account and a smart phone with internet access.
      </p>
    </div>

    <div class="learn-flexbox learn-item3">
      <h3>What is inflation?</h3>

      <p>
        Our current money supply runs on a concept called inflation. Inflation
        happens when the overall money supply is increased, resulting in the
        value of each dollar gradually dropping over time; the rate at which the
        value drops is known as the inflation rate. The typical inflation rate
        is 2-3% per year, meaning that if you have your money sitting a piggy
        bank, it will be worth 2-3% less next year. This concept highlights the
        importance of investing.
      </p>
    </div>

    <div class="learn-flexbox learn-item4">
      <h3>Why is it important to invest?</h3>

      <p>
        While inflation causes money to lose value over time, investing
        correctly can result in money gaining value over time. Although it is
        very possible to lose everything as a result of investing incorrectly,
        there are many tools that make it possible to invest with minimal risk.
        Investing correctly can lead to massive wealth generation, this is made
        possible through a process called compound interest.
      </p>
    </div>

    <div class="learn-flexbox learn-item5">
      <h3>What is compound interest?</h3>

      <p>
        Compound interest, by definition, is "interest on interest". To
        illustrate the power of compound interest, imagine receiving one magic
        penny that every day. It may seem unbelievable, but after 30 days, you
        would have $5,368,709. The "interest" rate, in this case, would be 100%
        because the amount is doubling every day. In a safe investing
        environment, you can expect to receive much less, closer to 8-10% per
        year. Although 8-10% doesn't sound like much, it can turn a relatively
        small amount of money into millions over a long enough time span.
      </p>
    </div>
  </div>
  <p>
    <a
      class="btcPDF"
      href="https://bitcoin.org/bitcoin.pdf"
      target="_blank"
      download
      ><strong>Download</strong></a
    >
    the Bitcoin whitepaper here
  </p>
  <p>
    <a
      class="btcPDF"
      href="https://bitcoin.org/bitcoin.pdf"
      target="_blank"
      download
      ><strong>Download the Bitcoin whitepaper here</strong></a
    >
  </p>
`;

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
