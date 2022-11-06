import {Menu, MenuItemProps, MenuProps} from "antd";
import React, {useState} from "react";

import Icon, {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {RefreshSvg, PatientSvg, MedicinesSvg, DoctorSvg} from "../Icons";
import Link from "next/link";
import {CustomIconComponentProps} from "@ant-design/icons/lib/components/Icon";
import styled from "styled-components";
// import MenuItem as MenuItemAnt from "antd/lib/menu/MenuItem";

type MenuItem = Required<MenuProps>['items'][number];
const LeftMenuUl = styled.ul`
text-align:center;
li{
margin-top:15px;
}
 
`

// function getItem(
//     href: string,
//     icon?: any,
//     key: React.Key,
// ): JSX.Element {
//     return <Menu.Item key={key}>
//         <Link href={href}>
//             <Icon component={icon}/>
//         </Link>
//     </Menu.Item>
// }
//
// const items = [
//     getItem( '/patient', <PatientSvg/>,1),
//     getItem( '/doctor', <DoctorSvg/>,2),
//     getItem( '/medicines', <MedicinesSvg/>,3),
//     getItem( '/refresh', <RefreshSvg/>,4),
// ];

// export const MenuItem: React.FunctionComponent<MenuItemProps> = styled(Menu.Item)`
// export const MenuItem: React.FunctionComponent<MenuItemProps> = styled.div`
//   margin-bottom: 16px!important;
//   // width:90px;
//   text-align: center;
//   a {
//       width: inherit;
//   }
// `;

function getItem(
    href: string,
    key: React.Key,
    icon?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | React.ForwardRefExoticComponent<CustomIconComponentProps>,
): any {
    return <Menu.Item key={key} style={{
        display: 'flex'
    }}>
        <Link href={href}>
            <Icon component={icon}/>
        </Link>
    </Menu.Item>
}

// const getItemsItems: MenuItem[] = [
//     <Menu.item
//     getItem('Patient', '1', PatientSvg),
//     getItem('Doctor', '2', DoctorSvg),
//     getItem('Medicines', '3', MedicinesSvg),
//     getItem('Refresh', '4', RefreshSvg),
// ];

export const LeftMenu = () => {
    const items = [
        {href: '/patient', iconComponent: <PatientSvg/>},
        {href: '/doctor', iconComponent: <DoctorSvg/>},
        {href: '/medicines', iconComponent: <MedicinesSvg/>},
        {href: '/refresh', iconComponent: <RefreshSvg/>}
    ]
    // return    <Menu theme="light" mode="inline">
    //
    //     {/*<Menu.Item key="2">*/}
    //     {/*    <Link href="/next-item">*/}
    //     {/*        <Icon type="fire" />*/}
    //     {/*        <span>Next item</span>*/}
    //     {/*    </Link>*/}
    //     {/*</Menu.Item>*/}
    // </Menu>
    //
    return (
        // <Menu
        //     style={{
        //         width: 91,
        //         top:64,
        //         overflow: "hidden"
        //     }}
        //     defaultSelectedKeys={['1']}
        //     defaultOpenKeys={['sub1']}
        //     mode="inline"
        //     items={}
        //     // theme="dark"
        // >
        <LeftMenuUl>
            {
                items.map((item, key) => <li key={key}>
                    <Link href={item.href}>
                        <Icon component={() => item.iconComponent}/>
                    </Link>
                </li>)
            }
        </LeftMenuUl>
    )
}
