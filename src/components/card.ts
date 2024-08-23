import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Pokemon } from "../models/pokemon"
import {handleTypeFormat, handleTypeColors} from "../utils/type-style-handler"

// @ts-ignore
@customElement('pokemon-card')
export class Card extends LitElement {

    @property({ type: {} })
    pokemon!: Pokemon;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    const typesList =  handleTypeFormat(this.pokemon.type);
    return html`
      <div class = "card"> 

        <div class = "card-title">
          <p class = "pokemon-name-title"> ${this.pokemon.name} </p>
        </div> 

        <div>
          <img src="../../assets/images/${this.pokemon.image}" class = "card-sprite-home" alt="${this.pokemon.name} Icon">       
        </div>

        <div class = "card-type">
        ${typesList.map((type) => html`
            ${handleTypeColors(type)}
        `)}
        </div>
      </div>
    `;
  }
}