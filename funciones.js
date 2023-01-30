let tildador = (x) => {
	agregadoPapas.checked = false
	agregadoHuevo.checked = false
	agregadoQueso.checked = false
	agregadoJamon.checked = false
	papasCantidad.disabled = true
	papasCantidad.value = 1;
	huevoCantidad.disabled = true
	huevoCantidad.value = 1;
	$("label").show();
	$(".complementos").show();
	for (var i = 0; i <= checkbox.length - 1; i++) {
		label[i].style.display = "inline-block";
		complementos.style.display = "inline-block";
		if (checkbox[i].id == "Aji") checkbox[i].checked = false;
		else
			checkbox[i].checked = true;
	}
	switch (x) {
		case "comun":
			for (var i = 0; i <= checkbox.length - 1; i++) {
				switch (checkbox[i].classList[0]) {
					case "ePapas": label[i].style.display = "none";
						checkbox[i].checked = false; break;
					case "eFiambre": label[i].style.display = "none";
						checkbox[i].checked = false; break;
					case "huevo": label[i].style.display = "none";
						checkbox[i].checked = false; break;
				}
			} break;
		case "fiambre":
			for (var i = 0; i <= checkbox.length - 1; i++) {
				switch (checkbox[i].classList[0]) {
					case "eFiambre": label[i].style.display = "inline-block";
						checkbox[i].checked = true; break;
					case "ePapas": label[i].style.display = "none";
						checkbox[i].checked = false; break;
					case "huevo": label[i].style.display = "inline-block";
						checkbox[i].checked = true; break;
				}
			} break;
		case "papas":
			for (var i = 0; i <= checkbox.length - 1; i++) {
				switch (checkbox[i].classList[0]) {
					case "ePapas": label[i].style.display = "inline-block";
						checkbox[i].checked = true; break;
					case "eFiambre": label[i].style.display = "none";
						checkbox[i].checked = false; break;
					case "huevo": label[i].style.display = "inline-block";
						checkbox[i].checked = true; break;
				}
			} break;
		default:
			noneLabel(label);
			break;
	}
}

let selectComida = function (tipo, nombre, precio, clase) {
	tildador(tipo);
	hidden_precio = parseInt(precio);
	hidden_nombre = nombre;
	hidden_cant = 1;
	hidden_clase = clase || "";
}
const noneLabel = (label) => {
	$(".complementos label").hide();

}


const creaTr = (fila, i) => {
	fila[i] = document.createElement("tr")
	fila[i].setAttribute("class", "fila")
}

const creaTd = (celda, r, i, clase) => {
	celda[i] = document.createElement("td")
	celda[i].setAttribute("class", `${clase}`)
	celda[i].innerHTML = `${r}`
}
const creaBoton = (boton, i, mensaje, clase) => {
	boton[i] = document.createElement("button")
	boton[i].setAttribute("class", `${clase}`)
	boton[i].innerHTML = `${mensaje}`
}
const creaOutput = (output, i, mensaje) => {
	output[i] = document.createElement("output")
	output[i].setAttribute("class", "output")
	output[i].innerHTML = `${mensaje}`
}

const pintar = (hidden, color) => {
	fila.forEach(item => {
		hidden.forEach(hidden => {
			if (item.children[2].textContent == hidden.children[2].textContent) {
				item.children[5].style.background = `linear-gradient(to right,#${color}, #010101)`;
			}
		})
	})
}

const darOk = (ejecucion, delivery, hidden_delivery, viajes, repartoCliente, hd, importe, ar1, ar2, r) => {
	if (ejecucion == true) {
		const statuPUT = async () => {
			let da = await fetch(`https://apibar-production.up.railway.app/statu/${hidden_delivery[0].children[0].textContent}`, {
				method: "PUT",
				body: `{"statu": "entregado_${delivery}"}`,
				headers: { "content-type": "application/json" }
			})
			let data = await da.json();
			let viaj = JSON.parse(localStorage.getItem("pedidosViaje")) || []
			let arraux = [];
			for (var i = 0; i < viaj.length; i++) {
				if (viaj[i].delivery != delivery) {
					arraux.push(viaj[i])
				}
			}
			if (arraux.length >= 1) {
				let arrViajJSON = JSON.stringify(arraux);
				localStorage.setItem("pedidosViaje", arrViajJSON)
			}
			else { localStorage.removeItem("pedidosViaje") }
			enviado(r, hidden_delivery, delivery)
			table3.children[0].children[ar1].children[2].removeChild(botonDeli[ar2])
			botonDeli[ar2] = undefined
			fila.forEach(item => {
				hidden_delivery.forEach(hidden => {
					pintar(hidden_delivery, 226425)
					if (item.children[0].textContent == hidden.children[0].textContent) {
						viajes += parseInt(item.children[4].textContent);
					}
				})
			})
			repartoCliente.innerHTML = ``
			hidden_delivery.splice(0, hidden_delivery.length);
			hd = 0;
			importe.innerHTML = `cantidad: ${viajes}<br>$${viajes * comision}`
			window.location.reload();
		}
		statuPUT();
	}
	return viajes;
}

const agregarViaje = (fila, hidden_delivery, ejecucion, repartoCliente, delivery, ar1, ar2, ar3, r) => {
	let arr = []
	viajado(r, hidden_delivery, delivery, ejecucion)
	for (var i = 0; i < hidden_delivery.length; i++) {
		if (ejecucion == false) {
			pintar(hidden_delivery, "816907");
			repartoCliente.innerHTML += `${hidden_delivery[i].children[2].textContent}. `
		}
		if (i == hidden_delivery.length - 1) ejecucion = true;
	}
	printPrint(ejecucion, ar1, ar2, hidden_delivery, arr, r);
	borraDelivery(ejecucion, ar1, ar3, delivery);
}

const printPrint = (ejecucion, ar1, ar2, hidden_delivery, arr, r) => {
	if (ejecucion == true) {
		if (botonDeli[ar2] == undefined) {
			creaBoton(botonDeli, ar2, `<i class="fa-solid fa-print"></i>`, "imp");
			table3.children[0].children[ar1].children[2].appendChild(botonDeli[ar2])
		}
		table3.children[0].children[ar1].children[2].children[1].addEventListener("click", () => {
			ticketDelivery(hidden_delivery, r)
		})


	}
}
const borraDelivery = (ejecucion, ar1, ar3, delivery) => {
	if (ejecucion == true) {
		if (table3.children[0].children[ar1].children[2].children[2] == undefined) {
			creaBoton(botonDeli, ar3, `X`, "borr");
			table3.children[0].children[ar1].children[2].appendChild(botonDeli[ar3])
		}

		table3.children[0].children[ar1].children[2].children[2].addEventListener("click", () => {
			let arr = JSON.parse(localStorage.getItem("pedidosViaje")) || [];
			let arraux = [], i = 0;
			arr.forEach(arr => {
				if (arr.delivery == delivery);
				else {
					arraux[i] = arr;
					i++;
				}
			})
			arraux = JSON.stringify(arraux);
			localStorage.setItem("pedidosViaje", arraux)
			window.location.reload();
		})
	}

}

const enviado = (r, hidden_delivery, delivery) => {
	r.forEach(r => {
		hidden_delivery.forEach(hidden => {
			if (r.id == hidden.children[7].textContent) { setEnViajeLS(r, delivery) };
		})
	})
}
const viajado = (r, hidden_delivery, delivery, ejecucion) => {
	if (ejecucion == false) {
		r.forEach(r => {
			hidden_delivery.forEach(hidden => {
				if (r.id == hidden.children[7].textContent) { setViajeLS(r, delivery) };
			})
		})
	}
}

const setEnViajeLS = (r, delivery) => {
	let arr =  [];
	r["delivery"] = delivery
	arr.push(r);
	let arrEnviajeJSON = JSON.stringify(arr);
}
const setViajeLS = (r, delivery) => {
	let arr = JSON.parse(localStorage.getItem("pedidosViaje")) || [];
	r["delivery"] = delivery
	arr.push(r);
	let arrViajeJSON = JSON.stringify(arr);
	localStorage.setItem("pedidosViaje", arrViajeJSON)
}


const cerrarSesion = async () => {
	let option = confirm("esta seguro de cerrar sesion? recuerde haber guardado el cuaderno antes.")
	if (option == true) {

		let pedidosDELETE = await fetch('https://apibar-production.up.railway.app/pedidos', {
			method: "DELETE"
		})
		console.log(pedidosDELETE)
		$(".table1").hide()
		$(".table2").hide()
		$(".table3").hide()
		$(".cerrarSesion").hide()
		$(".imprCuaderno").hide()
		$(".contAgreg").hide()
		let sesionEnd = document.createElement("h1")
		sesionEnd.innerHTML = "Sesion terminada"
		document.body.appendChild(sesionEnd)
		$(sesionEnd).css({
			"color": "#f95",
			"display": "flex",
			"text-align": "center",
			"margin": "auto",
			"background": "#080808",
			"border-radius": "18px"
		})
		localStorage.clear();
		setTimeout(() => { window.location.href = "index.html" }, 2010)
	}
}
const ticketCosina = (numero, clienteP, detalle) => {
	w = window.open()
	let div = w.document.createElement('div');
	w.document.body.appendChild(div);
	let nro = w.document.createElement('nro');
	div.appendChild(nro);
	let cliente = w.document.createElement('cliente');
	div.appendChild(cliente);
	let detalleP = w.document.createElement('detalleP');
	div.appendChild(detalleP);

	nro.innerHTML = numero
	cliente.innerHTML = clienteP
	detalleP.innerHTML = detalle
	$(nro).css({
		"border": "solid 1px",
		"border-radius": "40%",
		"font-size": "17px",
		"padding": "3px",
		"margin-right": "5px"
	})
	$(cliente).css({
		"font-size": "18px",
	})
	$(detalleP).css({
		"border": "solid 2px",
		"margin-top": "5px",
		"display": "block",
		"font-size": "17px",
		"padding": "2px"
	})
	$(div).css({
		"width": "100%",

	})
	w.focus();
	w.print();
	w.close()
}

const ticketDelivery = (hidden_delivery, r) => {
	w = window.open()

	let div = w.document.createElement('div');
	w.document.body.appendChild(div);

	let table = w.document.createElement('table');
	div.appendChild(table);
	let fila = [], celdaCliente = [], celdaImporte = [];
	for (var i = 0; i <= hidden_delivery.length - 1; i++) {

		fila[i] = w.document.createElement('tr');
		table.appendChild(fila[i]);
		celdaCliente[i] = w.document.createElement('td');
		fila[i].appendChild(celdaCliente[i]);
		celdaImporte[i] = w.document.createElement('td');
		fila[i].appendChild(celdaImporte[i]);
		celdaCliente[i].innerHTML = hidden_delivery[i].children[2].textContent;
		celdaImporte[i].innerHTML = `${hidden_delivery[i].children[3].textContent}`;
		for (let j = 0; j < r.length; j++) {
			if (r[j].id == hidden_delivery[i].children[0].textContent) {
				if (r[j].pagado == "1") {
					celdaImporte[i].innerHTML = ` pagado`;
				}
			}
		}
	}


	$(celdaCliente).css({
		"border-bottom": "solid 1px",
		"font-size": "17px",
		"text-transform": "lowercase",
		"padding": "3px",
		"margin": "0px"
	})
	$(celdaImporte).css({
		"border-bottom": "solid 1px",
		"font-size": "17px",
		"padding": "3px",
		"margin": "0px"
	})

	$(div).css({
		"width": "100%",

	})
	w.focus();
	w.print();
	w.close()
}

const ticketCliente = (comida, importe) => {
	w = window.open()
	let div = w.document.createElement('div');
	w.document.body.appendChild(div);
	let h1 = w.document.createElement('h1');
	div.appendChild(h1);
	h1.innerHTML = `Bar<br>Los Primos`
	let table = w.document.createElement('table');
	div.appendChild(table);
	let fila = [], celdaComida = [], celdaPrecio = [];
	for (var i = 0; i <= comida.pedidos.length - 1; i++) {

		fila[i] = w.document.createElement('tr');
		table.appendChild(fila[i]);
		celdaComida[i] = w.document.createElement('td');
		fila[i].appendChild(celdaComida[i]);
		celdaPrecio[i] = w.document.createElement('td');
		fila[i].appendChild(celdaPrecio[i]);
		celdaComida[i].innerHTML = comida.pedidos[i].hidden_cant + comida.pedidos[i].hidden_nombre;
		celdaPrecio[i].innerHTML = `$${comida.pedidos[i].hidden_precio}`;

	}
	let celdaTotal = w.document.createElement('td');
	table.appendChild(celdaTotal);
	celdaTotal.innerHTML = "total"

	let celdaTotalPrecio = w.document.createElement('td');
	table.appendChild(celdaTotalPrecio);
	celdaTotalPrecio.innerHTML = importe

	$(h1).css({
		"display": "block",
		"font-family": "sans-serif",
		"margin": "auto",
		"font-size": "11px",
		"justify-content": "center",
		"text-align": "center"

	})
	$(celdaComida).css({
		"border-bottom": "solid 1px",
		"font-size": "17px",
		"padding": "3px",
		"text-transform": "lowercase",
		"margin": "0px"
	})
	$(celdaPrecio).css({
		"border-bottom": "solid 1px",
		"font-size": "17px",
		"padding": "3px",
		"margin": "0px"
	})
	$(celdaTotal).css({
		"border-top": "solid 3px",
		"font-size": "18px",
		"width": "100%"
	})
	$(celdaTotalPrecio).css({
		"border-top": "solid 3px",
		"font-size": "18px",
		"width": "100%"
	})

	$(div).css({
		"width": "100%",

	})
	w.focus();
	w.print();
	w.close()
}

const impCuaderno = (r, suma, table2, date, viajes1, viajes2, viajes3, comision) => {
	w = window.open()
	let div = w.document.createElement("div");
	w.document.body.appendChild(div);
	div.innerHTML = `<h1>DIA: ${date}</h1><br>
					<h2>VIAJES:</h2>
					<h4>${table2[0].children[0].textContent}= (${viajes1}) $${viajes1 * comision}</h4>
					<h4>${table2[0].children[1].textContent}= (${viajes2}) $${viajes2 * comision}</h4>
					<h4>${table2[0].children[2].textContent}= (${viajes3}) $${viajes3 * comision}</h4>`
	let table = w.document.createElement('table');
	w.document.body.appendChild(table);
	let fila = [];
	console.log(table2)
	for (let i = 0; i <= r.length - 1; i++) {
		fila[i] = w.document.createElement(`tr`);
		table.appendChild(fila[i]);

		let nro = w.document.createElement(`td`);
		fila[i].appendChild(nro);
		nro.innerHTML = r[i].id;
		let detalle = w.document.createElement(`td`);
		fila[i].appendChild(detalle);
		detalle.innerHTML = r[i].detalleTicket;
		let cliente = w.document.createElement(`td`);
		fila[i].appendChild(cliente);
		cliente.innerHTML = r[i].cliente;
		let importe = w.document.createElement(`td`);
		fila[i].appendChild(importe);
		importe.innerHTML = r[i].importe;
		let cantidad = w.document.createElement(`td`);
		fila[i].appendChild(cantidad);
		cantidad.innerHTML = r[i].cantidad;
		$([nro, detalle, cliente, importe, cantidad]).css({
			"border-bottom": "solid 3px"
		})
	}

	let total = w.document.createElement(`tr`);
	table.appendChild(total);
	total.innerHTML = `Importe total $${suma}`

	$(table).css({
		"width": "100%",
		"border": "solid 3px"
	})
	w.focus();
	w.print();
	w.close()
}


const editPedido = () => {
	window.location.href = "index.html"
}