/**
 * all main stuff has been added, need to add functions and such
 */

/**
 * Copyright 2024 nrousseau4
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./nasa-image.js";

export class nasaDashboard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "nasa-dashboard";
  }

  constructor() {
    super();
    this.value = null;
    this.title = '';
    this.loading = false;
    this.items = [];
  };

  // Lit reactive properties
  static get properties() {
    return {
      title: { type: String },
      loading: { type: Boolean, reflect: true },
      items: { type: Array, },
      value: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([loading]) .results {
        opacity: 0.1;
        visibility: hidden;
        height: 1px;
      }
      .results {
        visibility: visible;
        height: 100%;
        opacity: 1;
        transition-delay: .5s;
        transition: .5s all ease-in-out;
      }

      details {
        margin: 16px;
        padding: 16px;
        background-color: blue;
      }
      summary {
        font-size: 24px;
        padding: 8px;
        color: white;
        font-size: 42px;
      }
      input {
        font-size: 20px;
        line-height: 40px;
        width: 100%;
      }
    `;
  }

  // Lit render the HTML
  render() {
    return html`
      <h2>${this.title}</h2>
      <details open>
        <summary>Search inputs</summary>
        <div>
          <input id="input" placeholder="Search NASA images" @input="${this.inputChanged}" />
        </div>
      </details>
      <div class="results">
        ${this.items.map((item, index) => html`
        <nasa-image
          source="${item.links[0].href}"
          title="${item.data[0].title}"
        ></nasa-image>
        `)}
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(nasaDashboard.tag, nasaDashboard);