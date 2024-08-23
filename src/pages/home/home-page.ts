import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Task } from '@lit/task';
import { Pokemon } from "../../models/pokemon"
import "../../components/top-bar"
import "../../components/card"
import { PageController } from '@open-cells/page-controller';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this); 
  
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  params = {
    nombre: String
  }

  private _getPokemons = new Task(this, {
    task: async ([], { signal }) => {
      const response = await fetch(`http://localhost:3002/pokemon`, { signal });
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json() as any as Array<Pokemon>;
    },
    args: () => []
  });

  render() {
    return html`
      <top-bar .needBack = ${false}> </top-bar>
      ${this._getPokemons.render({
        initial: () => html`<p> Algo paso... </p>`,
        pending: () => html`<p> Esperando pokemones... </p>`,
        complete: (pokemons) => html`
          <div class = "content-container">
              ${
                pokemons.map( (pokemon) => html`
                    <div class = "item">
                        <pokemon-card .pokemon = "${pokemon}" @click=${() => this.pageController.navigate('evolution', {nombre: pokemon.name})}> </pokemon-card>
                    </div>
                `)
              }
          </div>
        `,
        eror: (e: any) => html`<p>Oops, something went wrong: ${e}</p>`
      })}
    `;
  }
}
