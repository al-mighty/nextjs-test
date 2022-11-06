import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Label,
    Line,
    ComposedChart
} from "recharts";

const data = [
    {
        year: 2000,
        a: 300,
        b: 200,
        y:190,
        c: 2400,
        levelSecond:300,
        levelOne:200,
        // c: 2400
    },
    {
        year: 2003,
        a: 300,
        b: 200,
        y:220,
        levelSecond:300,
        levelOne:200,
        c: 2400
    },
    {
        year: 2005,
        a: 300,
        b: 200,
        c: 2400,
        levelSecond:300,
        levelOne:200,
        y:220,
    }
];

const toPercent = (decimal: number, fixed: number = 0) => {
    console.log('value - ',decimal)
    console.log('fixed - ',fixed)
    return `${(decimal * 100).toFixed(fixed)}%`;
}
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
        <ResponsiveContainer width={442} height={210}>
        <ComposedChart
            // width={500}
            // height={400}
            data={data}
            stackOffset="expand"
            margin={{
                top: 50,
                right: 50,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="year"
            >
                <Label value="год"   offset={15} position="right"  />
            </XAxis>
            <YAxis
                tickCount={4}
                ticks={[0,100,200,300]}
            >
                <Label value="мг/дл" offset={15} position="top" />
            </YAxis>
            <Tooltip />
            <Area
                type="monotone"
                dataKey="levelSecond"
                stroke="#8884d8"
                fill="#B5F5B4"
                opacity={0.6}
            />
            <Area
                // yAxisId={'y'}
                type="monotone"
                dataKey="levelOne"
                stroke="#82ca9d"
                fill="#FEAAAA"
                opacity={0.6}
            />
            <Line type="monotoneX" dataKey="y" stroke="#6D6B80" strokeWidth={2} />
        </ComposedChart>
        </ResponsiveContainer>
    );
}

export default Chart;
