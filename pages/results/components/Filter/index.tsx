import {Checkbox, Col, Form, Row } from 'antd';
import React from 'react';

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
    { label: '1994', value: '1994' },
    { label: '1996', value: '1996' },
    { label: '1998', value: '1998' },
    { label: '2000', value: '2000' },
    { label: '2003', value: '2003' },
    { label: '2005', value: '2005' },
];

const SelectedParams = (props:any) => {
    const [form] = Form.useForm();
    const onReset = (e:any) => {
        e.preventDefault();
        form.resetFields();
    };
    const {selectedParams,onChangeField}:any=props;
    return(
        <>
            <Form layout={'vertical'} onFieldsChange={onChangeField} form={form} initialValues={selectedParams}>
                <Form.Item name={'materials'} label="Выберите материал">
                    <Checkbox.Group options={OPTIONS_MATERIAL}/>
                </Form.Item>
                <Form.Item name={'analyzes'} label="Выберите анализ">
                    <Checkbox.Group options={OPTIONS_ANALYSIS}/>
                </Form.Item>
                <Form.Item  name={'years'} label="Выберите год исследования">
                    <Checkbox.Group  options={OPTIONS_YEAR}/>
                </Form.Item>
                <Row style={{textAlign:'left'}}>
                    <Col span={12} >
                        <a
                            href={'#'} style={{color:'unset',textDecoration:'underline'}} onClick={onReset}>
                            Скрыть фильтры
                        </a>
                    </Col>
                    <Col span={12} >
                        <a href={'#'} style={{color:'unset',textDecoration:'underline'}} onClick={onReset}>
                            Свернуть фильтры
                        </a>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default SelectedParams;