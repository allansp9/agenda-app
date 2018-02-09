import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoContato from './InfoContato';
import ListaContatos from './ListaContatos';
import AddContato from './AddContato';
import EditContato from './EditContato';
import Footer from './Footer';
import Header from './Header';

const Dashboard = ({ activePage }) => (
  <div>
    <Header />
    <ListaContatos />
    {activePage === 'info' && <InfoContato />}
    {activePage === 'add' && <AddContato />}
    {activePage === 'edit' && <EditContato />}
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  activePage: state.active.activePage,
});

export default connect(mapStateToProps)(Dashboard);
