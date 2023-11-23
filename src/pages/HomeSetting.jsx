import { Header } from "../components/Header"
export function HomeSetting() {
    return (
        <div className="homeSett">
            <Header tittle="Configuracion" />
            <a href="/" className="btn btn_a">
            <i class="fa-solid fa-arrow-left-long"></i>
                Volver</a>
            <h5 className="">Cambiar precio:</h5>
            <div className="container row mx-auto d-flex horizontal-scrollable overflow-hidden">
                <a href="/milanesas" className="btn col btn_a">milanesas</a>
                <a href="/lomitos" className="btn col btn_a">lomitos</a>
                <a href="/hamburguesas" className="btn col btn_a">hamburguesas</a>
                <a href="/pizzas" className="btn col btn_a">pizzas</a>
                <a href="/papas" className="btn col btn_a">papas</a>
                <a href="/platos" className="btn col btn_a">platos</a>
                <a href="/bebidas" className="btn col btn_a">bebidas</a>
            </div>
        </div>
    )
}