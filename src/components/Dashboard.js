import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoContato from './InfoContato';
import ListaContatos from './ListaContatos';
import AddContato from './AddContato';
import EditContato from './EditContato';
import Footer from './Footer';
import Header from './Header';

const Dashboard = ({ active }) => (
  <div>
    <Header />
    <ListaContatos />
    {active === 'info' && <InfoContato />}
    {active === 'add' && <AddContato />}
    {active === 'edit' && <EditContato />}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  active: state.active.activePage,
});

export default connect(mapStateToProps)(Dashboard);
