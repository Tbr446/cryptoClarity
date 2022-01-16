import html from "html-literal";

export default st => html`
  <section class="invest">
  ${st.crypto.btcPrice}

  <div class="main-container">
    <form id="fomocalc-form" name="fomoCalcForm" onsubmit="return false">
      <div class="fomocalc-container">
        <ul>
        <li class="fomolabel">
          <h1 class="fomolabel">BITCOIN FOMO CALCULATOR</h1>
          <div class="info">FOMO stands for "Fear of Missing Out". Enter a US dollar amount and a date (mm/yyyy) between today and September 2010, and find out how much it would be worth today if you had invested it in Bitcoin. </div>
      </li>
        </ul>
        <div class="fomocalc">
          <label for="start">Buy date:</label>

          <input
            type="month"
            id="start"
            name="investStart"
            placeholder="March 2015"
          />
          <label for="amount">Amount Purchased (in USD):</label>

          <input type="number" id="amount" name="USDamount" step="100" />
          <button type="button" id="fomoButton" class="submit fas fa-calculator fa-2x"></button>
          <input type="reset" />
        </div>
      </div>
    </form>
    <div id="trans3" class="answer-container-fomo">
    <p>If you had invested <span id="btcAmount"></span> in Bitcoin sometime in <span id="btcDate"></span>, you would have close to <span id="today"></span> today.</p>
    </div>
    <form name="capGain" id="cap-gain-form" onsubmit="return false">
      <div class="tax-rate-calc">
        <ul ><li class="tax-label">
        <h1 class="tax-label">CAPITAL GAINS TAX CALCULATOR</h1>
        <div class="info"> <p>Capital Gain taxes are the taxes you pay on <em>investment gains</em>. It can be hard to know what your tax liability might be as a result of an investment gain and crypto exchanges rarely alert you to the potential  tax consequences of selling crypto for a profit. This calculator will give you a ballpark estimate of taxes due for any given gain based on 2022 tax rates.</p></div>
        </li></ul>
        <div class="taxcalc">
          <label for="taxable-income">Taxable Income</label>
          <input type="number" id="taxable-income" name="taxableincome" />

          <label for="purch-price">Purchase Price</label>
          <input type="number" id="purch-price" name="purchase" />

          <label for="sale-price">Sale Price</label>
          <input type="number" id="sale-price" name="sale" />

          <label for="hold-term">Long Term or Short Term (Held over/under 1yr)</label>
          <select id="hold-term" name="holdterm">
            <option value="1">Long Term</option>
            <option value="">Short Term</option>
            </select>


          <button
            id="tax-button" class="submit fas fa-calculator fa-2x"
            type="button"
            form="cap-gain-form"

          ></button>
          <input type="reset" />
          </form>
        </div>
      </div>
      <div  id="trans2" class="answerContainerCapGain hideCapGain">
      <p id="tax-gain">Your total gain is <span id="gain"></span></p>
      <p id="cap">Your estimated tax on <em><strong>this gain</strong></em> is <span id="cap-gain"></span></p>
      <p id="tax-bracket">Your tax bracket is <span id="bracket" ></span></p>
      <p id="tax-effective">Your effective tax rate is <span id="effective" ></span></p>
      <p class="tax-owed">The total tax you will owe for 2022 is around <span id="owed"></span></p>
      </div>
    <form id="dcaForm" name ="dcaForm" onsubmit="return false">
      <div class="dca-calc">
        <ul><li class="dca-label"><h1 class="dca-label">DOLLAR COST AVERAGE CALCULATOR</h1>
        <div class="info">Dollar Cost Averaging is a great way to begin investing. 1) Choose a lump sum that you would like to invest. 2) Choose a time frame for this investment. 3) Choose an interval for investing (ex: once a week, bi-weekly, monthly) </div>
        </li></ul>
        <div class="dca-calc-inner">
          <label for="lumpsum">Lump Sum to Invest</label>
          <input type="number" id="lumpsum" name="lumpsum" />

          <label for="time">Time Horizon (in days)</label>
          <input type="number" id="time" name="time" />

          <label for="interval">Contribution Interval</label>
          <select id="interval" name="interval">
          <option value="1">Daily</option>
            <option value="7">Weekly</option>
            <option value="14">Bi-Weekly</option>
            <option value="30">Monthly</option>
            </select>


          <button type="button" id="dca" form="dca-form" class="submit fas fa-calculator fa-2x"></button>
          <input type="reset" />
        </div>
      </div>
    </form>
    <div id="trans1" class="answer-container-dca hidden">
      <p id="dcaP"></p>

      </div>
      <div> </div>
  </section>
`;
