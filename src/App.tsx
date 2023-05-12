import React from "react";
import { hot } from 'react-hot-loader/root';
import { Layout } from "./shared/Layout/Layout";
import './main.global.css';
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content";
import { Footer } from "./shared/Footer";
import { useIsMounted } from "./hooks/useIsMounted";

export function AppComponent() {
    const [isMounted] = useIsMounted();

    return (
        <Layout>
            {isMounted && <Header />}
            {isMounted && <Content />}
            <Footer />
        </Layout>
    )
}

export const App = hot(() => <AppComponent />);