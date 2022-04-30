import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSnapshot } from '../redux/reducers/timeMachineReducer';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      year: '',
      month: '',
      day: '',
      hour: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  onSubmit = async () => {
    const { onSubmitFormDispatch } = this.props;
    const {
      url,
      year,
      month,
      day,
      hour,
    } = this.state;
    const timestamp = `${year + month + day + hour}0000`;
    onSubmitFormDispatch(url, timestamp);
  }

  render() {
    const { url, year, month, day, hour } = this.state;
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex w-100">
            <input
              className="form-control me-2"
              placeholder="URL"
              aria-label="Pesquisar"
              type="text"
              id="url"
              name="url"
              value={ url }
              onChange={ this.handleChange }
            />
            <div className="form-group me-2">
              <input
                className="form-control"
                placeholder="Dia"
                aria-label="Day"
                type="text"
                id="day"
                name="day"
                value={ day }
                onChange={ this.handleChange }
              />
            </div>
            <div className="form-group me-2">
              <input
                className="form-control"
                placeholder="Mês"
                aria-label="Month"
                type="text"
                id="month"
                name="month"
                value={ month }
                onChange={ this.handleChange }
              />
            </div>
            <div className="form-group me-2">
              <input
                className="form-control"
                placeholder="Ano"
                aria-label="Year"
                type="text"
                id="year"
                name="year"
                value={ year }
                onChange={ this.handleChange }
              />
            </div>
            <div className="form-group me-2">
              <input
                className="form-control"
                placeholder="Hora"
                aria-label="Hour"
                type="text"
                id="hour"
                name="hour"
                value={ hour }
                onChange={ this.handleChange }
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={ () => this.onSubmit() }
            >
              Procurar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

Form.propTypes = {
  onSubmitFormDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmitFormDispatch: (url, timestamp) => dispatch(fetchSnapshot({url, timestamp})),
});

export default connect(null, mapDispatchToProps)(Form);
