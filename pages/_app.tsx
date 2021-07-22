import React from "react";
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";

import {useStore} from "../store";
import NavBar from "../components/NavBar/NavBar";

import '../styles/globals.css'

const MyApp: React.FC<AppProps> = ({Component, pageProps}: AppProps) => {

    const store: any = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <NavBar>
                <Component {...pageProps} />
            </NavBar>
        </Provider>
    )
}

export default MyApp
