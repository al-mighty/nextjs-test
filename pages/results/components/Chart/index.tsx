import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        month: "2015.01",
        a: 4000,
        b: 2400,
        c: 2400
    },
    {
        month: "2015.07",
        a: 4000,
        b: 2400,
        c: 2400
    }
];

const toPercent = (decimal: number, fixed: number = 0) =>
    `${(decimal * 100).toFixed(fixed)}%`;

const getPercent = (value: number, total: number) => {
    const ratio = total > 0 ? value / total : 0;

    return toPercent(ratio, 2);
};

const renderTooltipContent = (o: any) => {
    const { payload = [], label } = o;
    const total = payload.reduce(
        (result: number, entry: any) => result + entry.value,
        0
    );

    return (
        <div className="customized-tooltip-content">
            <p className="total">{`${label} (Total: ${total})`}</p>
            <ul className="list">
                {payload.map((entry: any, index: number) => (
                    <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Chart=()=> {
    return (
        <AreaChart
            width={500}
            height={400}
            data={data}
            stackOffset="expand"
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={toPercent} />
            {/*<Tooltip content={renderTooltipContent} />*/}
            <Area
                type="monotone"
                dataKey="a"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="b"
                stackId="2"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
            <Area
                type="monotone"
                dataKey="c"
                stackId="3"
                stroke="#ffc658"
                fill="#ffc658"
            />
        </AreaChart>
    );
}

export default Chart;
