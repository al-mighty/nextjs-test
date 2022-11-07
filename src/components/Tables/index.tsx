import {Table} from 'antd';
import React, {useMemo} from 'react';
import s from 'src/components/Tables/table.module.scss';

const MedTable = ({columns, data,type}: { columns: any[], data: any[],type?:string }):any => {
    const myColumns = useMemo(() => columns, [columns])
    const myData = useMemo(() => data, [data])
    return <Table className={`${s.customTable} ${type==='full'?s.fullTable:''}`} pagination={false} columns={myColumns} dataSource={myData}/>;
}


export default MedTable;