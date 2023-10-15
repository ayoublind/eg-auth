import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "services/authService";

interface loginUserType {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: loginUserType, thunkAPI) => {
    try {
      const authService = new AuthService();
      const requestLogin = await authService.userLogin(email, password);

      return requestLogin;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async ({ email, password }: loginUserType, thunkAPI) => {
    try {
      const authService = new AuthService();
      const requestLogin = await authService.userLogin(email, password);

      const userSessionId = requestLogin?.data?.user?.sub;
      if (userSessionId) {
        localStorage.clear();
        localStorage.setItem("sessionId", userSessionId);
      }
      return requestLogin;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
