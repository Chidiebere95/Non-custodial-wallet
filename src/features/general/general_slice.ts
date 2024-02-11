import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import GeneralService from './general_service';
import * as states from '../../utils/strings';

const initialState = {
  getAllTokens: {
    status: states.BASE,
    data: {},
  },
};
export const triggerGetAllTokens = createAsyncThunk(
  'get-all-tokens',
  async (_, thunkAPI) => {
    try {
      return await GeneralService.getAllTokens();
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    resetCreateForumPost: (state) => {
      state.getAllTokens = initialState.getAllTokens;
    },
  },
  extraReducers: (builder) => {
    //get all tokens
    builder.addCase(triggerGetAllTokens.pending, (state) => {
      state.getAllTokens.status = states.LOADING;
      state.getAllTokens.data = {};
    });
    builder.addCase(triggerGetAllTokens.fulfilled, (state, action) => {
      state.getAllTokens.status = states.SUCCESSFUL;
      state.getAllTokens.data = action.payload;
    });
    builder.addCase(triggerGetAllTokens.rejected, (state) => {
      state.getAllTokens.status = states.ERROR;
      state.getAllTokens.data = {};
    });
  },
});

export default generalSlice.reducer;
export const {} = generalSlice.actions;
