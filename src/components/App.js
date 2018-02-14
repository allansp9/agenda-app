import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import ListaContatos from './ListaContatos';
import Footer from './Footer';

const App = () => (
  <div>
    <Header />
    <ListaContatos />
    <Dashboard />
    <Footer />
  </div>
);

export default App;
