import { LitElement, html } from "lit";

class TemplatePage extends LitElement {
  render() {
    return html`
      <header-nav></header-nav>
      <big-container>
        <slot></slot>
      </big-container>
    `
  }
}

customElements.define("template-page", TemplatePage)