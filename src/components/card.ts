import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Pokemon } from "../models/pokemon"

// @ts-ignore
@customElement('pokemon-card')
export class Card extends LitElement {

    @property({ type: {} })
    pokemon!: Pokemon;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    return html`
      <div class = "card"> 
        <div class = "container"> 
            <img src="../../assets/images/${this.pokemon.image}" alt="${this.pokemon.name} Icon">
            <p> ${this.pokemon.name} </p>
            <p> ${this.pokemon.type} </p>
        </div>
      </div>
    `;
  }
}