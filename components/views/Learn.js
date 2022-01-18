import html from "html-literal";

export default st => html`
  <div class="main-container">
    <h1 id="learn-title">Learn</h1>
    <div class="learn-container">
      <div class="learn-flexbox learn-item1">
        <h3>What is cryptocurrency?</h3>

        <p>
          Cryptocurrency, known as crypto, is a form of virtual currency that
          runs on a cryptographic systems which makes it extremely secure.
          Almost all cryptocurrencies are decentralized and run on top of
          blockchain technology.
        </p>
      </div>

      <div class="learn-flexbox learn-item2">
        <h3>What makes crypto special?</h3>

        <p>
          Crypto is the first instance of a truely scare digital asset. In the
          past, people have <em>always</em> been able to copy digital goods,
          because the digital goods are ultimately comprised of a long string of
          1's and 0's. With the introduction of blockchain technology
        </p>
      </div>

      <div class="learn-flexbox learn-item3">
        <h3>What potential does crypto have?</h3>

        <p>
          The potential impacts of cryptocurrency are massive. With a truly
          decentralized currency, there are no bad players in the equation-
          leaders of countries would not be able to devalue it like they have
          the ability to do with their national currencies.
        </p>
      </div>

      <div class="learn-flexbox learn-item4">
        <h3>How many cryptocurrencies are out there?</h3>

        <p>
          Thousands. Because blockchains can be implemented by any programmer
          with the necessary knowledge, and blockchain is what cryptocurrency
          runs on, new cryptocurrencies are created every day. This makes it
          extremely difficult to know where to start.
        </p>
      </div>

      <div class="learn-flexbox learn-item5">
        <h3>Where do I start?</h3>

        <p>
          Start with the first cryptocurrency ever created.
          <a
            class="btcPDF"
            href="https://bitcoin.org/bitcoin.pdf"
            target="_blank"
            download
            ><strong>Download the Bitcoin whitepaper here</strong></a
          >
        </p>
      </div>
    </div>
  </div>
`;
