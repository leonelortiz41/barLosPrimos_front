let complementos = document.getElementById('complementos');
let comun = document.querySelectorAll('.comun');
let eFiambre = document.querySelectorAll('.eFiambre');
let ePapas = document.querySelectorAll('.ePapas');
let agregadoPapas = document.querySelector('#agregadoPapas')
let agregadoHuevo = document.querySelector('#agregadoHuevo')
let agregadoQueso = document.querySelector('#agregadoQueso')
let agregadoJamon = document.querySelector('#agregadoJamon')
let papasCantidad = document.querySelector('.papasCantidad')
let huevoCantidad = document.querySelector('.huevoCantidad')
let agregar = document.querySelector(".agregar");
let pedido = document.querySelector(".pedido");
let tableOrder = document.querySelector(".tableOrder");
let rowOrder = document.querySelector(".rowOrder");
let detalleTicket = document.querySelector(".detalleTicket");
let hidden_precio, hidden_nombre, hidden_cant, hidden_clase;
let elementos = document.querySelector(".elementos");
let importeOutput = document.querySelector(".importeOutput");
let enviar = document.querySelector(".enviar");
let carrito = document.querySelector(".carrito");
let cliente = document.querySelector(".cliente");
let checkbox = complementos.querySelectorAll("input");
let label = complementos.querySelectorAll(".lab");
let templa = document.querySelector(".templa")
let repetir = document.querySelector("#repetir")
let milanesas = document.getElementById('milanesasHref');
let hamburguesas = document.getElementById('hamburguesasHref');
let lomitos = document.getElementById('lomitosHref');
let pizzas = document.getElementById('pizzasHref');
let papas = document.getElementById('papasHref');
let platos = document.getElementById('platosHref');
let empanadas = document.getElementById('empanadasHref');
let bebidas = document.getElementById('bebidasHref');
let divStock = document.querySelector(".divStock");
let checkboxs = false;
let sumaPanSan = 0;
let sumaPanHamb = 0;
let sumapPapas = 0;
let sumapPizzas = 0;
let sumaPanSaPapas = 0;
let sumaPanHamPapas = 0;
let milanesasdb, lomitosdb, hamburguesasdb, pizzasdb, papasdb, platosdb, bebidasdb;
let colorSan = "#121212", colorHamb = "#121212", colorPapas = "#121212", colorPizzas = "#121212", colorSaPapas = "#121212", colorHamPapas = "#121212";

let ldsring = document.querySelector(".lds-ring");
$(".form-date").hide();
$(".general").hide();
const recibirData = async (milanesasdb, lomitosdb, hamburguesasdb, pizzasdb, papasdb, platosdb, bebidasdb) => {

	let stockSan = localStorage.getItem("stockSan") || null;
	divStock.children[0].children[1].value = stockSan || null;
	let stockHamb = localStorage.getItem("stockHamb") || null;
	divStock.children[1].children[1].value = stockHamb || null;
	let stockPapas = localStorage.getItem("stockPapas") || null;
	divStock.children[2].children[1].value = stockPapas || null;
	let stockPizzas = localStorage.getItem("stockPizzas") || null;
	divStock.children[3].children[1].value = stockPizzas || null;

	$("#stockSan").blur(function () {
		localStorage.setItem("stockSan", $(".stockSan")[0].children[1].value)
	});
	$("#stockSan").keyup(function () {
		localStorage.setItem("stockSan", $(".stockSan")[0].children[1].value)
	});

	$("#stockHamb").blur(function () {
		localStorage.setItem("stockHamb", $(".stockHamb")[0].children[1].value)
	});
	$("#stockHamb").keyup(function () {
		localStorage.setItem("stockHamb", $(".stockHamb")[0].children[1].value)
	});

	$("#stockPapas").blur(function () {
		localStorage.setItem("stockPapas", $(".stockPapas")[0].children[1].value)
	});
	$("#stockPapas").keyup(function () {
		localStorage.setItem("stockPapas", $(".stockPapas")[0].children[1].value)
	});

	$("#stockPizzas").blur(function () {
		localStorage.setItem("stockPizzas", $(".stockPizzas")[0].children[1].value)
	});
	$("#stockPizzas").keyup(function () {
		localStorage.setItem("stockPizzas", $(".stockPizzas")[0].children[1].value)
	});


	if (stockSan > 0 && stockSan <= 10) colorSan = "#a97915"
	if (stockSan == 0) colorSan = "#a92222"

	if (stockHamb > 0 && stockHamb <= 10) colorHamb = "#a97915"
	if (stockHamb == 0) colorHamb = "#a92222"

	if (stockPapas > 0 && stockPapas <= 10) colorPapas = "#a97915"
	if (stockPapas == 0) colorPapas = "#a92222"

	if (stockPizzas > 0 && stockPizzas <= 10) colorPizzas = "#a97915"
	if (stockPizzas == 0) colorPizzas = "#a92222"

	if ((stockSan > 0 && stockSan <= 10) || stockPapas > 0 && stockPapas <= 10) colorSaPapas = "#a97915"
	if (stockSan == 0 || stockPapas == 0) colorSaPapas = "#a92222";

	if ((stockHamb > 0 && stockHamb <= 10) || stockPapas > 0 && stockPapas <= 10) colorHamPapas = "#a97915"
	if (stockHamb == 0 || stockPapas == 0) colorHamPapas = "#a92222";


	let milanesasLS = localStorage.getItem("milanesasLS") || null;
	let lomitosLS = localStorage.getItem("lomitosLS") || null;
	let hamburguesasLS = localStorage.getItem("hamburguesasLS") || null;
	let pizzasLS = localStorage.getItem("pizzasLS") || null;
	let papasLS = localStorage.getItem("papasLS") || null;
	let platosLS = localStorage.getItem("platosLS") || null;
	let bebidasLS = localStorage.getItem("bebidasLS") || null;
	if (milanesasLS == null) {
		milanesasdb = await fetch("https://apibar-production.up.railway.app/milanesas"); milanesasdb = await milanesasdb.json();
		localStorage.setItem("milanesasLS", JSON.stringify(milanesasdb));
	}
	else milanesasdb = JSON.parse(milanesasLS);

	if (lomitosLS == null) {
		lomitosdb = await fetch("https://apibar-production.up.railway.app/lomitos"); lomitosdb = await lomitosdb.json();
		localStorage.setItem("lomitosLS", JSON.stringify(lomitosdb));
	}
	else lomitosdb = JSON.parse(lomitosLS);


	if (hamburguesasLS == null) {
		hamburguesasdb = await fetch("https://apibar-production.up.railway.app/hamburguesas"); hamburguesasdb = await hamburguesasdb.json();
		localStorage.setItem("hamburguesasLS", JSON.stringify(hamburguesasdb));
	}
	else hamburguesasdb = JSON.parse(hamburguesasLS);


	if (pizzasLS == null) {
		pizzasdb = await fetch("https://apibar-production.up.railway.app/pizzas"); pizzasdb = await pizzasdb.json();
		localStorage.setItem("pizzasLS", JSON.stringify(pizzasdb));
	}
	else pizzasdb = JSON.parse(pizzasLS);

	if (papasLS == null) {
		papasdb = await fetch("https://apibar-production.up.railway.app/papas"); papasdb = await papasdb.json();
		localStorage.setItem("papasLS", JSON.stringify(papasdb));
	}
	else papasdb = JSON.parse(papasLS);

	if (platosLS == null) {
		platosdb = await fetch("https://apibar-production.up.railway.app/platos"); platosdb = await platosdb.json();
		localStorage.setItem("platosLS", JSON.stringify(platosdb));
	}
	else platosdb = JSON.parse(platosLS);

	
	if (bebidasLS == null) {
		bebidasdb = await fetch("https://apibar-production.up.railway.app/bebidas"); bebidasdb = await bebidasdb.json();
		localStorage.setItem("bebidasLS", JSON.stringify(bebidasdb));
	}
	else bebidasdb = JSON.parse(bebidasLS);
	ldsring.remove();

	detalleTicket.innerHTML = ""
	let pedidoActual = {
		id: [],
		cantidad: parseInt(0),
		cliente: "",
		pedido: [],
		detalle: "",
		importe: parseInt()
	};
	let pedidoFinal = {
		id: [],
		cantidad: parseInt(0),
		cliente: "",
		pedido: [],
		detalle: "",
		importe: parseInt(),
		statu: "",
		pagado: 0,
		pj: 0
	};
	let importeSuma = parseInt(0);
	let j = 0;
	let pedidoImprimir = ""

	let celda = [], botonMas = [], botonMenos = [], botonId = [], celdaComida = [], celdaCantidad = [], celdaId = [], celdaPrecio = [], celdaClase = [], activ = [];
	let pedi = "";
	let h = 0;


	[milanesas, lomitos, hamburguesas].forEach(item => {
		item.addEventListener("click", () => { checkboxs = true })
	});
	[pizzas, papas, platos, bebidas].forEach(item => {
		item.addEventListener("click", () => { noneLabel(label); checkboxs = false; pedi = "" })
	});

	for (var i = 0; i <= 50; i++) {
		creaTd(celda, ``, i, "celdatableOrder")
		tableOrder.appendChild(celda[i])
		creaBoton(botonMas, i, `+`, "celdaBoton")
		celda[i].appendChild(botonMas[i])
		creaBoton(botonMenos, i, `-`, "celdaBoton")
		celda[i].appendChild(botonMenos[i])
		creaTd(celdaId, i, 0, "celdaId")
		celda[i].appendChild(celdaId[0])
		creaTd(celdaCantidad, 1, 0, "celdaCantidad")
		celda[i].appendChild(celdaCantidad[0])
		creaTd(celdaComida, "", 0, "celdaComida")
		celda[i].appendChild(celdaComida[0])
		creaTd(celdaPrecio, "", 0, "celdaPrecio")
		celda[i].appendChild(celdaPrecio[0])
		creaTd(celdaClase, "", 0, "celdaClase")
		celda[i].appendChild(celdaClase[0])
		activ[i] = false
		$(celda).hide()
	};
	let edit = localStorage.getItem("edit") || null

	$(document).ready(function () {

		$(".agregadoPapas").hide()
		$(".comidas").click(function () { $(".agregadoPapas").show() })
		$(".agregadoHuevo").hide()
		$(".comidas").click(function () { $(".agregadoHuevo").show() })
		$(".agregadoQueso").hide()
		$(".comidas").click(function () { $(".agregadoQueso").show() })
		$(".agregadoJamon").hide()
		$(".comidas").click(function () { $(".agregadoJamon").show() })

		$(".pedidoEdit").hide()
		if (edit != null) {
			let edit2 = JSON.parse(edit)
			let edit3 = JSON.parse("[" + edit2.detalle + "]")
			for (var i = 0; i < edit3.length; i++) {
				for (var h = 0; h <= 50; h++) {
					if (activ[h] == false) {
						$(celda[h]).show()
						$(celda[h].children[2]).hide();
						celda[h].children[3].innerHTML = `${edit3[h].hidden_cant}`;
						celda[h].children[4].innerHTML = `${edit3[h].hidden_nombre}`;
						celda[h].children[5].innerHTML = `${edit3[h].hidden_precio}`;
						celda[h].children[6].innerHTML = `${edit3[h].hidden_clase}`;
						activ[h] = true
						break;
					}
				}
				pedidoActual.id[i] = i
				pedidoActual.pedido[i] = edit3[i];
			}
			cliente.value = JSON.parse(edit).cliente
			$(".navegador").hide();
			let cancel = document.createElement("button")
			cancel.setAttribute("class", "cancelar")
			cancel.innerHTML = "cancelar"
			let encabezado = document.querySelector(".Encabezado")
			encabezado.innerHTML = `<h2 class="sobreescribiendo">Sobreescribiendo pedido...</h2> 
								<p class="sobreesP"><br>nro: ${JSON.parse(edit).id}<br>cliente: ${JSON.parse(edit).cliente}</p>`
			encabezado.appendChild(cancel)
			$(cancel).click(function () {
				localStorage.removeItem("edit")
				window.location.href = "cuaderno.html"
			})
		}
		fetch("https://apibar-production.up.railway.app/date")
			.then(r => r.json())
			.then(r => {
				if (r.length == 0) {
					$(".general").hide()
					$(".form-date").show();
					$(".navegador").hide()
					$(".form-date").submit(function (e) {
						e.preventDefault()
						$(".form-date").hide()
						$(".general").show()
						$(".navegador").show()
						let fecha = {
							fecha: `${document.querySelector(".fecha").value}`
						}
						fetch("https://apibar-production.up.railway.app/date", {
							method: "POST",
							body: JSON.stringify(fecha),
							headers: { "content-type": "application/json" }
						})
						$(".impDate").html(`<h2>${fecha.fecha}</h2>`)
					})
				} else {
					$(".form-date").hide();
					$(".general").show();
					let fecha = r[0].fecha
					$(".impDate").html(`<h2>${fecha}</h2>`);
				}
			})
	})
	$(".agregadoPapas").css("display", "block")
	$(".agregadoHuevo").css("display", "block")
	$(".agregadoQueso").css("display", "block")
	$(".agregadoJamon").css("display", "block")
	$(".elementos div").hide()
	const mostrarElementos = (element) => {
		$(`#${element}Href`).click(function () {
			$(".elementos div").hide()
			$(`#${element}`).show()
		})
	}
	mostrarElementos("milanesas")
	mostrarElementos("hamburguesas")
	mostrarElementos("lomitos")
	mostrarElementos("pizzas")
	mostrarElementos("papas")
	mostrarElementos("platos")
	// mostrarElementos("empanadas")
	$(`#empanadasHref`).click(function () { $(".elementos div").hide() })
	mostrarElementos("bebidas")
	$("#MilanesaComun").click((e) => {
		selectComida("comun", "Milanesa comun", milanesasdb[0].precio, e.target.classList[1])
	}).css("background-color", colorSan)

	$("#MilanesaFiambre").click((e) => {
		selectComida("fiambre", "Milanesa esp. de fiambre", milanesasdb[1].precio, e.target.classList[1])

	}).css("background-color", colorSan)

	$("#MilanesaPapas").click((e) => {
		selectComida("papas", "Milanesa esp. de papas", milanesasdb[2].precio, e.target.classList[1])
	}).css("background-color", colorSaPapas)

	$("#JuniorComun").click((e) => {
		selectComida("comun", "Junior comun", hamburguesasdb[0].precio, e.target.classList[1])
	}).css("background-color", colorHamPapas)

	$("#JuniorEspecial").click((e) => {
		selectComida("comun", "Junior especial", hamburguesasdb[1].precio, e.target.classList[1])
		label[5].style.display = "inline-block"
		checkbox[5].checked = true;
	}).css("background-color", colorHamPapas)

	$('#MegaComun').click((e) => {
		selectComida("comun", "Mega comun", hamburguesasdb[2].precio, e.target.classList[1])
	}).css("background-color", colorHamb)

	$('#MegaFiambre').click((e) => {
		selectComida("fiambre", "Mega esp. de fiambre", hamburguesasdb[3].precio, e.target.classList[1])
	}).css("background-color", colorHamb)

	$('#MegaPapas').click((e) => {
		selectComida("papas", "Mega esp. de papas", hamburguesasdb[4].precio, e.target.classList[1])
	}).css("background-color", colorHamPapas)

	$('#LomitoComun').click((e) => {
		selectComida("comun", "Lomito comun", lomitosdb[0].precio, e.target.classList[1])
	}).css("background-color", colorSan)

	$('#LomitoFiambre').click((e) => {
		selectComida("fiambre", "Lomito esp. de fiambre", lomitosdb[1].precio, e.target.classList[1])
	}).css("background-color", colorSan)

	$('#LomitoPapas').click((e) => {
		selectComida("papas", "Lomito esp. de papas", lomitosdb[2].precio, e.target.classList[1])
	}).css("background-color", colorSaPapas)

	$('#PizzaComun').click((e) => {
		selectComida(0, pizzasdb[0].nombre, pizzasdb[0].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzaJamon').click((e) => {
		selectComida(0, pizzasdb[1].nombre, pizzasdb[1].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzaFugazza').click((e) => {
		selectComida(0, pizzasdb[2].nombre, pizzasdb[2].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzaCalabresa').click((e) => {
		selectComida(0, pizzasdb[3].nombre, pizzasdb[3].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzaNapolitana').click((e) => {
		selectComida(0, pizzasdb[4].nombre, pizzasdb[4].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzaSardina').click((e) => {
		selectComida(0, pizzasdb[5].nombre, pizzasdb[5].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzanesaP4').click((e) => {
		selectComida(0, pizzasdb[6].nombre, pizzasdb[6].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#PizzanesaP2').click((e) => {
		selectComida(0, pizzasdb[7].nombre, pizzasdb[7].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaComun').click((e) => {
		selectComida(0, pizzasdb[8].nombre, pizzasdb[8].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaJamon').click((e) => {
		selectComida(0, pizzasdb[9].nombre, pizzasdb[9].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaFugazza').click((e) => {
		selectComida(0, pizzasdb[10].nombre, pizzasdb[10].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaCalabresa').click((e) => {
		selectComida(0, pizzasdb[11].nombre, pizzasdb[11].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaNapolitana').click((e) => {
		selectComida(0, pizzasdb[12].nombre, pizzasdb[12].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)

	$('#mediaPizzaSardina').click((e) => {
		selectComida(0, pizzasdb[13].nombre, pizzasdb[13].precio, e.target.classList[1])
	}).css("background-color", colorPizzas)


	$('#PapasComun').click((e) => {
		selectComida(0, papasdb[0].nombre, papasdb[0].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#PapasGratinadas').click((e) => {
		selectComida(0, papasdb[1].nombre, papasdb[1].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#Salchipapas').click((e) => {
		selectComida(0, papasdb[2].nombre, papasdb[2].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#LomitoPlato').click((e) => {
		selectComida(0, platosdb[0].nombre, platosdb[0].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MilanesaNapolitana').click((e) => {
		selectComida(0, platosdb[1].nombre, platosdb[1].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MilanesaCaballo').click((e) => {
		selectComida(0, platosdb[2].nombre, platosdb[2].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MexicanoP1').click((e) => {
		selectComida(0, platosdb[3].nombre, platosdb[3].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MexicanoP2').click((e) => {
		selectComida(0, platosdb[4].nombre, platosdb[4].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MilanesaNapolitanaEnsa').click((e) => {
		selectComida(0, platosdb[5].nombre, platosdb[1].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	$('#MilanesaEnsa').click((e) => {
		selectComida(0, platosdb[6].nombre, platosdb[2].precio, e.target.classList[1])
	}).css("background-color", colorPapas)

	let EmpanadasCarne = document.getElementById('EmpanadasCarne')
		.addEventListener("click", () => { selectComida(0, "Empanada de carne", 600) });

	let EmpanadasPollo = document.getElementById('EmpanadasPollo')
		.addEventListener("click", () => { selectComida(0, "Empanada de pollo", 600) });

	let Pepsi2L = document.getElementById('Pepsi2L')
		.addEventListener("click", () => { selectComida(0, bebidasdb[0].nombre, bebidasdb[0].precio) });

	let Pepsi1_14 = document.getElementById('Pepsi1-1/4')
		.addEventListener("click", () => { selectComida(0, bebidasdb[1].nombre, bebidasdb[1].precio) });

	let Mirinda2L = document.getElementById('Mirinda2L')
		.addEventListener("click", () => { selectComida(0, bebidasdb[2].nombre, bebidasdb[2].precio) });

	let Secco = document.getElementById('Secco')
		.addEventListener("click", () => { selectComida(0, bebidasdb[3].nombre, bebidasdb[3].precio) });

	let Coca15L = document.getElementById('Coca15L')
		.addEventListener("click", () => { selectComida(0, bebidasdb[4].nombre, bebidasdb[4].precio) });

	let JugoFresh = document.getElementById('JugoFresh')
		.addEventListener("click", () => { selectComida(0, bebidasdb[5].nombre, bebidasdb[5].precio) });

	let VasoGaseosa = document.getElementById('VasoGaseosa')
		.addEventListener("click", () => { selectComida(0, bebidasdb[6].nombre, bebidasdb[6].precio) });

	let LataQuilmes = document.getElementById('LataQuilmes')
		.addEventListener("click", () => { selectComida(0, bebidasdb[7].nombre, bebidasdb[7].precio) });








	$(agregadoPapas).click(function () {
		if (agregadoPapas.checked == true)
			papasCantidad.disabled = false
		else {
			papasCantidad.disabled = true
			papasCantidad.value = 1;
		}
	})
	$(agregadoHuevo).click(function () {
		if (agregadoHuevo.checked == true)
			huevoCantidad.disabled = false
		else {
			huevoCantidad.disabled = true
			huevoCantidad.value = 1;
		}
	})


	agregar.addEventListener("click", () => {
		$(".elementos div").hide()
		if (hidden_nombre != undefined) {
			pedidoActual.cantidad += 1
			if (agregadoPapas.checked == true) {
				hidden_nombre += `(+ ${papasCantidad.value} AGREGADO de PAPAS)`
				hidden_precio += (50 * papasCantidad.value);
			}
			if (agregadoHuevo.checked == true) {
				hidden_nombre += `(+ ${huevoCantidad.value} AGREGADO de HUEVO)`
				hidden_precio += (50 * huevoCantidad.value);
			}
			if (agregadoQueso.checked == true) {
				hidden_nombre += `(+ AGREGADO de QUESO)`
				hidden_precio += (50);
			}
			if (agregadoJamon.checked == true) {
				hidden_nombre += `(+ AGREGADO de JAMON)`
				hidden_precio += (50);
			}

			let aux = true;

			if (checkboxs == true) {
				for (var i = 0; i < 8; i++) {
					if (checkbox[i].checked == false) {
						if (label[i].style.display == "inline-block") {
							switch (aux) {
								case true:
									pedi = ` (sin ` + `${checkbox[i].id})`
										; aux = false; break;
								case false:
									pedi += `, (sin ` + `${checkbox[i].id})`
									break;
							}
						}

					}
				}
				if (aux == true) {

					pedi = ` (completa) `
				}
			}
			j++;

		}
		if (hidden_nombre != undefined) {
			hidden_nombre += pedi
			for (var h = 0; h <= 50; h++) {
				if (activ[h] == false) {
					$(celda[h]).show()
					$(celda[h].children[2]).hide();
					celda[h].children[4].innerHTML = `${hidden_nombre}`;
					celda[h].children[3].innerHTML = `${hidden_cant}`;
					celda[h].children[5].innerHTML = `${hidden_precio}`;
					celda[h].children[6].innerHTML = `${hidden_clase}`;
					activ[h] = true
					break;
				}
			}

			let g = 0, repet = true;

			do {
				if (pedidoActual.id[g] == undefined) {
					pedidoActual.id[g] = g
					pedidoActual.pedido[g] = { hidden_nombre, hidden_precio, hidden_cant, hidden_clase };
					repet = false;
				}
				else g++;
			} while (repet == true);
		}
		if (hidden_nombre != undefined) {
			sumadorDeImportes();
			importeOutput.value = pedidoFinal.importe
			switch (hidden_clase) {
				case "panSan": sumaPanSan += 1; break;
				case "panHamb": sumaPanHamb += 1; break;
				case "pPapas": sumapPapas += 1; break;
				case "pPizzas": sumapPizzas += 1; break;
				case "panSaPapas": sumaPanSan += 1; sumapPapas += 1; break;
				case "panHamPapas": sumaPanHamb += 1; sumapPapas += 1; break;
				default: break;
			}
		}
		hidden_nombre = undefined
	})
	celda.forEach(cel => {
		cel.children[0].addEventListener("click", () => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					pedidoActual.pedido[id].hidden_cant++;
					pedidoActual.pedido[id].hidden_precio = pedidoActual.pedido[id].hidden_precio / (pedidoActual.pedido[id].hidden_cant - 1) * pedidoActual.pedido[id].hidden_cant;
					cel.children[3].innerHTML = `${pedidoActual.pedido[id].hidden_cant}`;
					cel.children[5].innerHTML = `${pedidoActual.pedido[id].hidden_precio}`;
					switch (pedidoActual.pedido[id].hidden_clase) {
						case "panSan": sumaPanSan += 1; break;
						case "panHamb": sumaPanHamb += 1; break;
						case "pPapas": sumapPapas += 1; break;
						case "pPizzas": sumapPizzas += 1; break;
						case "panSaPapas": sumaPanSan += 1; sumapPapas += 1; break;
						case "panHamPapas": sumaPanHamb += 1; sumapPapas += 1; break;
						default: break;
					}
				}
			})
			sumadorDeImportes();
			importeOutput.value = pedidoFinal.importe
		})
		cel.children[1].addEventListener("click", () => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					pedidoActual.pedido[id].hidden_cant--;
					switch (pedidoActual.pedido[id].hidden_clase) {
						case "panSan": sumaPanSan -= 1; break;
						case "panHamb": sumaPanHamb -= 1; break;
						case "pPapas": sumapPapas -= 1; break;
						case "pPizzas": sumapPizzas -= 1; break;
						case "panSaPapas": sumaPanSan -= 1; sumapPapas -= 1; break;
						case "panHamPapas": sumaPanHamb -= 1; sumapPapas -= 1; break;
						default: break;
					}
					if (pedidoActual.pedido[id].hidden_cant == 0) {
						pedidoActual.id[id] = undefined
						pedidoActual.pedido[id] = "";
						cel.children[4].innerHTML = ``;
						cel.children[3].innerHTML = 1;
						cel.children[5].innerHTML = ``;
						$(cel).hide()
						activ[id] = false
					}
					else {
						pedidoActual.pedido[id].hidden_precio = pedidoActual.pedido[id].hidden_precio - (pedidoActual.pedido[id].hidden_precio / (pedidoActual.pedido[id].hidden_cant + 1));
						cel.children[3].innerHTML = `${pedidoActual.pedido[id].hidden_cant}`;
						cel.children[5].innerHTML = `${pedidoActual.pedido[id].hidden_precio}`;
					}
				}
			})
			sumadorDeImportes();
			importeOutput.value = pedidoFinal.importe
		})
	})
	const sumadorDeImportes = () => {
		let sumaImportes = 0;
		celda.forEach(cel => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					sumaImportes += parseInt(cel.children[5].textContent) // AKI MeKEDEE
				}
			})
		})
		pedidoFinal.importe = sumaImportes;
	}
	const sumadorDeCant = () => {
		let sumaCant = 0;
		celda.forEach(cel => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					sumaCant += parseInt(cel.children[3].textContent) // AKI MeKEDEE
				}
			})
		})
		pedidoFinal.cantidad = sumaCant
	}
	const actualAFinal_pedido = () => {
		let i = 0;
		celda.forEach(cel => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					pedidoFinal.pedido[i] = pedidoActual.pedido[id]
					i++;
				}
			})
		})
	}
	const actualAFinal_detalle = () => {
		celda.forEach(cel => {
			pedidoActual.id.forEach(id => {
				if (cel.children[2].textContent == id) {
					pedidoFinal.detalle += `${cel.children[3].textContent} ${cel.children[4].textContent}<br><br>`
				}
			})
		})
	}
	const enviarData = async () => {
		$(".enviar").hide();
		let lnsRing = document.createElement("div")
		document.querySelector(".carrito").appendChild(lnsRing)
		lnsRing.setAttribute("class", "lds-ring")
		let div1 = document.createElement("div")
		lnsRing.appendChild(div1)
		let div2 = document.createElement("div")
		lnsRing.appendChild(div2)
		let div3 = document.createElement("div")
		lnsRing.appendChild(div3)
		let div4 = document.createElement("div")
		lnsRing.appendChild(div4)
		$(".lds-ring").css({
			"width": "20px",
			"height": "20px",
			"display": "inline-block",
			"margin-top": "0"
		})
		$(".lds-ring div").css({
			"width": "15px",
			"height": "15px"
		})
		let petiPOST = await fetch("https://apibar-production.up.railway.app/pedidos", {
			method: "POST",
			body: JSON.stringify(pedidoFinal),
			headers: { "content-type": "application/json" }
		})
		let dataPOST = await petiPOST.json();
		let petiGET = await fetch("https://apibar-production.up.railway.app/pedidos")
		let dataGET = await petiGET.json();
		if (window.screen.width > 880) {
			ticketCosina(dataGET[dataGET.length - 1].id, pedidoFinal.cliente, pedidoFinal.detalle)
			window.location.reload();
		}
		else {
			$(".general").hide()
			let pedidoEnviado = document.createElement("h1")
			pedidoEnviado.innerHTML = "pedido enviado correctamente"
			document.body.appendChild(pedidoEnviado)
			$(pedidoEnviado).css({
				"color": "#33aa33",
				"display": "block",
				"text-align": "center",
				"margin": "auto",
				"background": "#080808",
				"border-radius": "18px"
			})
			setTimeout(() => { window.location.reload(); }, 1080)
		}
	}
	carrito.addEventListener("submit", (e) => {
		e.preventDefault();
		try {
			actualAFinal_pedido()
			if (pedidoFinal.pedido.length != 0) {
				sumadorDeImportes();
				sumadorDeCant();
				actualAFinal_detalle()
				pedidoFinal.cliente = cliente.value;
				if (edit != null) {
					const peticionPut = async () => {
						$(".enviar").hide();
						let lnsRing = document.createElement("div")
						document.querySelector(".carrito").appendChild(lnsRing)
						lnsRing.setAttribute("class", "lds-ring")
						let div1 = document.createElement("div")
						lnsRing.appendChild(div1)
						let div2 = document.createElement("div")
						lnsRing.appendChild(div2)
						let div3 = document.createElement("div")
						lnsRing.appendChild(div3)
						let div4 = document.createElement("div")
						lnsRing.appendChild(div4)
						$(".lds-ring").css({
							"width": "20px",
							"height": "20px",
							"display": "inline-block",
							"margin-top": "0"
						})
						$(".lds-ring div").css({
							"width": "15px",
							"height": "15px"
						})
						const resPut = await fetch(`https://apibar-production.up.railway.app/pedidos/${JSON.parse(edit).id}`, {
							method: "PUT",
							body: JSON.stringify(pedidoFinal),
							headers: { "content-type": "application/json" }
						})
						const dataPut = await resPut.json();
						if (window.screen.width > 880) {
							ticketCosina(JSON.parse(edit).id, pedidoFinal.cliente, pedidoFinal.detalle)
							window.location.href = "cuaderno.html"
						}
						else {
							$(".general").hide()
							let pedidoEnviado = document.createElement("h1")
							pedidoEnviado.innerHTML = "pedido editado correctamente"
							document.body.appendChild(pedidoEnviado)
							$(pedidoEnviado).css({
								"color": "#33aa33",
								"display": "block",
								"text-align": "center",
								"margin": "auto",
								"background": "#080808",
								"border-radius": "18px"
							})
							setTimeout(() => { window.location.href = "cuaderno.html" }, 1080)
						}
						localStorage.removeItem("edit")

					}
					peticionPut();

				}
				else {
					enviarData();
				}
			}
			else {
				alert("no se ingreso ningun pedido")
				window.location.reload();
			}
			$(".enviar").click(function () { $(".enviar").hide() })
		}
		catch (err) {
			alert("a ocurrido un error")
		}
		if (divStock.children[0].children[1].value != "") localStorage.setItem("stockSan", divStock.children[0].children[1].value - sumaPanSan);
		if (divStock.children[1].children[1].value != "") localStorage.setItem("stockHamb", divStock.children[1].children[1].value - sumaPanHamb);
		if (divStock.children[2].children[1].value != "") localStorage.setItem("stockPapas", divStock.children[2].children[1].value - sumapPapas);
		if (divStock.children[3].children[1].value != "") localStorage.setItem("stockPizzas", divStock.children[3].children[1].value - sumapPizzas);
	})
	document.addEventListener("keydown", () => {
		if (event.keyCode == 17) {
			window.location.href = "cuaderno.html"
			localStorage.removeItem("edit")
		}
	});
}
recibirData(milanesasdb, lomitosdb, hamburguesasdb, pizzasdb, papasdb, platosdb, bebidasdb);