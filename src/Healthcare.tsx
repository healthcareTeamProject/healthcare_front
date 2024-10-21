import React, { useEffect } from 'react';
import './Healthcare.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from 'src/views/Main';

export default function Healthcare() {
  return (
    <Routes>
      <Route path='/main' element={<Main />} />
    </Routes>
  );
}
