import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../../types/userTypes';

export type UserSliceState = {
    loggedInUser: User;
};

const initialState: UserSliceState = {
    loggedInUser: {_id: '', fName: '', lName: '', email: '', imgSrc: '', role: 'admin'},
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setLoggedInUser: (state: UserSliceState, action: PayloadAction<User>) => {
            state.loggedInUser = action.payload;
        },
        userLogout: () => initialState,
    },
});

export default userSlice.reducer;
export const {setLoggedInUser, userLogout} = userSlice.actions;
