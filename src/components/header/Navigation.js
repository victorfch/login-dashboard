import { LitElement, css, html } from "lit";

class Navigation extends LitElement {

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

      .nav__list {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        color: white;
      }

      .nav__list__item {
        padding: 10px 20px;
        transition: all .4s;
        cursor: pointer;
      }

      .nav__list__item:last-child {
        padding: 0;
      }

      .nav__list__item:last-child:hover {
        background-color: inherit;
      }

      .nav__list__item:hover {
        background: #00ace6
      }

      .btn {
        padding: 10px 20px;
        border: none;
        background: blue;
        color: white;
        font-size: 20px;
        text-transform: uppercase;
        border-radius: 15px;
        transition: all .4s;
        cursor: pointer;
      }

      .btn:hover {
        background: #0000e6;
      }

      @media (max-width: 900px) {
        .nav {
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
          transform: translateX(100%);
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          height: 100vh;
          background: rgba(255, 255, 255, .6);
          backdrop-filter: blur(10px);
          top: 0;
          left: 0;
          width: 100%;
          transition: all .4s
        }

        .nav.is-open {
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
          transform: translateX(0);
        }

        .nav.is-open .nav__list {
          flex-direction: column;
        }
      }
    `
  }

  logout() {
    localStorage.removeItem("login")
    const removeLoginEvent = new Event("remove-item")
    window.dispatchEvent(removeLoginEvent)
  }

  render() {
    return html`
      <nav class="${this.isOpen ? 'nav is-open' : 'nav'}">
        <ul class="nav__list" @click="${this.toggle}">
          <li class="nav__list__item"><lit-link .href="${'/#'}">About</lit-link></li>
          <li class="nav__list__item"><lit-link .href="${'/#'}">Services</lit-link></li>
          <li class="nav__list__item"><lit-link .href="${'/#'}">Prices</lit-link></li>
          <li class="nav__list__item"><button class="btn" @click="${this.logout}">Log out</button></li>
        </ul>
      </nav>
    `
  }
}

customElements.define("main-nav", Navigation)