import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Teste from './pages/Teste';

export default function RoutesConfigs() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home /> } />
      <Route path="/teste" element={ <Teste /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}
