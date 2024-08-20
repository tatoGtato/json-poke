# JSON POKE

## Indice
1. [Frameworks y herramientas utilizadas](#Frameworks_herramientas_utilizadas)
2. [¿Como correr la app?](#Como_correr_la_app)
3. Funcionamiento de la app

## Frameworks y herramientas utilizadas
- [Open Cells](https://www.opencells.dev/)
- [Lit](https://lit.dev/)
- [json-server 1.0.0-beta.1](https://www.npmjs.com/package/json-server)

## ¿Como correr la app?
1. Clonar este repositorio de git.
2. Abrir una terminal en el directorio Json-poke y correr el comando ```npm i``` para descargar todas las dependencias necesarias.
3. Abrir en la misma terminal, correr el comando ```json-server -w pokemon.json -p 3002``` para desplegar el servidor con los pokemones.
4. En una terminal diferente en el directorio Json-poke ejecutar el comando ```npm run dev``` para ejecutar la aplicaión.

## Funcionaiento de la app
Poke-json cuenta con 3 pantallas principales "home-page", "evolution-page" y "edit page".

### home-page
- En esta pantalla, el usuario podra ver una lista de pokemones con su foto, su nombre y su respectiva foto.
- Cuando el usuario clickee en la targeta de un pokemon, lo llevará a "evolution-page".

<img width="500" alt="Screenshot 2024-08-19 at 9 20 55 PM" src="https://github.com/user-attachments/assets/3622aca3-27d7-4bda-964f-a01da30648f6">

### evolution-page
- En esta mantalla el usuario podra ver el nombre, los tipos y la foto del pokemon seleccionado y sus evoluciones.
- Arriba a la derecha de cada 
