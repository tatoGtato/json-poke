import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, property, query } from 'lit/decorators.js';
import "../../components/top-bar"
import "../../components/card"
import "../../components/popup"

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
    type?: String
  } = {
  }
  @property()
  newName: string = '';

  @property()
  newType: string = '';

  @property()
  displayPopUp: string = "none";

  render() {
    console.log(this.displayPopUp)
    let buttonHandler = 
        (this.newName=="" && this.newType=="")? html`<button disabled="disabled"> enviar </button>`
        : html`<button @click=${() => this.enviarPushed()}> enviar </button>`;

    return html`
        <top-bar .needBack = ${false}> </top-bar>
        <pop-up .popUpstate = ${this.displayPopUp}> </pop-up>
        <div>
            <h2> Edita la información del ${this.params.ne
            } <h2>  
            <form>
                <label for="pname">Nombre del pokemon</label><br>
                <input @input=${this.changeName} placeholder = ${this.params.ne} id = "newName" class="text-input"><br>
                <label for="tname">Tipo del pokemon</label><br>
                <input @input=${this.changeType} placeholder = ${this.params.type} id = "newType" class="text-input"><br>
                <p> ¿Vas a repetir pokemon? </p>
                <div class = "check-container">
                    <input type="checkbox" @input=${this.handleCheck} id="check">
                </div><br><br>
                ${buttonHandler}
        </div>
        </form> 
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newName = input.value;
    this.displayPopUp = "none"
  }

  changeType(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newType = input.value;
    this.displayPopUp = "none"
  }

  handleCheck(){
    if (!this.checkInput.checked){
        this.displayPopUp = "none"
    }
  }

  @query('#newName')
  nameInput!: HTMLInputElement;

  @query('#newType')
  typeInput!: HTMLInputElement;

  @query('#check')
  checkInput!: HTMLInputElement;

  enviarPushed() {
    if(this.checkInput.checked){
        console.log("popap")
        this.displayPopUp = "block"
        
    }
    else{
        this.displayPopUp = "none"
        this.pageController.navigate('home');
    }
    this.newName = "";
    this.newType = "";
    this.nameInput.value = "";
    this.typeInput.value = "";
    this.checkInput.checked = false;
  }
}

