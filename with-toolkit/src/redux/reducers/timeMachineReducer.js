import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getSnapshot from '../../services/timeMachineAPI';

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

export const fetchSnapshot = createAsyncThunk(
  'timeMachine/fetchSnapshot',
  async ({url, timestamp}) => {
    console.log(url, timestamp);
    const result = await getSnapshot(url, timestamp);
    console.log(result);
    return result;
  }
);

const timeMachineReducer = createSlice({
  name: 'timeMachine',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSnapshot.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSnapshot.fulfilled, (state, action) => {
        state.archived_snapshots = action.payload.archived_snapshots;
        state.url = action.payload.url;
        state.timestamp = action.payload.timestamp;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchSnapshot.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action?.payload?.message ?? 'Erro ao buscar dados, tente novamente';
      })
  }
});

export const { setDay, setHour, setMonth, setUrl, setYear } = timeMachineReducer.actions;

export default timeMachineReducer.reducer;
