import {Content} from "antd/lib/layout/layout";
import React from "react";


export const ContentC = (props: any) => {
    return <Content style={{
        background: '#E9EDF6', display: 'flex'}}>
        {props.children}
    </Content>
}