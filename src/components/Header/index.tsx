import {Header} from "antd/lib/layout/layout";
import React from "react";

import s from './header.module.scss';
import {Avatar} from "antd";

export const HeaderC = () => {
    return (
        <Header className={s.header}>
            <div className={s.contentHeader}>
                <div className={s.block}>
                    <ul>
                        <li>Клиника</li>
                        <li>Медицинский центр "Доктор"</li>
                        <li>214000, г. Смоленск, ул. Николаева, д.11</li>
                        <li><a href="tel:7-812-411-2255">+7 (4812) 11-22-55</a></li>
                    </ul>
                </div>
                <div className={s.profile}>
                    <div className="username">
                        Иван Иванов
                    </div>
                    <Avatar className={s.antAvatar} src="/avatar.png"/>
                </div>
            </div>
        </Header>
    )
}