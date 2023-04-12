import {LitElement } from "lit";
import {html, unsafeStatic} from 'lit/static-html.js';
import {match} from 'path-to-regexp'

class BrowserRouter extends LitElement {
  static get properties() {
    return {
      pathname: {type: String},
      component: {type: Object},
      routeParams: {type: Object}
    }
  }

  constructor() {
    super()
    this.pathname = location.pathname
    this.routeParams = {}
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('pushstate', () => this.pathname = location.pathname);
    window.addEventListener('popstate', () => this.pathname = location.pathname);
  }

  getComponent() {
    let route = this.routes.find(route => {
      if (route.path === this.pathname) return true
      const matcherURL = match(route.path, {decode: decodeURIComponent})
      const matched = matcherURL(this.pathname)
      if (!matched) return false
      this.routeParams = matched.params
      return true
    })

    if (!route) {
      route = this.routes.find(route => route.path === "/*")
    }

    route.file()
    const tag = route.component
    this.component = unsafeStatic(tag)
  }

  render() {
    this.getComponent()

    return html`
      <${this.component} .routeParams="${this.routeParams}"></${this.component}>
    `
  }
}

customElements.define("browser-router", BrowserRouter)