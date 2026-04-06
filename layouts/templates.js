class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="header">
            <a class="land" href="/"><span>GARY </span><span>WANG</span></a>
            <div class="header-right">
                <div class="header-links">
                    <a href="/about/">about</a>
                    <a href="/portfolio/">portfolio</a>
                    <a href="/blog/">blog</a>
                    <a href="/books/">books</a>
                </div>
            </div>
            <img src="/public/images/IMG_1865.jpg" alt="headshot">
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
      <!-- Standard favicon -->
      <link rel="icon" type="image/x-icon" href="/public/favicon_io/favicon.ico">
      
      <!-- PNG for modern browsers -->
      <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon_io/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon_io/-16x16.png">
      
      <!-- Apple devices -->
      <link rel="apple-touch-icon" sizes="180x180" href="/public/favicon_io/apple-touch-icon.png">
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute('text') || '';
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <span class="footer-copy">&copy; ${year} Gary Wang</span>
          ${text ? `<span class="footer-text">${text}</span>` : ''}
        </div>
      </footer>
    `;
  }
}

customElements.define('site-head', SiteHead);
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
