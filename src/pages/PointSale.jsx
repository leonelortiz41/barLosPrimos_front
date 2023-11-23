import { useState, useEffect } from "react";
import { Aggregates } from "../components/Aggregates";
import { Header } from "../components/Header"
import { Ingredient } from "../components/Ingredients";
import { ShoppingCart } from "../components/ShoppingCart";
const getProducts = (product, setMenu) => {
    return new Promise((resolve, reject) => {
        useEffect(() => {
            fetch(`http://localhost:3000/${product}`)
                .then((response) => response.json())
                .then((res) => {
                    setMenu(res)
                    resolve({ name: product, array: res })
                });
        }, []);
    })
}
export function PointSale() {
    window.location.href="src/puntoVenta.html"
    // let [ingredientes, setIngredients] = useState()
    // let [noIngredients, setNoIngredients] = useState(true)
    // const [menu, setMenu] = useState([]);
    // const [productsArr, setProductsArr] = useState([]);
    // const [arrayCart, setArrayCart] = useState([]);
    // let [productSelected, setProductSelected] = useState(null);
    // let [active, setActive] = useState(null);
    // let listItemsMenu = [];
    // let itemMenu = [];
    // let i = 0
    // let productsArray = [];
    // getProducts("milanesas", setMenu).then((e) => productsArray.push(e))
    // getProducts("lomitos", setMenu).then((e) => productsArray.push(e))
    // getProducts("hamburguesas", setMenu).then((e) => productsArray.push(e))
    // getProducts("papas", setMenu).then((e) => productsArray.push(e))
    // getProducts("platos", setMenu).then((e) => productsArray.push(e))
    // getProducts("bebidas", setMenu).then((e) => productsArray.push(e))
    // getProducts("pizzas", setMenu).then((e) => {
    //     productsArray.push(e)
    //     setProductsArr(productsArray)
    // })
    // const ListMenu = productsArr.map((arr) => (
    //     <button className="col-sm-1 btn " key={i++} onFocus={(e) =>{
    //         if(arr.name=="milanesas"||arr.name=="hamburguesas"||arr.name=="lomitos")setNoIngredients(false);
    //         else setNoIngredients(true)
    //         setActive(arr.name)
    //     }}>{arr.name}</button>
    // ))
    // productsArr.forEach((product) => {
    //     listItemsMenu.push({ name: product.name, array: product.array })
    // })
    // listItemsMenu.forEach(item => {
    //     itemMenu.push(item.array.map((it) => (
    //         <button key={it.id} className={`${item.name} btn btn-dark`} style={{ display: (active == item.name) ? "block" : "none" }}
    //             onClick={(e) => {
    //                 setProductSelected(it)
    //             }}>{it.nombre}</button>
    //     )))
    // })
    // return (
    //     <>
    //         <Header tittle="Los Primos" />
    //         <a href="/setting" className="btn_a btn">Setting</a>
    //         <a href="" className="btn_a btn">cuaderno</a>
    //         <div className="text-center justify-content-center align-content-center">
    //             {ListMenu}
    //         </div>
    //         <div className="col-sm-12 mx-auto  row" >
    //             <div className="col-sm-3 d-flex flex-column" >
    //                 {itemMenu}
    //             </div>
    //             <div className="col-sm-2 d-flex flex-column" >
    //                 <Ingredient a={setIngredients} noIngredients={noIngredients} productSelected={productSelected} />
    //             </div>
    //             <div className="col-sm-2" >
    //                 <Aggregates className="" />
    //             </div>
    //             <button className="col-sm-1" disabled={(productSelected == null) ? true : false} onClick={() => {
    //                 productSelected.detalle = productSelected.nombre + ingredientes
    //                 productSelected.cantidad = 1
    //                 setProductSelected(productSelected)
    //                 arrayCart.push(productSelected)
    //                 console.log(productSelected.nombre)
    //                 setArrayCart(arrayCart)
    //                 setProductSelected(null)
    //             }}>+</button>
    //             <div className="col-sm-4 border">
    //                 <ShoppingCart content={arrayCart} />
    //             </div>
    //         </div>
    //     </>
    // )
}