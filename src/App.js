import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Income } from "./components/Pages/Income/Income";
import { Groups } from "./components/Pages/Groups/Groups";
import { Products } from "./components/Pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="income" element={<Income />} />
        <Route path="groups" element={<Groups />} />
        <Route path="products" element={<Products/>}/>
        <Route path="*" element={<Income/>}/>
      </Route>
    </Routes>
  );
}

export default App;
