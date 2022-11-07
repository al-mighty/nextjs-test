import SelectedParams from "./components/Filter";
import dynamic from 'next/dynamic'
import {Badge, Col, Row, Tooltip} from "antd";
import MedTable from "../../src/components/Tables";
import React, {useCallback, useState} from "react";
import t from 'src/components/Tables/table.module.scss';
import {QuestionCircleOutlined} from "@ant-design/icons";
import { ColumnsType } from "antd/lib/table";

const ChartWithNoSSR = dynamic(() => import('./components/Chart'), {
    ssr: false
})

interface DataType {
    key: string;
    title: string;
}

const defaultData = [
    {
        key:1,
        year: '1994',
        a: 300,
        b: 200,
        y: 190,
        levelSecond: 300,
        levelOne: 200,
        indication: 240,
    },
    {
        key:2,
        year: '1996',
        a: 300,
        b: 200,
        y: 240,
        levelSecond: 300,
        levelOne: 200,
        indication: 240,
    },
    {
        key:3,
        year: '1998',
        a: 300,
        b: 200,
        levelSecond: 300,
        levelOne: 200,
        y: 220,
        indication: 240,
    },
    {
        key:4,
        year: '2000',
        a: 300,
        b: 200,
        y: 190,
        levelSecond: 300,
        levelOne: 200,
        indication: 204,
    },
    {
        key:5,
        year: '2003',
        a: 300,
        b: 200,
        y: 195,
        levelSecond: 300,
        levelOne: 200,
        indication: 20,
    },
    {
        key:6,
        year: '2005',
        a: 300,
        b: 200,
        levelSecond: 300,
        levelOne: 200,
        y: 220,
        indication: 300
    }
];

const columnsMini: ColumnsType<DataType> = [
    {
        title: 'Год',
        dataIndex: 'year',
        key: 'year',
        render: (text: number | string) => <span>{text}</span>,
    },
    {
        title: 'Показание',
        dataIndex: 'y',
        key: 'y',
        render: (text: number | string) => <span>{text} мг / дл</span>,
    },
    {
        title: 'Результат',
        dataIndex: 'y',
        key: 'y',
        render: (text: number | string) => text > 200
            ? <span><Badge className={`${t.badgeError}`} status="error"/> выше нормы</span>
            : <span><Badge className={`${t.badgeSuccess}`} status="success"/>в норме</span>
    },
]

const fullTableData = [
    {
        key:1,
        pokazatel: "ЛПВП",
        count: 60,
        normCount: 40,
        result: 40,
    },
    {
        key:2,
        pokazatel: "Холестерин, не-HDL",
        count: 240,
        normCount: 210,
        result: 210,
    },
    {
        key:3,
        pokazatel: "Триглицерид",
        count: 112,
        normCount: 150,
        result: 150,
    },
    {
        key:4,
        pokazatel: "ЛПВП",
        count: 149,
    },
]
const columns: any[] = [
    {
        title: 'Показатель',
        dataIndex: 'pokazatel',
        key: 'pokazatel',
        render: (text: number | string) => <span>{text} <Tooltip title="prompt text">
    <span style={{marginLeft: 6}}><QuestionCircleOutlined/></span>
  </Tooltip></span>,
    },
    {
        title: 'Количество',
        dataIndex: 'count',
        key: 'count',
        render: (text: number | string) =>
            text ? <span>{text} мг / дл</span>
                : <></>
    },
    {
        title: 'Норма',
        dataIndex: 'normCount',
        key: 'y',
        render: (text: number | string) =>
            text ? <span>{text > 200 ? '>' : '<'}{text} мг / дл</span>
                : <></>
    },
    {
        title: 'Результат',
        dataIndex: 'result',
        key: 'result',
        render: (text: number | string) =>
            text ? text > 200
                    ? <span><Badge className={`${t.badgeError}`} status="error"/> выше нормы</span>
                    : <span><Badge className={`${t.badgeSuccess}`} status="success"/>в норме</span>
                : <></>
    },
]

const LaboratoryResultsPage = () => {
    const [filterParams, setParams]: any = useState({
        materials: ['blood'],
        analyzes: ['lipid_panel'],
        years: ['2000', '2003', '2005'],
    })
    const setData = (filter: any) => defaultData.filter((item: any) => filter.years.includes(item.year));

    // @ts-ignore
    const selectedYearData: any = useCallback(setData(filterParams), [filterParams]);


    const onChangeField = (field: any) => {
        setParams({
            ...filterParams,
            [field?.[0]?.name?.[0]]: field?.[0]?.value
        })
    }

    return (
        <div>
            <h1>Результаты лабораторных исследований</h1>
            <div className={'container'}>
                <SelectedParams onChangeField={onChangeField} selectedParams={filterParams}/>
            </div>
            <div className={'container'}>
                <h2>Изменение уровня холестерина по годам</h2>
                <Row>
                    <Col xl={12} xs={24}>
                        <ChartWithNoSSR data={selectedYearData}/>
                    </Col>
                    <Col xl={12} xs={24}>
                        <MedTable columns={columnsMini} data={selectedYearData}/>
                    </Col>
                </Row>
            </div>
            <div className={'container inactive'}>
                {filterParams.years.map((year: string) => {
                    return (<div key={year}>
                        <h2>Липидная панель ({year} год)</h2>
                        <MedTable type={'full'} columns={columns} data={fullTableData}/>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default LaboratoryResultsPage