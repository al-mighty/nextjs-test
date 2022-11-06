import {Content} from "antd/lib/layout/layout";
import React from "react";


export const ContentC = (props: any) => {
    return <Content style={{
        // overflow: 'initial',
        // marginTop: 88,
        // marginTop: 64,
        background: '#E9EDF6', display: 'flex'}}>
        {props.children}
    </Content>
}