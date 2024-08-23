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
  newName: String | undefined = '';

  @property()
  newType: string = '';

  @property()
  displayPopUp: string = "none";

  @property()
  diasbleButton: boolean = true;

  @property()
  imgSource: string = "";

  render() {
    var name = this.params.ne;
    var type = this.params.type;
    return html`
        <top-bar .needBack = ${false}> </top-bar>
        <pop-up .popUpstate = ${this.displayPopUp}> </pop-up>
        <div class = "edit-content-container">
            <h2> Edita la información del ${this.params.ne} <h2> 
            <form>
              <label for="pname">Foto del pokemon</label><br>
                <div class = "image-edit-wrapper">
                  ${this.handleImgChange()}
                </div>
                <!-- <input id="imageUpload" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/><br> -->
                <label for="pname">Nombre del pokemon</label><br>
                <input @input=${this.changeName} value = ${name} id = "newName" class="text-input"><br>
                <label for="tname">Tipo del pokemon</label><br>
                <input @input=${this.changeType} value = ${type} id = "newType" class="text-input"><br>
                <p> ¿Vas a repetir pokemon? </p>
                <div class = "check-container">
                    <input type="checkbox" id="check" @click=${() => this.clickCheck()}>
                </div><br>
               ${this.handleButtonState()}
            </form> 
        </div>
        
    `;
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newName = input.value;
    console.log()
    if (input.value != this.params.ne){
      this.diasbleButton = false;
    }
    else{
      this.diasbleButton = true;
    }
  }

  changeType(event: Event) {
    const input = event.target as HTMLInputElement;
    this.newType = input.value;
    if (input.value != this.params.type){
      this.diasbleButton = false;
    }
    else{
      this.diasbleButton = true;
    }
  }

  handleButtonState(){
    if (this.diasbleButton){
      return html`<button disabled class = "enviar-button"> enviar </button>`
    }
    else{
      return html`<button @click=${() => this.enviarPushed()} class = "enviar-button"> enviar </button>`
    }
  }

  handleImgChange(){
    if (this.imgSource == ""){
      return html`<img class = "card-sprite-edit" src="../../assets/images/${this.params.ne}.png" alt="${this.params.ne} Icon">`
    }
    else{
      return html`<img class = "card-sprite-edit" src="${this.imgSource}" alt="${this.params.ne} Icon">`
    }
  }

  // changeSprite(event: Event){
  //   const input = event.target as HTMLInputElement;
  //   var Flist = input.value.split("\\");
  //   var fName = input.value.split("\\")[Flist.length-1]
  //   this.imgSource = "../../../../../../Desktop/" + fName
  //   console.log(this.imgSource)
  // }

  clickCheck(){
    if (this.checkInput.checked){
      this.displayPopUp = "block";
    }
    else{
      this.displayPopUp = "none";
    }
  }

  @query('#imageUpload')
  imgInput!: HTMLInputElement;

  @query('#newName')
  nameInput!: HTMLInputElement;

  @query('#newType')
  typeInput!: HTMLInputElement;

  @query('#check')
  checkInput!: HTMLInputElement;

  enviarPushed() {
    this.newName = "";
    this.newType = "";
    this.diasbleButton = true;
    this.checkInput.checked = false;
    this.pageController.navigate('home');
    window.location.reload();
  }
}

