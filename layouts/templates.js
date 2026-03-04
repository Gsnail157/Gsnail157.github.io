class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="header">
            <a class="land" href="../"><span>GARY </span><span>WANG</span></a>
            <div class="header-right">
                <div class="header-links">
                    <a href="../about/">about</a>
                    <a href="../portfolio/">portfolio</a>
                    <a href="../blog/">blog</a>
                    <a href="../books/">books</a>
                </div>
            </div>
            <img src="../public/images/IMG_1865.jpg" alt="headshot">
            <hr class="header-hr">
        </div>
    `;
  }
}

class SiteHead extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || 'Gary Wang';

    document.head.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <link rel="stylesheet" href="/styles/main.css">
    `;
  }
}

customElements.define('site-head', SiteHead);
customElements.define('site-header', SiteHeader);
