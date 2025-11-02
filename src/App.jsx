import { Box } from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './landing-page/Home';
import { Toaster } from "@/components/ui/toaster";

function App() {

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
