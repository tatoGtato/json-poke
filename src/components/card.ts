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
            <img src="../../assets/images/${this.pokemon.image}" alt="${this.pokemon.name} Icon">
            <div class = "card-descriptions">
                <p> ${this.pokemon.name} </p> </br>
                ${typesList.map((type) => html`
                    ${handleTypeColors(type)}
                `)}
            </div>
      </div>
    `;
  }
}