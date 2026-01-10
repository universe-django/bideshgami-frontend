import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

//countries
export const fetchCountries = createAsyncThunk(
  "list/fetchCountries",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/lists/countries`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

//categories
export const fetchCategories = createAsyncThunk(
  "list/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/lists/categories`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

//type of work

export const fetchTypesOfWork = createAsyncThunk(
  "list/fetchTypesOfWork",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/lists/workTypes`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const fetchCurrencies = createAsyncThunk(
  "list/fetchCurrencies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/currency`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchRequiredDocs = createAsyncThunk(
  "list/fetchRequiredDocs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/lists/documents`);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    countryList: [],
    categoryList: [],
    typeOfWorkList: [],
    currencyList: [],
    requiredDocs: [],
    loadingRequiredDocs: false,
    loadingCurrencies: false,
    loadingCountries: false,
    loadingCategories: false,
    loadingTypesOfWork: false,
    errorRequiredDocs: null,
    errorCountries: null,
    errorCategories: null,
    errorTypesOfWork: null,
    errorCurrencies: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loadingCategories = true;
        state.errorCountries = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countryList = action.payload.countries;
        state.loadingCountries = false;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.errorCountries = action.payload;
        state.loadingCountries = false;
      });

    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loadingCategories = true;
        state.errorCategories = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload.categories;
        state.loadingCategories = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.errorCategories = action.payload;
        state.loadingCategories = false;
      });

    builder
      .addCase(fetchTypesOfWork.pending, (state) => {
        state.loadingTypesOfWork = true;
        state.errorTypesOfWork = null;
      })
      .addCase(fetchTypesOfWork.fulfilled, (state, action) => {
        state.typeOfWorkList = action.payload.workTypes;
        state.loadingTypesOfWork = false;
      })
      .addCase(fetchTypesOfWork.rejected, (state, action) => {
        state.errorTypesOfWork = action.payload;
        state.loadingTypesOfWork = false;
      });

    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.loadingCurrencies = true;
        state.errorCurrencies = null;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.loadingCurrencies = false;
        state.currencyList = action.payload;
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.errorCurrencies = action.payload;
        state.loadingCurrencies = false;
      });

    builder
      .addCase(fetchRequiredDocs.pending, (state) => {
        state.loadingRequiredDocs = true;
        state.errorRequiredDocs = null;
      })
      .addCase(fetchRequiredDocs.fulfilled, (state, action) => {
        state.loadingRequiredDocs = false;
        state.requiredDocs = action.payload.docs;
      })
      .addCase(fetchRequiredDocs.rejected, (state, action) => {
        state.errorRequiredDocs = action.payload;
        state.loadingRequiredDocs = false;
      });
  },
});

export default listsSlice.reducer;
