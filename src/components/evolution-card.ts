import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Pokemon } from "../models/pokemon"
import { PageController } from '@open-cells/page-controller';

// @ts-ignore
@customElement('evolution-card')
export class EvolutionCard extends LitElement {
  pageController = new PageController(this);

  @property({ type: {} })
    pokemon!: Pokemon;

  params = {
    ne: "",
    te: ""
  }

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  render() {
    this.params.ne = this.pokemon.name;
    this.params.te = this.pokemon.type;
    return html`
    
      <div class = "evolution-card"> 
        <div class = "evo-grid-container"> 
            <div class="name">
                <span class="pokename-container">
                    <p style = "display: inline"> ${this.pokemon.name} </p>
                </span>
                <span>
                    <button class="icon-button" @click=${() => this.pageController.navigate('editar', this.params)}>
                        Editar
                    </button>
                </span>
            </div>

            <div class = "sprite">
                <img class = "card-sprite" src="../../assets/images/${this.pokemon.image}" alt="${this.pokemon.name} Icon">
            </div>
            <div class = "info">
                <p> ${this.pokemon.type} </p>
            </div>
        </div>
      </div>
    `;
  }
}