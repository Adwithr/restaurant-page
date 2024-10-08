export function homePage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
  <div id="home-page">
        <div id="home-page-txt">
          <div id="home-page-main-txt">
            Crafted with Care,<br />
            Brewed to Perfection.
          </div>
          <div id="home-page-info-txt">
            Our expertly crafted specialty coffee is roasted to perfection, bringing out<br />
            the unique flavors of each bean. Every cup is brewed with care and precision,<br />
            offering an unforgettable coffee experience.
          </div>
          <div id="home-page-content-btns">
            <button class="menu-nav">MENU</button>
            <button class="about-nav">LEARN MORE</button>
          </div>
        </div>
      </div>`;
}
