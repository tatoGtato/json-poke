import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property } from 'lit/decorators.js';
import { Task } from '@lit/task';
import { Pokemon } from "../../models/pokemon"
import "../../components/top-bar"
import "../../components/evolution-card"

@customElement('evolution-page')
export class SecondPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  @property({ type: Object })
  params: {
    nombre?: String
  } = {}

  private _getPokemon = new Task(this, {
    task: async ([nombre], { signal }) => {
      const response = await fetch(`http://localhost:3002/pokemon?name=${nombre}`, { signal });
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json() as any as Array<Pokemon>;
    },
    args: () => [this.params.nombre]
  });

  render() {
    return html`
      <top-bar .needBack = ${true} .previous = ${"home"}> </top-bar>
      <div class = "evolutions-container">   
        ${this._getPokemon.render({
          initial: () => html`<p> Ini </p>`,
          pending: () => html`<p> Ini </p>`,
          complete: (pokemon) => html`
            <h2> Base pokemon </h2>
            <ul>
              <li>
                <evolution-card .pokemon = ${pokemon[0]}> </evolution-card>
              </li>
            </ul>
            <h2> evolutions </h2>
            <ul>
              ${pokemon[0].evolutions.map( (pokemon) => html`
                <li>
                  <evolution-card .pokemon = ${pokemon}> </evolution-card>
                </li>  
              `)}
            </ul>
          `,
          eror: (e: any) => html`<p>Oops, something went wrong: ${e}</p>`
        })}
      </div>
    `;
  }
}
