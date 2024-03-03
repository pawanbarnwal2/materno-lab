import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://run.mocky.io/v3/144a6f99-09d9-4771-b34d-69a9f39cb4d6  // api for provider unit

export const getProviderGroup = createAsyncThunk(
  "getProviderGroup",
  async () => {
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/d28b186e-3a23-42bb-87a8-7e525529ce02"
      );

      const retVal = await response.json();

      return retVal.provider_groups;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getProviderUnit = createAsyncThunk("getProviderUnit", async () => {
  try {
    const response = await fetch(
      "https://run.mocky.io/v3/144a6f99-09d9-4771-b34d-69a9f39cb4d6 "
    );

    const retVal = await response.json();
    console.log(retVal);
    return retVal.provider_units;

    // return retVal.provider_groups;
  } catch (err) {
    console.log(err);
  }
});

export const labSlice = createSlice({
  name: "lab",
  initialState: {
    navTitle: "",
    providerGroup: [],
    providerUnit: [],
    list: {
      isLoading: false,
      status: "",
      values: [],
    },
    save: {
      isSaving: false,
      isDeleting: false,
    },
  },
  reducers: {
    addTitleForNavBar: (state, action) => {
      console.log(action.payload);
      state.navTitle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProviderGroup.fulfilled, (state, action) => {
      console.log(action.payload);
      state.providerGroup = [...action.payload];
    });
    builder.addCase(getProviderUnit.fulfilled, (state, action) => {
      console.log(action.payload);
      state.providerUnit = [...action.payload];
    });
  },
});

export const { addTitleForNavBar } = labSlice.actions;
export default labSlice.reducer;
