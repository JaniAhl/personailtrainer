import './App.css';
import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customerlist from './components/Customerlist'
import { MuiDrawer } from './components/MuiDrawer';
import Traininglist from './components/Traininglist';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <AppBar position='static'>
          <Toolbar>
            <MuiDrawer />
            <Typography variant='h6'>
              PersonalTrainer
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Customerlist />} />
          <Route path="/Traininglist" element={<Traininglist />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
