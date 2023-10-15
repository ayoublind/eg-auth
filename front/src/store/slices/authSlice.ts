import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

const sessionId = localStorage.getItem("sessionId");

const storedUserInfo = localStorage.getItem("userInfo");

const initialState = {
  isLoggedIn: sessionId ? true : false,
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogging: (state) => {
      state.isLoggedIn = true;
    },
    userInfos: (state) => {
      const storedUserInfo = localStorage.getItem("userInfo");
      state.userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};
    },
    userLoggingOut: () => {
      localStorage.clear();
      return {
        isLoggedIn: false,
        userInfo: {},
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const userInfo = payload?.data?.user;

      if (userInfo) {
        const userSessionId = userInfo.sub;

        localStorage.setItem("sessionId", userSessionId);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        state.userInfo = userInfo;
        state.isLoggedIn = true;
      }
    });
  },
});

export const { userLoggingOut, userLogging, userInfos } = authSlice.actions;

export default authSlice.reducer;
