import {Header} from "antd/lib/layout/layout";
import React from "react";

import s from './header.module.scss';
 // import {Profile} from "../Profile";
import Menu, {MenuProps} from "antd/lib/menu";
import styled from "styled-components";
import {Avatar} from "antd";

const ContentHeader = styled.div`
margin-left:110px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:0 16px;
  .block{
  :first-child{
  width:80%;
  ul{
   margin: 0;  
   li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 32px;
    a{
    color:unset;
    }
   }
  }
  }
  width:20%;
  &.profile{
  justify-content: flex-end;
    display: flex;
    gap: 8px;
  .ant-avatar{
    margin-top: 16px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  }
  
`;
const items: MenuProps['items'] = [
    {
        label: 'Клиника',
        key: 'clinic',
    },
    {
        label: 'Медицинский центр "Доктор"',
        key: 'name',
    },
    {
        label: '214000, г. Смоленск, ул. Николаева, д.11',
        key: 'address',
    },
    {
        label: (
            <a href="tel:7-812-411-2255">+7 (4812) 11-22-55</a>
        ),
        key: 'phone',
    },
];

const StyledProfile = styled.div`
display:flex;
// width:30%;
`
const Title = styled.div`
display:flex;
// width:70%;
`
const Ul = styled.ul`
    margin: 0; /* Обнуляем значение отступов */
    padding: 4px; /* Значение полей */
   li {
    display: inline; /* Отображать как строчный элемент */
    margin-right: 5px; /* Отступ слева */
    border: 1px solid #000; /* Рамка вокруг текста */
    padding: 3px; /* Поля вокруг текста */
   }`

export const HeaderC = (props: any) => {
    return (
        <Header className={s.header}>
            <ContentHeader>
                {/*<Title>*/}
                {/*<ul>*/}
                {/*    <li>Клиника</li>*/}
                {/*    <li>Медицинский центр "Доктор"</li>*/}
                {/*    <li>214000, г. Смоленск, ул. Николаева, д.11</li>*/}
                {/*    <li></li>*/}
                {/*</ul>*/}
                {/*<Menu*/}
                {/*    theme="light"*/}
                {/*    mode="horizontal"*/}
                {/*    // defaultSelectedKeys={["2"]}*/}
                {/*    items={items}*/}
                {/*/>*/}
                <div className="block">
                    <ul
                        //     className={s.leftMenu} style={{
                        //     textAlign:'center'
                        // }}
                    >
                        <li>Клиника</li>
                        <li>Медицинский центр "Доктор"</li>
                        <li>214000, г. Смоленск, ул. Николаева, д.11</li>
                        <li><a href="tel:7-812-411-2255">+7 (4812) 11-22-55</a></li>
                    </ul>
                </div>
                <div className="block profile">
                    <div className="username">
                        Иван Иванов
                    </div>
                    <Avatar src="/avatar.png"/>
                </div>
            </ContentHeader>
        </Header>
    )
}