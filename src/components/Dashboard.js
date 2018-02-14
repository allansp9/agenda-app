import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoContato from './InfoContato';
import AddContato from './AddContato';
import EditContato from './EditContato';
import { selectActiveUser } from '../selectors/contatos';

const Dashboard = ({ activePage, activeUser, contato }) => (
  <div>
    {activePage === 'info' && <InfoContato contato={contato} />}
    {activePage === 'add' && <AddContato />}
    {activePage === 'edit' && <EditContato contato={contato} />}
  </div>
);

const mapStateToProps = state => ({
  contato: selectActiveUser(state.active.activeUser, state.contatos)[0],
  activePage: state.active.activePage,
  activeUser: state.active.activeUser,
});

export default connect(mapStateToProps)(Dashboard);
