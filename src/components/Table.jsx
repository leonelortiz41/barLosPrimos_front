import { useState, useEffect } from "react";
import { sendPutPrice } from "../functions.js/functions";
import { Header } from "./Header";

export function Table({ product }) {
  const [productNew, setProductNew] = useState([]);
  let productOld = [];
  useEffect(() => {
    fetch(`http://localhost:3001/${product}`)
      .then((response) => response.json())
      .then((res) => {
        setProductNew(res)
      });
  }, []);
  productNew.forEach((prod) => productOld.push({ id: prod.id, precio: prod.precio }));
  const ListMilanesas = productNew.map((prod) => (
    <tr key={prod.id}>
      <td>{prod.id}</td>
      <td>{prod.nombre}</td>
      <td>$<input type="number" defaultValue={prod.precio} onChange={(e) => {
        prod.precio = parseInt(e.target.value)
      }}></input></td>
    </tr>
  ))
  return (
    <div className="tableSett">
      <Header tittle="Configuracion" />
      <div className="col-sm-3 btn-group  d-flex">
          <a href="/setting" className="my-auto btn col- btn_a ">
          <i class="fa-solid fa-arrow-left-long"></i>
            volver
          </a>
          <h2 className="text-center m-3">{product}</h2>
        </div>
      <form className="col-sm-8 m-auto row" onSubmit={(e) => {
        e.preventDefault();
        const sendData = () => {
          return new Promise((resolve, reject) => {
            productNew.forEach((productNew) => {
              productOld.forEach((productOld) => {
                if (productNew.id == productOld.id && productNew.precio != productOld.precio) {
                  console.log(productNew.precio + "!=" + productOld.precio)
                  sendPutPrice(productNew.id, productNew.precio, product);
                }
              })
            })
            resolve("se envio todo")
          })
        }
        sendData()
          .then(() => {
            localStorage.removeItem(product+"LS")
            window.location.reload()
          })
      }}>
        
        <table className="table table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {ListMilanesas}
          </tbody>
        </table>
        <button type="submit" className="btn btn-success col-sm-3 m-auto d-block">Guardar cambios</button>
      </form>
    </div>
  )
}