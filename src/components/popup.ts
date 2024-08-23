import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

// @ts-ignore
@customElement('pop-up')
export class PopUp extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @property({ type: String })
  popUpstate!: String;

  render() {
    console.log(this.popUpstate)
    return html`
      <div class = "popup-container" style = "display: ${this.popUpstate}">
        <h2> ¡ATENCIÓN! </h2>
        <p> Duplicar un pokemon no se puede hacer online. </p>
        <p> Por favor dirijase a su punto físico más cercano </p> </br></br>
        <button class = "popup-button" @click=${() => {
          this.popUpstate = "none";
          }}> Entendido </button>
      </div>
    `;
  }
}