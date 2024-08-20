# JSON POKE

## Indice
1. Frameworks y herramientas utilizadas
2. ¿Como correr la app?
3. Funcionamiento de la app

## Frameworks y herramientas utilizadas
- [Open Cells](https://www.opencells.dev/)
- [Lit](https://lit.dev/)
- [json-server 1.0.0-beta.1](https://www.npmjs.com/package/json-server)
- Node V18.15

## ¿Como correr la app?
1. Clonar este repositorio de git.
2. Abrir una terminal en el directorio Json-poke y correr el comando ```npm i``` para descargar todas las dependencias necesarias.
3. En la misma terminal, correr el comando ```npm install -g json-server```
4. En la misma terminal, correr el comando ```json-server -w pokemon.json -p 3002``` para desplegar el servidor con los pokemones.
5. En una terminal diferente en el directorio Json-poke ejecutar el comando ```npm run dev``` para ejecutar la aplicaión.

## Funcionamiento de la app
Poke-json cuenta con 3 pantallas principales "home-page", "evolution-page" y "editar-page".

### home-page
- En esta pantalla, el usuario podrá ver una lista de pokemones con su tipo, su nombre y su respectiva foto.
- Cuando el usuario clickee en la tarjeta de un pokemon, lo llevará a "evolution-page".

<img width="500" alt="Screenshot 2024-08-19 at 9 20 55 PM" src="https://github.com/user-attachments/assets/3622aca3-27d7-4bda-964f-a01da30648f6">

### evolution-page
- En esta pantalla el usuario podrá ver el nombre, los tipos y la foto del pokemon seleccionado y sus evoluciones.
- Arriba a la derecha de cada tarjeta de pokemon hay un botón de "editar". Este botón llevará a "editar-page"

<img width="500" alt="Screenshot 2024-08-19 at 9 27 06 PM" src="https://github.com/user-attachments/assets/d95d61c3-66e2-4bdc-a82e-6d3ce75c4140">

### editar-page
- En esta pantalla el usuario podrá editar la información del pokmeon escogido (nombre y tipos).
- Si el usuario no ha cambiado la información del pokemon, la aplicación no dejará al usuario avanzar.
- Si el usuario marca la opción de "¿vas a repetir pokemon?" y le da click a "enviar", aparecá una alerta la cual le mostrará una advertencia al usuario.

<img width="500" alt="Screenshot 2024-08-19 at 9 33 07 PM" src="https://github.com/user-attachments/assets/fe78aa26-21e6-4433-851a-77f18ab69b5c">

