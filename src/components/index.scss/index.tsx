import { Header } from "antd/lib/layout/layout";
import React from "react";

export const HeaderC=(props:any)=>{
    return (
        <Header  className="site-layout-background header" style={{
            // margin: '24px 16px 0',
            padding:'0 0 0 90px',
            justifyContent:'space-between',
            display: 'flex',
            overflow: 'initial',
            background:'#fff',
            position: 'fixed',
            zIndex: 1, width: '100%' }}>
            {props.children}
        </Header>
    )
}