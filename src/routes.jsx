import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { Authorization } from "./pages/auth";
import { Advertisement } from "./pages/adv";
import { MyAdvertisement } from "./pages/my-adv";
import { Seller } from "./pages/seller";

export const AppRoutes = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<Authorization />} />
            <Route path="/profile" element={<Profile />} />
                <Route path="/advertisement/:id" element={<Advertisement />} />
                <Route path="/my_ad" element={<MyAdvertisement />} />
                <Route path="/seller/:id" element={<Seller />} />
            <Route path="*" element={<NotFound />} />
        </Routes>  
    );
  };