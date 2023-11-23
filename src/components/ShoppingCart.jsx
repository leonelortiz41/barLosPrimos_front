import { useEffect } from "react"

export function ShoppingCart({content}) {
    
    let i=0;
    let shCart= content.map((content) => (
        <div key={i++} className="border row" style={{height:"auto"}}>
            <button className="col-sm-1 my-auto" >+</button>
            <button className="col-sm-1 my-auto" >-</button>
            <div className="col-sm-8 my-auto">{content.detalle}</div>
            <div className="col-sm-2 my-auto">${content.precio}</div>
        </div>
    ))
    return (
        <>
            <div className=" row mx-auto container">
                <div style={{height:"310px"}} className="">
                {shCart}
                </div>
            </div>
            <output>{5}</output>
        </>
    )
}