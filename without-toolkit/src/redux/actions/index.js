import { SET_ARCHIVED_SNAPSHOTS, LOADING } from './actionTypes';
import getSnapshot from '../../services/timeMachineAPI';

export const setArchived = (newApiResult) => ({
  type: SET_ARCHIVED_SNAPSHOTS,
  payload: newApiResult,
});

export const setIsLoading = () => ({
  type: LOADING,
});

export const fetchTimeMachineApi = (url, timestamp) => async (dispatch) => {
  dispatch(setIsLoading());
  const apiResult = await getSnapshot(url, timestamp);
  dispatch(setArchived(apiResult));
};

// A função acima pode ser escrita também assim:
// export const fetchTimeMachineApi = (url, timestamp) => {
//   return async (dispatch) => {
//     dispatch(setIsLoading());
//     const apiResult = await getSnapshot(url, timestamp);
//     dispatch(setArchived(apiResult));
//   };
// };
