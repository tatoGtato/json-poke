import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Pokemon } from "../models/pokemon"
import { PageController } from '@open-cells/page-controller';
import {handleTypeFormat, handleTypeColors} from "../utils/type-style-handler"


// @ts-ignore
@customElement('evolution-card')
export class EvolutionCard extends LitElement {
  pageController = new PageController(this);

  @property({ type: {} })
    pokemon!: Pokemon;

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    const typesList =  handleTypeFormat(this.pokemon.type);
    return html`
      ${console.log(this.pokemon)}
      <div class = "evolution-card"> 
        <div class = "evo-grid-container"> 
            <div class="name">
                <span class="pokename-container">
                    <p class = "name-title-card-evo" style = "display: inline"> ${this.pokemon.name} </p>
                </span>
                <span>
                    <button class="icon-button" @click=${() => this.pageController.navigate('editar', {nombre: this.pokemon.name, ne: this.pokemon.name, type: this.pokemon.type})}>
                        Editar
                    </button>
                </span>
            </div>


              <div class = "sprite">
                  <img class = "card-sprite-evo" src="../../assets/images/${this.pokemon.image}" alt="${this.pokemon.name} Icon">
              </div>
              <div class = "info">
                  ${typesList.map((type) => html`
                      ${handleTypeColors(type)}
                  `)}
              </div>

        </div>
      </div>
    `;
  }
}