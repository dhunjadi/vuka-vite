import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Task} from '../../types/tasksTypes';
import {fetchAllTasks} from '../thunks/tasksThunks';

export type TasksSliceState = {
    taskList: Task[];
    isLoading: boolean;
};

const initialState: TasksSliceState = {
    taskList: [],
    isLoading: false,
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllTasks.pending, (state: TasksSliceState) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllTasks.fulfilled, (state: TasksSliceState, action: PayloadAction<Task[]>) => {
            state.taskList = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchAllTasks.rejected, (state: TasksSliceState) => {
            state.isLoading = false;
        });
    },
});

export default tasksSlice.reducer;
