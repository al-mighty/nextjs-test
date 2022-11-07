import type {AppProps} from 'next/app'
import 'antd/dist/antd.css'
import '../styles/vars.scss'
import '../styles/global.scss'
import {Layout} from "antd";
import {HeaderC} from "../src/components/Header";
import {ContentC} from "../src/components/Content";
import React from "react";
import Sider from 'antd/lib/layout/Sider'
import {LeftMenu} from '../src/components/SideBar'

function MyApp({Component, pageProps}: AppProps) {
    return (<Layout
        className={'mainLayout'}
        hasSider
    >
        <HeaderC/>
        <Layout className="site-layout"
                style={{
                    minHeight: "100vh",
                    position: 'relative'
                }}
        >

            <ContentC>
                <Sider theme={'light'}
                       width={110}
                       className={'slider'}
                       style={{
                           paddingTop: 60,
                           overflow: 'auto',
                           height: '100%',
                           position: 'fixed',
                           top: 0,
                           bottom: 0,
                       }}
                >
                    <LeftMenu/>
                </Sider>
                <div style={{marginLeft: 110, marginTop: 64}}
                >
                    <Component {...pageProps} />
                </div>
            </ContentC>
        </Layout>
    </Layout>)
}

export default MyApp
