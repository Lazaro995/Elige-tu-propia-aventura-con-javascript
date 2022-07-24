import { default as Swal } from "sweetalert2";

(async() => {
  const{value: edad} = await Swal.fire({
    title:"Pregunta",
    icon: "question",
    text: "Cual es tu edad?",
    footer: "<span> Esta es información importante</span>",
    input: "text",
    inputPlaceholder: "Edad",
 });
 const registroedad = edad >= 18 && comienzo();
 if (edad < 18) {
  Swal.fire({
    title: "No tienes edad para jugar este juego"
  })
 }
})()
	// html:
	// icon:
	// confirmButtonText:
	// footer:
	// width:
	// padding:
	// background:
	// grow:
	// backdrop:
	// timer:
	// timerProgressBar:
	// toast:
	// position:
	// allowOutsideClick:
	// allowEscapeKey:
	// allowEnterKey:
	// stopKeydownPropagation:

	// input:
	// inputPlaceholder:
	// inputValue:
	// inputOptions:
	
	//  customClass:
	// 	container:
	// 	popup:
	// 	header:
	// 	title:
	// 	closeButton:
	// 	icon:
	// 	image:
	// 	content:
	// 	input:
	// 	actions:
	// 	confirmButton:
	// 	cancelButton:
	// 	footer:	

	// showConfirmButton:
	// confirmButtonColor:
	// confirmButtonAriaLabel:

	// showCancelButton:
	// cancelButtonText:
	// cancelButtonColor:
	// cancelButtonAriaLabel:
	
	// buttonsStyling:
	// showCloseButton:
	// closeButtonAriaLabel:


	// imageUrl:
	// imageWidth:
	// imageHeight:
	// imageAlt: