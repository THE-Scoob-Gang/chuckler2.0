import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import ChatContainer from '../components/chatComponents/ChatContainer.jsx';
import Chat from '../components/Chat.jsx';
import BioPage from '../pages/AllTabs/Bio.jsx';

//These routes will be found in the 'pages' file.
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<Main />} />
      <Route path="/chat/*" element={<Chat />} />
      <Route path="/bio/*" element={<BioPage />} />
    </Routes>
  );
};

export default Router;
