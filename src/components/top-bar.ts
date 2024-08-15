import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

// @ts-ignore
@customElement('top-bar')
export class TopBar extends LitElement {

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <div class = "top-bar"> 
        <h1> POKEMON </h1>
      </div>
    `;
  }
}
