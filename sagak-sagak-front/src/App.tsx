import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContainer from 'routes/auth/AuthContainer'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AuthContainer />}/>
    </Routes>
  );
}

export default App;
