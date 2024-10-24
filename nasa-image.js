import { LitElement, html, css } from "lit";

export class NasaImage extends LitElement {

  constructor() {
    super();
    this.title = '';
    this.source = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
    };
  }

  static get styles() {
    return [css`
  
    .image {
      display: inline-block;
    }

    .image div {
      width: 240px;
      height: 240px;
      font-size: 16px;
      font-weight: bold;
      border: black;
    }

    .image img {
      height: 180px;
      width: 180px;
      display: block;
    }

    a {
      text-decoration: none;
    }
    `];
  }

  render() {
    return html`
    <div class="image">
        <img src="${this.source}"/>
        <div class="title">${this.title}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}

customElements.define(NasaImage.tag, NasaImage);