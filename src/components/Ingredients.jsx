import { useEffect, useState } from "react"

export function Ingredient({ a,noIngredients,productSelected}) {
    let [listIngredients, setList] = useState()
    // let [ingredients, setIngredients] = useState("");
    const defaultIngredients={
        mayonesa: true,
        savora: true,
        lechuga: true,
        tomate: true,
        aji: false,
        jamon: true,
        queso: true,
        huevo: true
    }
    let [ingredients, setIngredients] = useState(defaultIngredients)
    const modifierText = () => {
        let textIngredients = ""
        let found=false;
        Object.entries(ingredients).forEach(([key, value]) => {
            if (value == false){
                textIngredients += `, sin ${key}`
                found=true;
            }
        })
        if(found==false)textIngredients=" completo"
        if(noIngredients==true)textIngredients=""
        a(textIngredients)
    }
    useEffect(()=>{
        modifierText()
    })
    let addIngred = (ingredients, param) => {
        ingredients[param] = false;
        setIngredients(ingredients)
        modifierText()
    }
    let removeIngred = (ingredients, param) => {
        ingredients[param] = true;
        setIngredients(ingredients)
        modifierText()
    }
    return (
        <>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input  type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "mayonesa");
                if (e.target.checked == true) removeIngred(ingredients, "mayonesa");
            }} value="Mayonesa" defaultChecked />Mayonesa</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "savora");
                if (e.target.checked == true) removeIngred(ingredients, "savora");
            }} value="Savora" defaultChecked />Savora</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "lechuga");
                if (e.target.checked == true) removeIngred(ingredients, "lechuga");
            }} value="Lechuga" defaultChecked />Lechuga</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "tomate");
                if (e.target.checked == true) removeIngred(ingredients, "tomate");
            }} value="Tomate" defaultChecked />Tomate</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "aji");
                if (e.target.checked == true) removeIngred(ingredients, "aji");
            }} value="Aji" />Aji</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "jamon");
                if (e.target.checked == true) removeIngred(ingredients, "jamon");
            }} value="Jamon" defaultChecked />jamon</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "queso");
                if (e.target.checked == true) removeIngred(ingredients, "queso");
            }} value="Queso" defaultChecked />queso</label>
            <label style={{visibility: noIngredients==false?"visible":"hidden"}} ><input type="checkbox" onChange={(e) => {
                if (e.target.checked == false) addIngred(ingredients, "huevo");
                if (e.target.checked == true) removeIngred(ingredients, "huevo");
            }} value="Huevo" defaultChecked />huevo</label>
        </>
    )
}