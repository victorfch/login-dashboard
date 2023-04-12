import { css, html, LitElement } from "lit";

class GalleryItem extends LitElement {
  static get styles() {
    return css`
      *{margin:0; padding: 0; box-sizing: border-box}

      .item {
        box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, .075);
        border-radius: 10px;
        overflow: hidden;
        transition: all .4s;
        cursor: pointer
      }

      .item:hover {
        transform: translateY(-10px);
        box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, .05);
      }

      .item__img {
        width: 100%;
      }

      .item__container {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        gap: 10px
      }

      .item-row {
        display: flex;
        gap: 10px;
      }

      .item-title {
        font-weight: 700
      }
    `
  }
  
  render() {
    return html`
      <div class="item">
        <lit-link .href="${`character/${this.character.id}`}">
          <img class="item__img" src="${this.character.image}" alt="${this.character.name} photo" />
          <div class="item__container">
            <character-details-row title="Name" .value="${this.character.name}"></character-details-row>
            <character-details-row title="Status" .value="${this.character.status}"></character-details-row>
            <character-details-row title="Specie" .value="${this.character.species}"></character-details-row>
          </div>
        </lit-link>
      </div>
    `
  }
}

customElements.define("gallery-item", GalleryItem)