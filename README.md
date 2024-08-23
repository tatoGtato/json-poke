# JSON POKE

## Indice
1. Frameworks y herramientas utilizadas
2. ¿Como correr la app?
3. Funcionamiento de la app

## Frameworks y herramientas utilizadas
- [Open Cells](https://www.opencells.dev/)
- [Lit](https://lit.dev/)
- [json-server 1.0.0-beta.1](https://www.npmjs.com/package/json-server)
- Node >18.15

## ¿Como correr la app?
1. Clonar este repositorio de git.
2. Abrir una terminal en el directorio Json-poke y correr el comando ```npm i``` para descargar todas las dependencias necesarias.
3. En la misma terminal, correr el comando ```npm install -g json-server```
4. En la misma terminal, correr el comando ```json-server -w pokemon.json -p 3002``` para desplegar el servidor con los pokemones.
6. En una terminal diferente en el directorio Json-poke ejecutar el comando ```npm run dev``` para ejecutar la aplicaión.

## Funcionamiento de la app
Poke-json cuenta con 3 pantallas principales "home-page", "evolution-page" y "editar-page".

### home-page
- En esta pantalla, el usuario podrá ver una lista de pokemones con su tipo, su nombre y su respectiva foto.
- Cuando el usuario clickee en la tarjeta de un pokemon, lo llevará a "evolution-page".

<img width="600" alt="Screenshot 2024-08-23 at 2 26 20 PM" src="https://github.com/user-attachments/assets/71e8acca-6f02-46c5-b453-a5fdb670a702">

### evolution-page
- En esta pantalla el usuario podrá ver el nombre, los tipos y la foto del pokemon seleccionado y sus evoluciones.
- Arriba a la derecha de cada tarjeta de pokemon hay un botón de "editar". Este botón llevará a "editar-page"

<img width="600" alt="Screenshot 2024-08-23 at 2 26 29 PM" src="https://github.com/user-attachments/assets/0fcd099d-aad4-41a0-bdc2-f3af60da04f2">

### editar-page
- En esta pantalla el usuario podrá editar la información del pokmeon escogido (nombre y tipos).
- Si el usuario no ha cambiado la información del pokemon, la aplicación no dejará al usuario avanzar.
- Si el usuario marca la opción de "¿vas a repetir pokemon?" y le da click a "enviar", aparecá una alerta la cual le mostrará una advertencia al usuario.

<img width="600" alt="Screenshot 2024-08-23 at 2 26 45 PM" src="https://github.com/user-attachments/assets/f29db1f6-9cca-4bec-a47e-08f49abeb15e">

