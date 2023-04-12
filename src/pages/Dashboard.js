import { css, html, LitElement } from "lit";
import { getCharacters } from "../services/api";

class Dashboard extends LitElement {

  static get properties() {
    return {
      characters: {type: Array}
    }
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .gallery {
        margin: 24px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 20px;
      }

      @media (max-width: 1000px) {
        .gallery {
          grid-template-columns: repeat(2, 1fr);
        }

      }

      @media (max-width: 600px) {
        .gallery {
          grid-template-columns: 1fr;
        }
      }
    `
  }

  constructor() {
    super()
    this.characters = []
  }

  async connectedCallback() {
    super.connectedCallback()
    this.characters = await getCharacters()
  }

  render() {
    return html`
      <template-page>
        <h1>Characters</h1>
        
        <div class="gallery">
          ${this.characters?.map(character => html`<gallery-item .character="${character}"></gallery-item>`)}
        </div>
      </template-page>

    `
  }
}

customElements.define("dashboard-page", Dashboard)