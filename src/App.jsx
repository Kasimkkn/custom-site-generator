import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Settings from './pages/settings/Settings';
import SettingsLayout from './pages/settings/SettingsLayout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SettingsLayout />}>
          <Route index element={<Settings />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
