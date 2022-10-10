import { configureStore } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk';
// import promise from 'redux-promise';
// import promiseMiddleware from 'redux-promise-middleware';
// import logger from 'redux-logger';
import upcomingGamesReducer from "./reducers/upcomingGamesReducer";

export const store = configureStore({
    reducer: {
        upcomingGames: upcomingGamesReducer,
    },
    // middleware: [
    //     thunk,
    //     promiseMiddleware,
    //     promise,
    //     logger,
    // ]
})