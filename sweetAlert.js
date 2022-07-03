import { default as Swal } from "sweetalert2";


Swal.fire({
    title: "validad identidad",
    text: "Podrias decirnos tu nombre?",
    input: "text",
    placeHolder: "Nombre",
    inputValue: nombreusuario,
})

Swal.fire({
    title: "No tienes edad para jugar este juego"
})
  Swal.fire({
    title: "Que edad tienes",
    input:"text",

  })