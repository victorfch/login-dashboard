import { css, html, LitElement } from "lit";

class Header extends LitElement {

  static get properties() {
    return {
      isOpen: {type: Boolean}
    }
  }

  static get styles() {
    return css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 100%;
        background: #00bfff;
        padding: 20px 40px;
        font-size: 20px;
        position: relative;
        text-transform: uppercase;
        margin-bottom: 30px;
      }

      .nav__icon {
        display: none;
        background-color: inherit;
        border: none;
        cursor: pointer;
      }

      .icon-hamburger-close {
        display: none;
      }
      
      @media (max-width: 900px) {
        .nav__icon {
          display: block;
          z-index: 1;
          background: initial
        }    

        .header.is-open .nav__icon .icon-hamburger {
          display: none;
        }

        .header.is-open .nav__icon .icon-hamburger-close {
          display: block;
        }
      }
    `
  }

  toggle() {
    this.isOpen = !this.isOpen
  }

  constructor() {
    super()
    this.isOpen = false
  }

  render() {
    return html`
      <header class="header ${this.isOpen ? 'is-open' : ''}">
        <lit-link .href="${"/"}">Rick</lit-link>
        <main-nav @click="${this.toggle}" .isOpen="${this.isOpen}"></main-nav>
        <hamburger-icon @click="${this.toggle}" .icon="${this.isOpen ? 'open' : 'closed'}"></hamburger-icon>
      </header>
    `
  }
}

customElements.define("header-nav", Header)