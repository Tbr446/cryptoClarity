import html from "html-literal";

export default st => html`
  <section id="jumbotron">
    <h2>Invest</h2>
  </section>

  <section class="invest-container">
    <div class="invest-flexbox invest-item1">
      <h3>What does it mean to invest?</h3>

      <p>
        Investing is a strategy that is used to grow and maintain the value of
        money.
      </p>
    </div>

    <div class="invest-flexbox invest-item2">
      <h3>Who can invest?</h3>

      <p>
        Historically, investing has been a tool used primarily by wealthy asset
        owners. After the invention of the internet, though, investing has been
        made increasingly accessible for everyone. Within the past five years, a
        number of applications have been created that bring the power of
        investing to anyone who has a bank account and a smart phone with
        internet access.
      </p>
    </div>

    <div class="invest-flexbox invest-item3">
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

    <div class="invest-flexbox invest-item4">
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

    <div class="invest-flexbox invest-item5">
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
  </section>

  <section class="fomocalc-container">
    <label for="start">Buy date:</label>

    <input
      type="month"
      id="start"
      name="trip-start"
      min="2018-01"
      max="2018-12-31"
    />
  </section>
`;
