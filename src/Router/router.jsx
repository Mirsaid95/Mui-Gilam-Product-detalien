import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { MainLayout } from "../Layout/Main-layout";
import { CardDetail } from "../pages/CardDetail";
import { Contact } from "../pages/Contact";
import { Support } from "../pages/Support";
import { Bathroom } from "../pages/Bathroom";
import { Doroshki } from "../pages/Doroshki";
import { Carpets } from "../pages/Carpets";
import { SpecialCarpets } from "../pages/Special-carpets";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="home/detail/:id" element={<CardDetail />} />
          <Route path="Коврики" element={<Carpets />} />
          <Route path="Для ванной" element={<Bathroom />} />
          <Route path="Дорожки" element={<Doroshki />} />
          <Route path="Особенные ковры" element={<SpecialCarpets />} />
          <Route path="Центр поддержки" element={<Support />} />
          <Route path="Контакты" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};
