import React from 'react';
import { Header } from './components/Header';
import { Result } from './components/Result';
import { Search } from './components/Search';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>  
      <Header />

      <Search />

      <Result />

      
      <GlobalStyle/>
    </>
    
  );
}



