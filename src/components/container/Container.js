import { LitElement, css, html } from "lit";

class Container extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        max-width: 1200px;
        padding: 5px 20px;
        margin: 0 auto;
      }
    `
  }

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `
  }
}

customElements.define("big-container", Container)