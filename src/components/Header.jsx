import losPrimos from "../assets/losPrimos-logo3.webp" 
export function Header({tittle}){
    return(
        <div className="headerSett container mx-auto row justify-content-center align-content-center">
        <img src={losPrimos} className="col-sm-2 my-auto logo "  />
        <h1 className="col-sm-3 text-uppercase my-auto" >{tittle}</h1>
        </div>
    )
}