let output = [], delivery1 = "Maia", delivery2 = "Barbi", delivery3 = "Tomi", retiro = "retirado", pagado = "pagado";
const comision = 25;
let hidden_delivery1 = [], hidden_delivery2 = [], hidden_delivery3 = [];
let agregar = document.querySelector(".agregar")
let table1 = document.querySelector(".table1")
let table2 = document.querySelector(".table2")
let table3 = document.querySelector(".table3")
let tableDelivery1 = document.querySelector(".delivery1")
let tableDelivery2 = document.querySelector(".delivery2")
let tableDelivery3 = document.querySelector(".delivery3")
let repartoDelivery1 = document.querySelector(".repartoDeliv1")
let repartoDelivery2 = document.querySelector(".repartoDeliv2")
let repartoDelivery3 = document.querySelector(".repartoDeliv3")
let repartoCliente1 = document.querySelector(".repartoClients1")
let repartoCliente2 = document.querySelector(".repartoClients2")
let repartoCliente3 = document.querySelector(".repartoClients3")
let importe1 = document.querySelector(".importe1")
let importe2 = document.querySelector(".importe2")
let importe3 = document.querySelector(".importe3")
let nombreTikDelivery = document.querySelector(".nombreTikDelivery")
let tbodyTikDelivery = document.querySelector(".tbodyTikDelivery")
let noTempla = document.querySelector(".noTempla")
let suma = parseInt(0), viajes1 = parseInt(0), viajes2 = parseInt(0), viajes3 = parseInt(0);
let hd2 = 0, hd1 = 0, hd3 = 0, ejecucion1 = false, ejecucion2 = false, ejecucion3 = false;
let fila = [], filaTik = [];
let celda = [];
let botonEnv = [], botonDeli = [];


nombreTikDelivery.textContent = ""
tableDelivery1.textContent = delivery1
tableDelivery2.textContent = delivery2
tableDelivery3.textContent = delivery3
repartoDelivery1.textContent = delivery1
repartoDelivery2.textContent = delivery2
repartoDelivery3.textContent = delivery3
repartoCliente1.innerHTML = ``
repartoCliente2.innerHTML = ``
repartoCliente3.innerHTML = ``
importe1.innerHTML = `cantidad: ${viajes1}<br>$${viajes1 * comision}`
importe2.innerHTML = `cantidad: ${viajes2}<br>$${viajes2 * comision}`
importe3.innerHTML = `cantidad: ${viajes2}<br>$${viajes2 * comision}`

$(".botonCuaTable3").click(() => {
	$(".table3").css({
		"display": "block",
		"position": "absolute",
		"top": "18%",
		"text-align": "center",
		"width": "90%"
	})
	$(".botonCerrarTable3").css("display", "block")
	$(".botonCerrarTable2").css("display", "none")
	$(".table2").hide()
})
$(".botonCerrarTable3").click(() => {
	$(".table3").css({
		"display": "none"
	})
})
$(".botonCuaTable2").click(() => {
	$(".table2").css({
		"display": "block",
		"position": "absolute",
		"top": "18%",
		"text-align": "center",
		"width": "60%"
	})
	$(".botonCerrarTable2").css("display", "block")
	$(".botonCerrarTable3").css("display", "none")
	$(".table3").hide()
})
$(".botonCerrarTable2").click(() => {
	$(".table2").css({
		"display": "none"
	})
})
let ldsring = document.querySelector(".lds-ring");
// let fechaLS = localStorage.getItem("fechaLS") || null
// if (fechaLS == null) {
// 	async () => {
// 		const fechaGET = await fetch("https://apibar-production.up.railway.app/date")
// 		const dataFecha = await fechaGET.json();
// 		fechaLS = dataFecha;
// 	}
// }
const date = new Date().toLocaleDateString();
$(".impDate").html(`<h2>${date}</h2>`)
const recibirData = async () => {
	let petiGETPedidos = await fetch("https://apibar-production.up.railway.app/pedidos")
	let r = await petiGETPedidos.json()
	ldsring.remove();


	let dadaa = [], comida = []
	for (var j = 0; j < r.length; j++) {
		dadaa[j] = JSON.parse(`{ "pedidos": [${r[j].detalle}]}`)

		for (var i = 0; i <= dadaa[j].pedidos.length - 1; i++) {
			if (comida[j] == undefined) comida[j] = `${dadaa[j].pedidos[i].hidden_cant} ${dadaa[j].pedidos[i].hidden_nombre}`;
			else comida[j] += `<br>` + `${dadaa[j].pedidos[i].hidden_cant} ${dadaa[j].pedidos[i].hidden_nombre}`;

		}
		creaTr(fila, j)
		table1.appendChild(fila[j]);
		creaTd(celda, r[j].id, 0, "celda");
		creaTd(celda, comida[j], 1, "celDetalles");
		creaTd(celda, r[j].cliente, 2, "celda");
		creaTd(celda, `$${r[j].importe}`, 3, "celda");
		creaTd(celda, r[j].cantidad, 4, "celda");
		creaTd(celda, "", 5)
		creaTd(celda, r[j].detalleTicket, 6, "none");
		creaTd(celda, r[j].id, 7, "none");

		for (var i = 0; i < celda.length; i++) {
			fila[j].appendChild(celda[i])
		}
		let div = document.createElement("DIV")
		fila[j].children[5].appendChild(div)
		creaBoton(botonDeli, 10, delivery1, "boton");
		creaBoton(botonDeli, 11, delivery2, "boton");
		creaBoton(botonDeli, 18, delivery3, "boton");
		creaBoton(botonDeli, 12, "retirar", "boton");
		creaBoton(botonDeli, 14, "pagar", "boton");
		creaBoton(botonDeli, 3, `<i class="fa-solid fa-print"></i>`, "imp");
		creaBoton(botonDeli, 6, `<i class="fa-solid fa-trash-can"></i>`, "borr");
		creaBoton(botonDeli, 13, `<i class="fa-solid fa-chevron-right"></i>`, "mas");
		creaBoton(botonDeli, 15, `<i class="fa-solid fa-pen-to-square"></i>`, "boton");
		creaBoton(botonDeli, 16, `<i class="fa-solid fa-receipt"></i>`, "boton");
		creaBoton(botonDeli, 17, `PJ`, "boton");
		$(fila[j].children[5]).addClass("colBotones");
		$(fila[j].children[5].children[0]).addClass("divBotones");
		fila[j].children[5].children[0].appendChild(botonDeli[13])
		fila[j].children[5].children[0].appendChild(botonDeli[10])
		fila[j].children[5].children[0].appendChild(botonDeli[11])
		fila[j].children[5].children[0].appendChild(botonDeli[18])
		fila[j].children[5].children[0].appendChild(botonDeli[12])
		fila[j].children[5].children[0].appendChild(botonDeli[14])
		fila[j].children[5].children[0].appendChild(botonDeli[3])
		fila[j].children[5].children[0].appendChild(botonDeli[6])
		fila[j].children[5].children[0].appendChild(botonDeli[15])
		fila[j].children[5].children[0].appendChild(botonDeli[16])
		fila[j].children[5].children[0].appendChild(botonDeli[17])

		suma += r[j].importe;

	}

	$(".imp").addClass("boton");
	$(".borr").addClass("boton");
	$(".boton").css("display", "none");

	let celdaTotal = document.createElement("td")
	celdaTotal.setAttribute("class", "celdaTotal")
	table1.appendChild(celdaTotal)
	let pceldaTotal = document.createElement("p")
	pceldaTotal.setAttribute("class", "pceldaTotal")
	pceldaTotal.innerHTML = `Importe total :   *****`
	celdaTotal.appendChild(pceldaTotal)
	let eye = document.createElement("button")
	eye.setAttribute("class", "eye")
	eye.innerHTML = `<i class="fa-solid fa-eye"></i>`
	celdaTotal.appendChild(eye)
	eye.addEventListener("click", () => {
		if (pceldaTotal.innerHTML == `Importe total :   *****`) {
			pceldaTotal.innerHTML = `Importe total :   $${suma}`;
			eye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`
		}
		else {
			pceldaTotal.innerHTML = `Importe total :   *****`;
			eye.innerHTML = `<i class="fa-solid fa-eye"></i>`
		}
	})


	let aregloLS = []
	let aregloViajeLS = JSON.parse(localStorage.getItem("pedidosViaje")) || []
	let pedidoEntregado = (importe, delivery, viajes, item, r) => {
		if (r.id == item.children[7].textContent) {
			item.children[5].innerHTML = `${delivery}`
			item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
			item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
		}
	}
	r.forEach(re => {
		fila.forEach(item => {
			if (re.pj == "1") {
				if (re.id == item.children[0].textContent) {
					item.children[3].innerHTML += ` <b>(PJ)</b>`
					$(item.children[3]).css("color", "#16ea31")
				}
			}
			if (re.pagado == "1") {
				if (re.id == item.children[0].textContent) {
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #bea719, #010101)";
					for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
						$(item.children[5].children[0].children[i]).hide()
					}
					for (var i = 1; i <= 4; i++) {
						$(item.children[5].children[0].children[i]).show()
						$(item.children[5].children[0].children[i]).css("background", "#000")
						$(item.children[5].children[0].children[i]).css("color", "#bea719")
					}
					creaOutput(output, 1, pagado)
					item.children[5].appendChild(output[1])
					$(".output").css("float", "left")
					$(item.children[5].children[0]).css("float", "right")
					item.children[5].children[1].addEventListener("click", () => {
						item.children[5].children[1].remove();
						const petitPUT = async () => {
							let da = await fetch(`https://apibar-production.up.railway.app/pagado/${item.children[0].textContent}`, {
								method: "PUT",
								body: '{"pagado":0}',
								headers: { "content-type": "application/json" }
							})
							let data = await da.json();
							window.location.reload()
						}
						petitPUT();
					})
				}
			}
			if (re.statu == `entregado_${delivery1}`) {
				if (re.id == item.children[7].textContent) {
					viajes1 += re.cantidad;
					importe1.innerHTML = `cantidad: ${viajes1}<br>$${viajes1 * comision}`
				}
				pedidoEntregado(importe1, delivery1, viajes1, item, re)
			}
			if (re.statu == `entregado_${delivery2}`) {
				if (re.id == item.children[7].textContent) {
					viajes2 += re.cantidad;
					importe2.innerHTML = `cantidad: ${viajes2}<br>$${viajes2 * comision}`
				}
				pedidoEntregado(importe2, delivery2, viajes2, item, re)
			}
			if (re.statu == `entregado_${delivery3}`) {
				if (re.id == item.children[7].textContent) {
					viajes3 += re.cantidad;
					importe3.innerHTML = `cantidad: ${viajes3}<br>$${viajes3 * comision}`
				}
				pedidoEntregado(importe3, delivery3, viajes3, item, re)
			}
		})
	})
	aregloLS.forEach(aregloLS => {
		if (aregloLS.delivery == delivery1) {
			fila.forEach(item => {
				if (aregloLS.id == item.children[7].textContent) {
					item.children[5].innerHTML = `${delivery1}`
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
				}
			})
			viajes1 += parseInt(aregloLS.cantidad);
			importe1.innerHTML = `cantidad: ${viajes1}<br>$${viajes1 * comision}`
		}
		if (aregloLS.delivery == delivery2) {
			fila.forEach(item => {
				if (aregloLS.id == item.children[7].textContent) {
					item.children[5].innerHTML = `${delivery2}`
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
				}
			})
			viajes2 += parseInt(aregloLS.cantidad);
			importe2.innerHTML = `cantidad: ${viajes2}<br>$${viajes2 * comision}`
		}
		if (aregloLS.delivery == delivery3) {
			fila.forEach(item => {
				if (aregloLS.id == item.children[7].textContent) {
					item.children[5].innerHTML = `${delivery3}`
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
				}
			})
			viajes3 += parseInt(aregloLS.cantidad);
			importe3.innerHTML = `cantidad: ${viajes3}<br>$${viajes3 * comision}`
		}
		if (aregloLS.delivery == pagado) {
			fila.forEach(item => {
				if (aregloLS.id == item.children[7].textContent) {
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #bea719, #010101)";
					creaOutput(output, 1, pagado)
					item.children[5].appendChild(output[1])
					$(".output").css("float", "left")
					// $(item.children[5].children[0]).css("width","290px")
					$(item.children[5].children[0]).css("float", "right")
					for (var i = 1; i <= 4; i++) {
						$(item.children[5].children[0].children[i]).show()
						$(item.children[5].children[0].children[i]).css("background", "#000")
						$(item.children[5].children[0].children[i]).css("color", "#bea719")
					}
					$(item.children[5].children[0].children[0]).hide()
				}
			})
		}
		if (aregloLS.delivery == retiro) {
			fila.forEach(item => {
				if (aregloLS.id == item.children[7].textContent) {
					item.children[5].innerHTML = `${retiro}`
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
				}
			})
		}
	})

	aregloViajeLS.forEach(aregloViajeLS => {
		if (aregloViajeLS.delivery == delivery1) {
			fila.forEach(item => {
				if (aregloViajeLS.id == item.children[7].textContent) {
					for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
						item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
					}
					if (item.children[5].children[1]) {
						item.children[5].removeChild(item.children[5].children[1])
						item.children[5].innerHTML = `${delivery1}(pagado)`
					}
					else {
						item.children[5].innerHTML = `${delivery1}`
					}
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #816907, #010101)";
					repartoCliente1.innerHTML += `${aregloViajeLS.cliente}<br>`;
					ejecucion1 = true
					printPrint(ejecucion1, 0, 4, hidden_delivery1, aregloLS, r);
					borraDelivery(ejecucion1, 0, 7, delivery1);
					hidden_delivery1[hd1] = item;
					hd1++;
				}
			})
		}
		if (aregloViajeLS.delivery == delivery2) {
			fila.forEach(item => {
				if (aregloViajeLS.id == item.children[7].textContent) {
					for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
						item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
					}
					if (item.children[5].children[1]) {
						item.children[5].removeChild(item.children[5].children[1])
						item.children[5].innerHTML = `${delivery2}(pagado)`
					}
					else {
						item.children[5].innerHTML = `${delivery2}`
					}
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #816907, #010101)";
					repartoCliente2.innerHTML += `${aregloViajeLS.cliente}<br>`;
					ejecucion2 = true
					printPrint(ejecucion2, 1, 5, hidden_delivery2, aregloLS, r);
					borraDelivery(ejecucion2, 1, 8, delivery2);
					hidden_delivery2[hd2] = item;
					hd2++;
				}
			})
		}
		if (aregloViajeLS.delivery == delivery3) {
			fila.forEach(item => {
				if (aregloViajeLS.id == item.children[7].textContent) {
					for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
						item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
					}
					if (item.children[5].children[1]) {
						item.children[5].removeChild(item.children[5].children[1])
						item.children[5].innerHTML = `${delivery3}(pagado)`
					}
					else {
						item.children[5].innerHTML = `${delivery3}`
					}
					item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
					item.children[5].style.background = " linear-gradient(to right, #816907, #010101)";
					repartoCliente3.innerHTML += `${aregloViajeLS.cliente}<br>`;
					ejecucion3 = true
					printPrint(ejecucion3, 2, 31, hidden_delivery3, aregloLS, r);
					borraDelivery(ejecucion3, 2, 17, delivery3);
					hidden_delivery3[hd3] = item;
					hd3++;
				}
			})
		}
	})


	fila.forEach(item => {
		if (item.children[5].innerHTML != delivery1 && item.children[5].innerHTML != `${delivery1}(pagado)`) {
			if (item.children[5].innerHTML != delivery2 && item.children[5].innerHTML != `${delivery2}(pagado)`) {
				if (item.children[5].innerHTML != delivery3 && item.children[5].innerHTML != `${delivery3}(pagado)`) {
					if (item.children[5].innerHTML != retiro) {
						if (item.children[5].innerHTML != pagado) {
							item.children[5].children[0].children[1].addEventListener("click", () => {
								if (ejecucion1 == false) {
									hidden_delivery1[hd1] = item;
									hd1++;
									item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
									for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
										item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
									}
									creaOutput(output, 0, delivery1)
									item.children[5].appendChild(output[0])
								}
							})
							item.children[5].children[0].children[2].addEventListener("click", () => {
								if (ejecucion2 == false || item.children[5].classList == "en_viaje") {
									hidden_delivery2[hd2] = item;
									hd2++;
									item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
									for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
										item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
									}
									creaOutput(output, 1, delivery2)
									item.children[5].appendChild(output[1])
								}
							})
							item.children[5].children[0].children[3].addEventListener("click", () => {
								if (ejecucion3 == false || item.children[5].classList == "en_viaje") {
									hidden_delivery3[hd3] = item;
									hd3++;
									item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
									for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
										item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
									}
									creaOutput(output, 2, delivery3)
									item.children[5].appendChild(output[2])
								}
							})
							//boton para poner pagado
							item.children[5].children[0].children[5].addEventListener("click", () => {
								fetch(`https://apibar-production.up.railway.app/pagado/${item.children[0].textContent}`, {
									method: "PUT",
									body: '{"pagado":1}',
									headers: { "content-type": "application/json" }
								})

								item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
								item.children[5].style.background = " linear-gradient(to right, #bea719, #010101)";
								for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
									$(item.children[5].children[0].children[i]).hide()
								}
								for (var i = 1; i <= 4; i++) {
									$(item.children[5].children[0].children[i]).show()
									$(item.children[5].children[0].children[i]).css("background", "#000")
									$(item.children[5].children[0].children[i]).css("color", "#bea719")
								}
								creaOutput(output, 1, pagado)
								item.children[5].appendChild(output[1])
								$(".output").css("float", "left")
								$(item.children[5].children[0]).css("float", "right")
							})
							item.children[5].children[0].children[4].addEventListener("click", () => {


								let aregloLS2 = []
								aregloLS2.forEach(arr => {
									if (item.children[7].textContent == arr.id) {
										arr.delivery = retiro

									}
								})
								let arrEnviajeJSON = JSON.stringify(aregloLS2);

								item.children[5].style = "box-shadow: inset 8px -1px 10px -6px #fff;"
								item.children[5].style.background = " linear-gradient(to right, #226425, #010101)";
								for (var i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
									item.children[5].children[0].removeChild(item.children[5].children[0].children[i])
								}
								item.children[5].removeChild(output[1])
								creaOutput(output, 1, retiro)
								item.children[5].appendChild(output[1])
							})


							// desplegar mas
							item.children[5].children[0].children[0].addEventListener("click", () => {
								if (item.children[5].children[0].children[2].style.display == "none") {
									item.children[5].children[0].children[0].innerHTML = `<i class="fa-solid fa-chevron-left"></i>`
									for (i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
										$(item.children[5].children[0].children[i]).css("display", "inline")
									}
									$(item.children[5].children[0].children[4]).hide()
								}
								else {
									item.children[5].children[0].children[0].innerHTML = `<i class="fa-solid fa-chevron-right"></i>`
									for (i = item.children[5].children[0].children.length - 1; i >= 0; i--) {
										$(item.children[5].children[0].children[i]).hide()
									}
									$(item.children[5].children[0].children[0]).show()

								}


							})

							// boton de imprimir
							item.children[5].children[0].children[6].addEventListener("click", () => {
								for (var i = 0; i <= r.length - 1; i++) {
									if (item.children[0].textContent == r[i].id) {
										if (window.screen.width > 880)
											ticketCosina(item.children[0].textContent, item.children[2].textContent, r[i].detalleTicket);
									}
								}
							});

							// boton de borrar
							const borrarUnPedido = async () => {
								let pedidoDELETE = await fetch(`https://apibar-production.up.railway.app/pedidos/${item.children[7].textContent}`, {
									method: "DELETE"
								})
								window.location.reload();
							}
							item.children[5].children[0].children[7].addEventListener("click", () => {
								borrarUnPedido();
							});
							// editor de pedidos
							item.children[5].children[0].children[8].addEventListener("click", () => {
								for (var i = 0; i <= r.length - 1; i++) {
									if (item.children[0].textContent == r[i].id) {
										localStorage.setItem("edit", JSON.stringify(r[i]))
									}
								}
								editPedido();
							});
							// imprime recibo
							item.children[5].children[0].children[9].addEventListener("click", () => {

								for (var i = 0; i <= fila.length - 1; i++) {
									if (fila[i].children[0].textContent == item.children[0].textContent) {
										if (window.screen.width > 880) ticketCliente(dadaa[i], item.children[3].textContent);
									}
								}
							});
							//bonton de pagar justo
							item.children[5].children[0].children[10].addEventListener("click", () => {
								if (item.children[3].style.color == "") {
									item.children[3].innerHTML += ` <b>(PJ)</b>`
									$(item.children[3]).css("color", "#16ea31")
									fetch(`https://apibar-production.up.railway.app/pj/${item.children[0].textContent}`, {
										method: "PUT",
										body: '{"pj":1}',
										headers: { "content-type": "application/json" }
									})
								}
								else {
									item.children[3].children[0].remove()
									$(item.children[3]).css("color", "")
									fetch(`https://apibar-production.up.railway.app/pj/${item.children[0].textContent}`, {
										method: "PUT",
										body: '{"pj":0}',
										headers: { "content-type": "application/json" }
									})
								}
							});

						}
					}
				}
			}
		}
	});

	agregar.addEventListener("click", () => {

		agregarViaje(fila, hidden_delivery1, ejecucion1, repartoCliente1, delivery1, 0, 4, 7, r)
		if (ejecucion1 == false && hidden_delivery1.length > 0) ejecucion1 = true;

		agregarViaje(fila, hidden_delivery2, ejecucion2, repartoCliente2, delivery2, 1, 5, 7, r)
		if (ejecucion2 == false && hidden_delivery2.length > 0) ejecucion2 = true;

		agregarViaje(fila, hidden_delivery3, ejecucion3, repartoCliente3, delivery3, 2, 31, 17, r)
		if (ejecucion3 == false && hidden_delivery3.length > 0) ejecucion3 = true;
	})

	let ok1 = document.querySelector(".ok1").addEventListener("click", () => {
		$(".ok1").hide();
		let lnsRing = document.createElement("div")
		table3.children[0].children[0].children[2].appendChild(lnsRing)
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
		viajes1 = parseInt(darOk(ejecucion1, delivery1, hidden_delivery1, viajes1, repartoCliente1, hd1, importe1, 0, 4, r))
		ejecucion1 = false; hd1 = 0;
	});

	let ok2 = document.querySelector(".ok2").addEventListener("click", () => {
		$(".ok2").hide();
		let lnsRing = document.createElement("div")
		table3.children[0].children[1].children[2].appendChild(lnsRing)
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
		viajes2 = parseInt(darOk(ejecucion2, delivery2, hidden_delivery2, viajes2, repartoCliente2, hd2, importe2, 1, 5, r))
		ejecucion2 = false; hd2 = 0;
	});

	let ok3 = document.querySelector(".ok3").addEventListener("click", () => {
		$(".ok3").hide();
		let lnsRing = document.createElement("div")
		table3.children[0].children[2].children[2].appendChild(lnsRing)
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
		viajes3 = parseInt(darOk(ejecucion3, delivery3, hidden_delivery3, viajes3, repartoCliente3, hd3, importe3, 2, 31, r))
		ejecucion3 = false; hd3 = 0;
	});
	$(".imprCuaderno").click(function () {
		impCuaderno(r, suma, table2.children[0].children, date, viajes1, viajes2, viajes3, comision);
	})

	table1.scrollTop = table1.scrollHeight
	console.log(viajes2)
	document.querySelector(".cerrarSesion").addEventListener("click", () => {
		// let datafechaD = await fechaDELETE.json();
		cerrarSesion()
	})
}


recibirData()

document.addEventListener("keydown", () => {
	if (event.keyCode == 17) {
		window.location.href = "index.html"
	}
});