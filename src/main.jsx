import React from 'react'
import "./estil.css"
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { Header } from './components/Header'
import { HomeSetting } from './pages/HomeSetting'
import { Table } from './components/Table'
import { PointSale } from './pages/PointSale'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PointSale/>}></Route>
        <Route path="/setting" element={<HomeSetting />} />
        <Route path="/milanesas" element={<Table product="milanesas" />} />
        <Route path="/lomitos" element={<Table product="lomitos" />} />
        <Route path="/hamburguesas" element={<Table product="hamburguesas" />} />
        <Route path="/pizzas" element={<Table product="pizzas" />} />
        <Route path="/platos" element={<Table product="platos" />} />
        <Route path="/papas" element={<Table product="papas" />} />
        <Route path="/bebidas" element={<Table product="bebidas" />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
)
