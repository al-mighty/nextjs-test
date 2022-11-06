import React from "react";
import c from './container.module.scss';


const Container = (props: any) => {
    <div className={c.container}>{props.children}</div>
}

export default Container;