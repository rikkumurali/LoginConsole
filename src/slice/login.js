import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginInst } from '../axios/loginInst';

export const loginAct = createAsyncThunk(
    "login",
    async (login_data, thunkAPI) => {
        try {
            const res = await loginInst.post("login", login_data);
            const data = res.data;
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    isLoading: false,
    comingSoon: false,
    isLoggedIn: false,
    backNavigator: false,
    accessToken: '',
    role: '',
    errorMsg: ''
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [loginAct.pending]: (state) => {
            state.isLoading = true
        },
        [loginAct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.isLoggedIn = true
            state.backNavigator = true;
            state.accessToken = action.payload.token
            state.role = action.payload.role_display_name
            state.errorMsg = ""
            localStorage.setItem("accessToken", state.accessToken);
            localStorage.setItem("userRole", state.role);
        },
        [loginAct.rejected]: (state, action) => {
            state.errorMsg = action.payload.message
            state.isLoading = false
            state.isLoggedIn = false
            state.role = ""
            localStorage.clear()
        },
    },
    reducers: {
        allowBackNav: (state) => {
            state.backNavigator = false
        },
        resetAllStates: (state) => {
            state.isLoading = false
            state.comingSoon = false
            state.isLoggedIn = false
            state.backNavigator = false
            state.accessToken = ''
            state.role = ''
            state.errorMsg = ''
        },
        openComingSoon: (state) => {
            state.comingSoon = true
        },
        closeComingSoon: (state) => {
            state.comingSoon = false
        },
        logout: (state) => {
            state.isLoading = false
            state.comingSoon = false
            state.isLoggedIn = false
            state.backNavigator = false
            state.accessToken = ''
            state.role = ''
            state.errorMsg = ''
            localStorage.clear()
        }
    }
});

export const { allowBackNav, resetAllStates, openComingSoon, closeComingSoon, logout } = loginSlice.actions;
export default loginSlice.reducer;