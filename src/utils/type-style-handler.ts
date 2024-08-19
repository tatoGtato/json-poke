import { html } from 'lit';

export function handleTypeColors(type : String){

    switch (type.toLowerCase()){
      case "normal":
        return html`<span class = "type-wrapper" style = "border-color: #A8A77A"><p class = "types">${type}</p></span>`
      case "poison":
        return html`<span class = "type-wrapper" style = "border-color: #A33EA1"><p class = "types">${type}</p></span>`
      case "psychic":
        return html`<span class = "type-wrapper" style = "border-color: #F95587"><p class = "types">${type}</p></span>`
      case "grass":
        return html`<span class = "type-wrapper" style = "border-color: #7AC74C"><p class = "types">${type}</p></span>`
      case "ground":
        return html`<span class = "type-wrapper" style = "border-color: #E2BF65"><p class = "types">${type}</p></span>`
      case "fire":
        return html`<span class = "type-wrapper" style = "border-color: #EE8130"><p class = "types">${type}</p></span>`
      case "rock":
        return html`<span class = "type-wrapper" style = "border-color: #B6A136"><p class = "types">${type}</p></span>`
      case "water":
        return html`<span class = "type-wrapper" style = "border-color: #6390F0"><p class = "types">${type}</p></span>`
      case "fighting":
        return html`<span class = "type-wrapper" style = "border-color: #C22E28"><p class = "types">${type}</p></span>`
      case "ghost":
        return html`<span class = "type-wrapper" style = "border-color: #735797"><p class = "types">${type}</p></span>`
      case "flying":
        return html`<span class = "type-wrapper" style = "border-color: #A98FF3"><p class = "types">${type}</p></span>`
      case "electric":
        return html`<span class = "type-wrapper" style = "border-color: #F7D02C"><p class = "types">${type}</p></span>`
      case "fairy":
        return html`<span class = "type-wrapper" style = "border-color: #D685AD"><p class = "types">${type}</p></span>`
      default:
        return html`<span class = "type-wrapper" style = "border-color: #FFF"><p class = "types">${type}</p></span>`
    }
}

export function handleTypeFormat(type : String){
  const types = type.split("/")
  return types 
}