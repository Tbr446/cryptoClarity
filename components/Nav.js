import html from "html-literal";
import navlogo from "../assets/CryptoClarityC.svg";

export default links => html`
  <nav id="nav-links">
    <!-- CLICKABLE LOGO below NOT WORKING -->
    <a href="#"><img id="navlogo" src="${navlogo}"/></a>
    <ul class="nav-list">
      ${links.map(
        link =>
          `<li id= "link${links.indexOf(link)}"><a href="/${
            link.title
          }" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
  </nav>
`;
