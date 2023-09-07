
import { configureStore } from '@reduxjs/toolkit';
import pomodoroItems from './PomodoroSlice';

export default configureStore({
    reducer: {
        pomodoroItems: pomodoroItems
    }
})