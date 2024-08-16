import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property } from 'lit/decorators.js';
import { Pokemon } from "../../models/pokemon"
import "../../components/top-bar"
import "../../components/card"

// @ts-ignore
@customElement('editar-page')
export class EditarPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  @property({ type: Object })
  params: {
    ne?: String
    te?: String
  } = {}

  @property()
  newName: string = '';

  @property()
  newType: string = '';

  @property()
  repite: boolean = false;

  render() {
    return html`
        <h2> Edita la informacion del ${this.params.ne} <h2>
        <form>
            <label for="fname">Nombre del pokemon</label><br>
            <input @input=${this.changeName} placeholder = ${this.params.ne} ><br>
            <label for="lname">Tipo del pokemon</label><br>
            <input @input=${this.changeType} placeholder = ${this.params.te}><br>
            <span>
                <p> ¿Vas a repetir pokemon? </p>
            </span>
            <span>
                <input type="checkbox" @input=${this.checked}>
            </span><br><br>
            <button disabled="disabled @input=${this.enviarPushed}"> enviar </button>
            
        </form> 
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newName = input.value;
  }

  changeType(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newType = input.value;
  }

  checked() {
    this.repite = !this.repite;
    console.log(this.repite)
  }

  enviarPushed(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newType = input.value;
  }
}

