import type {AppProps} from 'next/app'
import 'antd/dist/antd.css'
import '../styles/vars.scss'
import '../styles/global.scss'
import {Layout} from "antd";
import {HeaderC} from "../src/components/Header";
import {ContentC} from "../src/components/Content";
import React from "react";
import Sider from 'antd/lib/layout/Sider'
import {LeftMenu} from '../src/components/LeftMenu'

function MyApp({Component, pageProps}: AppProps) {
    return (<Layout
        className='mainLayout'
    >
        <HeaderC/>
        <Layout className="site-layout"
                style={{
                    minHeight: "100vh",
                
                    position: 'relative'
                }}
        >

            <ContentC>
                <div>
                    <Sider theme={'light'}
                           width={110}
                           className={'slider'}
                           style={{
                               height: '100vh',
                               position: 'sticky',
                               top: 0,

                           }}
                    >
                        <LeftMenu/>
                    </Sider>
                </div>
                <div >
                    <Component {...pageProps} />
                </div>
            </ContentC>
        </Layout>
    </Layout>)
}

export default MyApp
