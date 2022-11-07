import React from "react";

import Icon from '@ant-design/icons';
import {RefreshSvg, PatientSvg, MedicinesSvg, DoctorSvg} from "../Icons";
import Link from "next/link";


export const LeftMenu = () => {
    const items = [
        {href: '/patient', iconComponent: <PatientSvg/>},
        {href: '/doctor', iconComponent: <DoctorSvg/>},
        {href: '/medicines', iconComponent: <MedicinesSvg/>},
        {href: '/refresh', iconComponent: <RefreshSvg/>}
    ]
    return (
        <ul className={'LeftMenuUl'}>
            {
                items.map((item, key) => <li key={key}>
                    <Link href={item.href}>
                        <Icon component={() => item.iconComponent}/>
                    </Link>
                </li>)
            }
        </ul>
    )
}
