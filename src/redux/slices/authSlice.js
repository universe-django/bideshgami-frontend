import useAxios from "@/hooks/useAxios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "sonner";

const initialState = {
  user: Cookies.get("userObj") ? JSON.parse(Cookies.get("userObj")) : null,
  token: Cookies.get("token") || null,
  loading: false,
  error: null,
};

export const loginUsers = createAsyncThunk(
  "userAuth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await useAxios.post(
        "/users/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      return data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Login failed!";
      return rejectWithValue(errorMessage);
    }
  }
);

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("userObj");
      Cookies.remove("token");
      toast.success("Logout Successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userObj;
        state.token = action.payload.token;
        Cookies.set("userObj", JSON.stringify(action.payload.userObj), {
          expires: 1,
        });
        Cookies.set("token", action.payload.token, {
          expires: 1,
        });
        toast.success("Login successful!");
      })
      .addCase(loginUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
        toast.error(action.payload || "Login failed");
      });
  },
});

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;
