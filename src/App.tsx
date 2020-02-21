import React from 'react';
import DefaultPage from './components/pages/DefaultPage';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App: React.FC = (props: unknown) => {
  return <DefaultPage />;
};

export default App;
