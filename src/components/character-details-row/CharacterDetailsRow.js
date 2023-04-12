import { LitElement, css, html } from "lit";

class CharacterDetailsRow extends LitElement {
  static get styles() {
    return css`
      *{margin:0; padding: 0; box-sizing: border-box}

      .row {
        display: flex;
        gap: 10px
      } 
      .row__title {
        font-weight: 700;
      }
    `
  }

  render() {
    return html`
      <div class="row">
        <div class="row__title">${this.title}:</div>
        <div>${this.value}</div>
      </div>
    `
  }
}

customElements.define("character-details-row", CharacterDetailsRow)