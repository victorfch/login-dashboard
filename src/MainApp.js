import { html, LitElement } from "lit";
import { navigate } from "./components/router/LitLink";
import { routes } from "./routes";

class MainApp extends LitElement {
  static get properties() {
    return {
      isAuthenticated: {type: Boolean}
    }
  }

  constructor() {
    super()
    this.isAuthenticated = localStorage.getItem("login")
    
    if (!this.isAuthenticated) {
      this.logout()
    }
  }

  logout() {
    navigate("/login")
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('add-item', () => this.isAuthenticated = Boolean(localStorage.getItem("login")));
    window.addEventListener('remove-item', this.logout);
  }
  
  render() {
    return html`
      <browser-router .routes="${routes}"></browser-router> 
    `
  }
}

customElements.define("main-app", MainApp)