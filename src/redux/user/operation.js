import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL,setAuthHeader, clearAuthHeader} from "../config";

export const register = createAsyncThunk(
  "auth/register",
  async (dataRegister, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}users/signup`,
        dataRegister
      );
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (dataUser, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}users/login`, dataUser);
      console.log(1)
      
      setAuthHeader(response.data.token);
      console.log(2)
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post(`${BASE_URL}users/logout`);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setAuthHeader(persistedToken);
    try {
      const response = await axios.get(
        `${BASE_URL}users/current`,
        persistedToken
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
