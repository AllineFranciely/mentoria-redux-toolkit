import { LOADING, SET_ARCHIVED_SNAPSHOTS } from '../actions/actionTypes';

const INITIAL_STATE = {
  url: 'youtube.com',
  archived_snapshots: {
    closest: {
      status: '200',
      available: true,
      url: 'http://web.archive.org/web/20010911201237/http://www2.cnn.com:80/',
      timestamp: '20010911201237',
    },
  },
  timestamp: '20010911201237',
  loading: false,
};

const timeMachineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_ARCHIVED_SNAPSHOTS: {
    return {
      ...state,
      archived_snapshots: action.payload.archived_snapshots,
      url: action.payload.url,
      timestamp: action.payload.timestamp,
      loading: false,
    };
  }
  case LOADING: {
    return {
      ...state,
      loading: true,
    };
  }
  default:
    return state;
  }
};

export default timeMachineReducer;
