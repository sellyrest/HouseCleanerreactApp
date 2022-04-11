import './App.css';
import React from 'react';
import Header from './components/header/header';
import Content from './components/content/content';

import { AppWrap } from './appStyles';


export default function App() {
  return (
    <AppWrap>
      <Header />
      <Content />
    </AppWrap>

  );
}
