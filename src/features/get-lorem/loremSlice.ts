import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
interface IinitialState {
  loremText: {
    status: string;
    data: Array<string>;
  };
}
const initialState: IinitialState = {
  loremText: {
    status: 'base',
    data: [],
  },
};

export const getLoremText = createAsyncThunk(
  'lorem/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('https://baconipsum.com/api/?type=tst');
      return data;
    } catch (error: any) {
      // return rejectWithValue(error);
      return rejectWithValue(error.message);
    }
  }
);

const loremSlice = createSlice({
  name: 'getLorem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoremText.pending, (state, action) => {
      state.loremText.status = 'loading';
      state.loremText.data = [];
    });
    builder.addCase(getLoremText.fulfilled, (state, action) => {
      state.loremText.status = 'successful';
      state.loremText.data = action.payload;
    });
    builder.addCase(getLoremText.rejected, (state, action: any) => {
      state.loremText.status = 'error';
      state.loremText.data = action.payload;
    });
  },
});
// export const { increase } = loremSlice.actions;
export default loremSlice.reducer;
