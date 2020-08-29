import React from 'react'
import { BrowserRouter } from "react-router-dom";
import './Explorer.css'
import Router from './Router'

export default function Explorer() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
