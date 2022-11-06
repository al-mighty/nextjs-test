import {Button, Checkbox, Col, Form, Row, Space } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import React from 'react';

const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
};

const SELECTED_MATERIAL = ['blood', 'urine', 'scraping','feces'];
const SELECTED_ANALYSIS = ['general_analysis', 'lipid_panel','biochemical_analysis','immunological_analysis', 'hormonal_analysis'];
const SELECTED_YEARS = [1994,1996,1998,2000,2003,2005];
const OPTIONS_MATERIAL = [
    { label: 'кровь', value: 'blood' },
    { label: 'моча', value: 'urine' },
    { label: 'соскоб', value: 'scraping' },
    { label: 'кал', value: 'feces' },
];
const OPTIONS_ANALYSIS = [
    { label: 'общий анализ', value: 'general_analysis' },
    { label: 'липидная панель', value: 'lipid_panel' },
    { label: 'биохимический анализ', value: 'biochemical_analysis' },
    { label: 'иммунологический анализ', value: 'immunological_analysis' },
    { label: 'гормональный анализ', value: 'hormonal_analysis' },
];
const OPTIONS_YEAR = [
    { label: '1994', value: 1994 },
    { label: '1996', value: 1996 },
    { label: '1998', value: 1998 },
    { label: '2000', value: 2000 },
    { label: '2003', value: 2003 },
    { label: '2005', value: 2005 },
];

const SelectedParams: React.FC = () => {
    const [form] = Form.useForm();
    const onReset = (e:any) => {
        e.preventDefault();
        form.resetFields();
    };
    const initialValues={
        materials:['blood'],
        analyzes:['lipid_panel'],
        years:[2000,2003,2005],
    }
    return(
        <>
            <Form layout={'vertical'} form={form} initialValues={initialValues}>
                <Form.Item name={'materials'} label="Выберите материал">
                    <Checkbox.Group options={OPTIONS_MATERIAL} onChange={onChange} />
                </Form.Item>
                <Form.Item name={'analyzes'} label="Выберите анализ">
                    <Checkbox.Group options={OPTIONS_ANALYSIS} onChange={onChange} />
                </Form.Item>
                <Form.Item name={'years'} label="Выберите год исследования">
                    <Checkbox.Group options={OPTIONS_YEAR} onChange={onChange} />
                </Form.Item>
                <Row style={{textAlign:'left'}}>
                    <Col span={12} >
                        <a
                            href={'#'} onClick={onReset}>
                            Скрыть фильтры
                        </a>
                    </Col>
                    <Col span={12} >
                        <a href={'#'} onClick={onReset}>
                            Свернуть фильтры
                        </a>
                    </Col>
                </Row>
            </Form>
            {/*<Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />*/}
            {/*<br />*/}
            {/*<br />*/}
            {/*<Checkbox.Group*/}
            {/*    options={optionsWithDisabled}*/}
            {/*    disabled*/}
            {/*    defaultValue={['Apple']}*/}
            {/*    onChange={onChange}*/}
            {/*/>*/}
        </>
    );
}

export default SelectedParams;