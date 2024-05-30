import { combineReducers, configureStore } from '@reduxjs/toolkit'
import offersReducer from "../store/slices/offersSlice"

export const reducers = combineReducers({
    offers: offersReducer,
})

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
