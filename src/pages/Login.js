import { css, html, LitElement } from "lit";
import { navigate } from "../components/router/LitLink";
import { loginUser } from "../services/api";

class Login extends LitElement {
  static get properties() {
    return {
      user: {type: Object},
      error: {type: Boolean},
      loading: {type: Boolean}
    }
  }

  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
      }

      :host {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(50deg, #00bfff, #2c2cb2);
      }

      .form {
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, .4);
        gap: 10px;
        padding: 100px 20px 50px 20px;
        border-radius: 10px;
        width: 400px;
      }

      .form__row {
        display: flex;
        flex-direction: column;
        gap: 5px
      }

      .form__error-message {
        color: red;
        font-weight: 700;
        font-size: 20px
      }

      .label {
        font-weight: 700;
        font-size: 20px
      }

      .input {
        padding: 10px;
        border: none;
        background: #e3dfef;
        outline: none;
        border-radius: 10px
      }

      .input.input--invalid {
        border: 2px solid red;
      }

      .btn {
        padding: 5px 10px;
        border: none;
        background: blue;
        color: white;
        font-size: 20px;
        margin-top: 20px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        gap: 16px;
        align-items: center;
      }

      .btn__loader {
        border: 4px solid #f3f3f3; /* Light grey */
        border-top: 4px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 2s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
  }

  constructor() {
    super()
    this.user = {}
    this.error = false
  }

  async handleSubmit(e) {
    e.preventDefault()
    this.loading = true

    try {
      const res = await loginUser(this.user)
      if (res.okey) {
        localStorage.setItem("login", true)
        const addItem = new Event("add-item")
        window.dispatchEvent(addItem)
        this.error = false
        navigate("/")
      }
    } catch {
      this.error = true
    }
  
    this.loading = false
  }

  handleInput({target}) {
    this.user[target.name] = target.value
  }

  render() {
    return html`
      <form class="form" @submit="${this.handleSubmit}">
        <div class="form__row">
          <label class="label">Username</label>
          <input class="input ${this.error ? 'input--invalid' : ''}" type="text" name="username" @input="${this.handleInput}" .value="${this.user.username || ""}" />
        </div>
        
        <div class="form__row">
          <label class="label">Password</label>
          <input class="input ${this.error ? 'input--invalid' : ''}" type="password" name="password" @input="${this.handleInput}" .value="${this.user.password || ""}" />
        </div>
        
        ${this.error ? html`<div class="form__error-message">Oops, invalid username or password!</div>` : ''}
        <button class="btn">
          ${this.loading ? html`<div class="btn__loader"></div>` : ''}
          Login
        </button>
      </form>
    `
  }
}

customElements.define("login-page", Login)