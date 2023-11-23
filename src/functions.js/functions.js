export const sendPutPrice = async (id, precio, product) => {
    const res = await fetch(`http://localhost:3001/${product}/${id}`, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: `{"precio": ${precio}}`
    })
    console.log(precio + "precio cambiado")
  }