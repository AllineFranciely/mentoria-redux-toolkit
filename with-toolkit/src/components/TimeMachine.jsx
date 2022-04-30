import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';

const SIX = 6;
const EIGHT = 8;
const FOUR = 4;
const TEN = 10;
const TWELVE = 12;
const FOURTEEN = 14;

class TimeMachine extends Component {
  renderTimeFound = () => {
    const { closest } = this.props;
    return (
      <div className="row">
        <section className="text-center">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Tempo encontrado</h1>
              <p className="lead text-muted">
                {closest.timestamp.substring(SIX, EIGHT)}
                /
                {closest.timestamp.substring(FOUR, SIX)}
                /
                {closest.timestamp.substring(0, FOUR)}
              </p>
              <p className="lead text-muted">
                {closest.timestamp.substring(EIGHT, TEN)}
                :
                {closest.timestamp.substring(TEN, TWELVE)}
                {' '}
                {closest.timestamp.substring(TWELVE, FOURTEEN)}
                s
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };

  render() {
    const { closest, loading } = this.props;
    return (
      <div className="container h-100">
        <div className="row">
          <div className="col-md-12">
            <h1>Máquina do tempo</h1>
          </div>
        </div>
        {loading ? <LoadingSpinner /> : this.renderTimeFound() }
        {closest.available && (
          <iframe
            src={ closest.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
            width="100%"
            title="description"
            height="100%"
          />
        )}
      </div>
    );
  }
}

TimeMachine.propTypes = {
  closest: PropTypes.shape({
    url: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    available: PropTypes.bool.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (reduxState) => ({
  closest: reduxState.timeMachineReducer.archived_snapshots.closest,
  loading: reduxState.timeMachineReducer.loading,
});

export default connect(mapStateToProps)(TimeMachine);
