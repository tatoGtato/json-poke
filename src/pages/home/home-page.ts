import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';
import { Task } from '@lit/task';
import { Pokemon } from "../../models/pokemon"
import "../../components/top-bar"
import "../../components/card"

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
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
      <top-bar> </top-bar>
      ${this._getPokemons.render({
        initial: () => html`<p> Ini </p>`,
        pending: () => html`<p> Ini </p>`,
        complete: (pokemons) => html`
          <div class = "content-container">
            <lu>
              ${
                pokemons.map( (pokemon) => html`
                  <li>
                    <pokemon-card .pokemon = "${pokemon}"> </pokemon-card>
              </li>
                `)
              }
            </lu>
          </div>
        `,
        eror: (e: any) => html`<p>Oops, something went wrong: ${e}</p>`
      })}
    `;
  }
}
