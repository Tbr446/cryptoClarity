import html from "html-literal";

export default st => html`
  <section class="invest">
    <form id="fomocalc-form" onsubmit="return false">
      <div class="fomocalc-container">
        <ul>
        <li class="fomolabel">
          <h1 class="fomolabel">BITCOIN FOMO CALCULATOR</h1>
          <div class="info">Dollar Cost Averaging is a great way to begin investing. 1) Choose a lump sum that you would like to invest. 2) Choose a time frame for this investment. 3) Choose an interval for investing (ex: once a week, bi-weekly, monthly) </div>
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
        <div class="info">Dollar Cost Averaging is a great way to begin investing. 1) Choose a lump sum that you would like to invest. 2) Choose a time frame for this investment. 3) Choose an interval for investing (ex: once a week, bi-weekly, monthly) </div>
        </li></ul>
        <div class="taxcalc">
          <label for="agi">AGI</label>
          <input type="number" id="agi" name="agi" />

          <label for="purch-price">Purchase Price</label>
          <input type="number" id="purch-price" name="purch" />

          <label for="purch-date">Purchase Date</label>
          <input type="date" id="purch-date" name="purch-date" />

          <label for="sale-price">Sale Price</label>
          <input type="number" id="sale-price" name="sale" />

          <label for="sale-date">Sale Date</label>
          <input type="date" id="purch-date" name="sale-date" />
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
