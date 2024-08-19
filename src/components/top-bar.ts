import { PageController } from '@open-cells/page-controller';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// @ts-ignore
@customElement('top-bar')
export class TopBar extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @property({ type: Boolean })
    needBack!: Boolean;

  @property({ type: Function })
    actiona!: Function;


  handleBackButton(){
    if (!this.needBack){
      return html`
      <div class = "top-bar"> 
        <h1> POKEMON </h1>
      </div>`;
    }
    else{
      return html`
      <div class = "top-bar"> 
        <a @click=${() => this.pageController.navigate('home')} >Back</a>
        <h1> POKEMON </h1>
      </div>`;
    }
  }

  render() {
    return this.handleBackButton()
  }
}
