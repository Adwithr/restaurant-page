export function menuPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
    <div id="menu-page">
        <h1 id="menu-hdr">Menu</h1>
        <div id="menu-content">
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Espresso</h3>
              <p class="item-info">A rich and bold shot of pure coffee, perfect for a quick pick-me-up.</p>
            </div>
            <div class="item-price">$3.50</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Cappuccino</h3>
              <p class="item-info">A delightful balance of espresso, steamed milk, and a thick layer of foam.</p>
            </div>
            <div class="item-price">$4.00</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Latte</h3>
              <p class="item-info">Smooth espresso with steamed milk and a light touch of foam, a creamy classic.</p>
            </div>
            <div class="item-price">$4.50</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Mocha</h3>
              <p class="item-info">A rich combination of espresso, chocolate, and steamed milk topped with whipped cream.</p>
            </div>
            <div class="item-price">$5.00</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Flat White</h3>
              <p class="item-info">Silky steamed milk poured over a smooth shot of espresso for a velvety experience.</p>
            </div>
            <div class="item-price">$4.25</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Americano</h3>
              <p class="item-info">Espresso diluted with hot water, offering a similar strength but a less intense flavor.</p>
            </div>
            <div class="item-price">$3.75</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Macchiato</h3>
              <p class="item-info">A shot of espresso "marked" with a small amount of foamed milk.</p>
            </div>
            <div class="item-price">$3.80</div>
          </div>
          <div class="line"></div>
          <div class="menu-item">
            <div class="item-left">
              <h3 class="item-name">Cold Brew</h3>
              <p class="item-info">Coffee brewed cold for a smoother and less acidic flavor, served over ice.</p>
            </div>
            <div class="item-price">$4.75</div>
          </div>
        </div>
      </div>`;
}
