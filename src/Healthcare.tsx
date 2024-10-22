import React, { useEffect } from 'react';
import './Healthcare.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from 'src/views/Main';
import Community from './views/Community';
import SignUp from './views/SignUp';
import Container from './layouts/Container';

export default function Healthcare() {
  return (
    <Routes>
      <Route element={<Container/>} />
      <Route path='/main' element={<Main />} />
      <Route path='/community' element={<Community />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  );
}
