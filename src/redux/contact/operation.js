import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "https://connections-api.herokuapp.com/";



export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}contacts`);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async (dataContacts, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}contacts`, dataContacts);
      toast.error("added")
      return response.data;
    } catch (error) {
      
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}contacts/${id}`);
      toast.error("deleted.")
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
