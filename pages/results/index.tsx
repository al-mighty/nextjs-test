import SelectedParams from "./components/Filter";
import dynamic from 'next/dynamic'
import {Badge, Col, Row} from "antd";
import MedTable from "../../src/components/Tables";
import React from "react";
import t from 'src/components/Tables/table.module.scss';

const ChartWithNoSSR = dynamic(() => import('./components/Chart'), {
    ssr: false
})

const columnsMini: any[] = [
    {
        title: 'Год',
        dataIndex: 'year',
        key: 'year',
        render: (text: number | string) => <span>{text}</span>,
    },
    {
        title: 'Показание',
        dataIndex: 'indication',
        key: 'indication',
        render: (text: number | string) => <span>{text} мг / дл</span>,
    },
    {
        title: 'Результат',
        dataIndex: 'result',
        key: 'result',
        render: (text: number | string) => text > 200
            ? <span><Badge className={`${t.badgeError}`} status="error"/> выше нормы</span>
            : <span><Badge className={`${t.badgeSuccess}`} status="success"/>в норме</span>
    },
]
const data: any[] = [
    {
        key: 1,
        year: 2000,
        indication: 240,
        result: 240,
    },
    {
        key: 2,
        year: 2002,
        indication: 204,
        result: 204,
    },
    {
        key: 3,
        year: 2006,
        indication: 20,
        result: 20,
    }
]
const LaboratoryResultsPage = () => {
    return (
        <div>
            <div className={'container'}>
                <h1>Результаты лабораторных исследований</h1>
                <SelectedParams/>
            </div>
            <div className={'container'}>
                <h2>Изменение уровня холестерина по годам</h2>
                <Row>
                    <Col xl={12} xs={24}>
                        <ChartWithNoSSR/>
                    </Col>
                    <Col xl={12} xs={24}>
                        <MedTable columns={columnsMini} data={data}/>
                    </Col>
                </Row>
            </div>
            <div className={'container inactive'}>
                <h2>Липидная панель (2005 год)</h2>
                <Row>
                    <Col xl={12} xs={24}>
                        {/*<ChartWithNoSSR/>*/}
                    </Col>
                    <Col xl={12} xs={24}>
                        {/*<MedTable columns={columnsMini} data={data}/>*/}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default LaboratoryResultsPage