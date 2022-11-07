import React from "react";
import {
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

const renderTooltipContent = ({payload}:{payload?:any[]}) => {
    const data = payload?.filter(item => item.name === 'line').shift();
    if (data?.name !== 'line') return

    return (
        <div style={{
            background: '#8284EA',
            borderRadius: '4px',
            padding: '7px 9px',
            color:"white"
        }}>
            <span className="total" style={{
                fontWeight: 700,
                fontSize: '14px',
                color: 'white!important',
                padding: '2px 0',
            }}>{data?.payload?.y}</span>
        </div>
    );
};

const CustomizedDot = ({cx, cy, value}:{cx:number,cy:number,value:number}) => {
    if (value > 200) {
        //red
        return (
            <svg key={value} x={cx - 5} y={cy - 5} width="11" height="12" viewBox="0 0 11 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="5.47264" cy="6" rx="5.47264" ry="5.5" fill="#ED5B88"/>
            </svg>);
    }
    //green
    return (
        <svg key={value} x={cx - 5} y={cy - 5} width="11" height="12" viewBox="0 0 11 12" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="5.47264" cy="6" rx="5.47264" ry="5.5" fill="#B5F5B4"/>
        </svg>

    );
};

const Chart = (props:any) => {
    const {data}:any=props;
    return (
        <ResponsiveContainer width={'100%'} height={248}>
            <ComposedChart
                data={data}
                margin={{
                    top: 50,
                    right: 50,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="1 1 1"/>
                <XAxis
                    dataKey="year"
                >
                    <Label style={{color:"red"}} value="год" offset={15} position="right"/>
                </XAxis>
                <YAxis
                    tickCount={4}
                    ticks={[0, 100, 200, 300]}
                >
                    <Label style={{color:"red"}} value="мг/дл" offset={15} position="top"/>
                </YAxis>
                <Tooltip itemStyle={{color:'white'}} content={renderTooltipContent}/>

                {/*red*/}
                <Area
                    connectNulls
                    activeDot={false}
                    baseLine={0}
                    isAnimationActive={false}
                    type="monotoneY"
                    dataKey="levelSecond"
                    stroke="null"
                    fill="#FFE7E7"
                />
                {/* green*/}
                <Area
                    isAnimationActive={false}
                    activeDot={false}
                    type="monotoneY"
                    dataKey="levelOne"
                    stroke="null"
                    fill="#EAFCEA"
                    baseLine={0}
                    connectNulls
                />
                <Line
                    key={'xz'}
                    dot={CustomizedDot}
                    type="monotoneX" name={'line'} dataKey="y" stroke="#6D6B80" strokeWidth={2}
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default Chart;
