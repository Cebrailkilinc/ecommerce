import { createSlice } from "@reduxjs/toolkit";

interface IToken {
    token:string;
}
const initialState:IToken = {
    token:""
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})


export default authSlice.reducer;