export function aboutPage() {
  const content = document.querySelector("#content");
  content.innerHTML = `
    <div id="about-page">
        <h1 id="about-hdr">About Us</h1>
        <div id="about-content">
          <p>
            At The Beanery, coffee is more than just a drink—it’s a passion. Our journey began with a simple goal: to bring people together over expertly crafted, high-quality coffee. From the very
            beginning, we’ve been committed to sourcing the finest beans from sustainable farms around the world, ensuring every cup is a reflection of the care and expertise behind it.
          </p>
          <p>
            Our baristas are dedicated to the art of brewing, roasting each batch to perfection to highlight the unique flavors of every bean. Whether you're a casual coffee lover or a connoisseur, we
            create an experience designed to captivate your senses. At The Beanery, we provide a warm, inviting space where you can relax, connect with friends, and savor the perfect cup of coffee.
          </p>
          <p>At The Beanery, every cup tells a story—one of craftsmanship, community, and a deep love for coffee.</p>
        </div>
      </div>`;
}
