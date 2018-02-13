import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filter';

class Header extends React.Component {
  changeHandler = (e) => {
    const text = e.target.value;
    this.props.dispatch(setTextFilter(text));
  };

  render() {
    return (
      <div>
        <form />
        <input
          name="buscar"
          onChange={this.changeHandler}
          type="text"
          placeholder="Pesquisar"
          value={this.props.filter.text}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
});

// const WrappedHeader = reduxForm({
//   form: 'busca',
//   initialValues: {
//     buscar: '',
//   },
// })(Header);

export default connect(mapStateToProps)(Header);
