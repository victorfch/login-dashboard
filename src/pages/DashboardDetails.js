import { css, html, LitElement } from "lit";
import { getSingleCharacter } from "../services/api";

class DashboardDetails extends LitElement {

  static get properties() {
    return {
      character: {type: Object},
    }
  }

  static get styles() {
    return css`
      *{margin:0; padding: 0; box-sizing: border-box}

      .character {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100vh;
      }

      .character__image {
        overflow: hidden;
        border-radius: 15px;
        width: 80%;
      }

      .character img {
        width: 100%;
        transition: all .4s;
      }
      
      .character img:hover {
        transform: scale(1.1)
      }

      .character__details {
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-size: 18px;
        padding: 8px 16px;
      }
      
      @media (max-width: 600px) {
        .character {
          grid-template-columns: 1fr
        }

        .character__image {
          width: 100%;
        }
      }
    `
  }

  constructor() {
    super()
    this.character = {}
  }

  async connectedCallback() {
    super.connectedCallback()
    this.character = await getSingleCharacter(this.routeParams.id)
  }

  render() {
    if (!Object.keys(this.character).length) return html`<big-container>Loading...</big-container>`
    return html`
      <template-page>
        <h1>${this.character.name}</h1>
        <div class="character">
          <div>
            <figure class="character__image">
              <img src="${this.character.image}" />
            </figure>
          </div>

          <div class="character__details">
            <character-details-row title="Name" .value="${this.character.name}" ></character-details-row>
            <character-details-row title="Specie" .value="${this.character.species}" ></character-details-row>
            <character-details-row title="Status" .value="${this.character.status}" ></character-details-row>
            <character-details-row title="Gender" .value="${this.character.gender}" ></character-details-row>
            <character-details-row title="Origin" .value="${this.character.origin?.name}" ></character-details-row>
            <character-details-row title="Type" .value="${this.character.type || 'unknown'}" ></character-details-row>
            <character-details-row title="Episodes" .value="${this.character.episode.length}" ></character-details-row>
          </div>
        </div>
      </template-page>
    `
  }
}

customElements.define("dashboard-details-page", DashboardDetails)