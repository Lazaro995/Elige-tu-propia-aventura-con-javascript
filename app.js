let primero = document.getElementById("primero");
let segundo = document.getElementById("segundo");

function comienzo() {
  let relato = historia.find((el) => el.ruta == 0);
  primeraParte(relato);
}
comienzo();

function primeraParte(relato) {
    console.log(relato);
  primero.innerText = relato.aventura;
  
  segundo.innerHTML = `<button id="1" type="button" class="btn btn-info">${relato.opcion1}</button>
    <button id="2" type="button" class="btn btn-info">${relato.opcion2}</button>`;

  let btn1 = document.getElementById("1");
  btn1.addEventListener("click", () => {
    siguienteHistoria(btn1.id, relato);
  });

  let btn2 = document.getElementById("2");
  btn2.addEventListener("click", () => {
    siguienteHistoria(btn2.id, relato);
  });
  if (
    relato.ruta === 5 ||
    relato.ruta === 10 ||
    relato.ruta === 13 ||
    relato.ruta === 16
  ) {
    segundo.innerHTML = `<button id="4" type="button" class="btn btn-success">Continuar</button>`
    let btn4 = document.getElementById("4");
    btn4.addEventListener("click", () => {
      siguienteHistoria(btn4.id, relato);
    });
    // siguienteHistoria(4, relato);
  }
  if (relato.fin) {
    segundo.innerHTML = "FIN";
    setTimeout(() => {
        segundo.innerHTML = `<button id="3" type="button" class="btn btn-success">Volver a Empezar</button>`
        let btn3 = document.getElementById("3");
            btn3.addEventListener("click", () => {
            comienzo()
            });
    }, 3000);
  }

  if (relato.op3 == 2) {
    let tercerBtn = document.createElement('button')
    tercerBtn.className= 'btn btn-info'
    tercerBtn.id = '3'
    tercerBtn.innerText = `${relato.opcion3}`
   
    segundo.append(tercerBtn);
    let btn3 = document.getElementById("3");
    btn3.addEventListener("click", () => {
      siguienteHistoria(btn3.id, relato);
    });
  }
}

let segundaParte;
function siguienteHistoria(id, relato) {
  switch (id) {
    case "1":
      segundaParte = historia.find((el) => el.ruta == relato.op1);
      primeraParte(segundaParte);
      break;
    case "2":
      segundaParte = historia.find((el) => el.ruta == relato.op2);
      primeraParte(segundaParte);
      break;
    case "3":
      segundaParte = historia.find((el) => el.ruta == relato.op3);
      primeraParte(segundaParte);
      break;
    case "4":
      segundaParte = historia.find((el) => el.ruta == relato.ir);
      primeraParte(segundaParte);
      break;
  }
}
