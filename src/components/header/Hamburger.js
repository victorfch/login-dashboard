import { LitElement, css, html } from "lit";

class Hamburger extends LitElement {
  static get properties() {
    return {
      icon: {type: String}
    }
  }

  static get styles() {
    return css`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      :host {
        display: none;
      }

      .nav__icon {
        background-color: inherit;
        border: none;
        cursor: pointer;
      }
      
      @media (max-width: 900px) {
        :host {
          display: block;
          z-index: 1;
        }
      } 
    `
  }

  render() {
    return html`
      <button class="nav__icon">
        ${this.icon == 'closed'
          ? html`
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-hamburger" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          `
          : html`
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-hamburger-close" width="44" height="44" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          `
        }
      </button>
    `
  }

}

customElements.define("hamburger-icon", Hamburger)