import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filter';

class Busca extends React.Component {
  changeHandler = (e) => {
    const text = e.target.value;
    this.props.dispatch(setTextFilter(text));
  };

  render() {
    return (
      <div className="lista-contatos__pesquisa">
        <form />
        <input
          name="Pesquisar"
          onChange={this.changeHandler}
          type="text"
          placeholder="Pesquisar"
          value={this.props.filter.text}
          className="header__input"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
});

export default connect(mapStateToProps)(Busca);
