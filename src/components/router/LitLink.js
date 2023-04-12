import { css, html, LitElement } from "lit";

export const navigate = (href) => {
  history.pushState({}, '', href)
  const navigationEvent = new Event('pushstate')
  window.dispatchEvent(navigationEvent)

}

class LitLink extends LitElement {

  static get styles() {
    return css`
      .link {
        text-decoration: none;
        color: #333
      }
    `
  }

  navigate = (e) => {
    e.preventDefault()
    navigate(this.href)
  }

  render() {
    return html`
      <a class="link" @click=${this.navigate} .href=${this.href}><slot></slot></a>
    `
  }
}

customElements.define("lit-link", LitLink)