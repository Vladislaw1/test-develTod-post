import rootReducer from "./reducers";

import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";

import thunk from "redux-thunk";

let store : any;

const initialState : any = {}

function initStore(preloadedState = initialState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState: any[]) => {
    let _store = store ?? initStore(preloadedState)

    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store

    return _store
}

export function useStore(initialState : any) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch