import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import {ResponsiveLine} from '@nivo/line'
import '../Pages/Homepage/Homepage.css'



export default function Fig_PoolPrice(props) {

    const my_colors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef", "#deebf7"];


    return (
        <Container style={{height:"40vh", width:"40vw", marginTop:"10vh"}}>
            <h1  class="text-figtitle">{props.title}</h1>
            <ResponsiveLine 
        data={props.figData}
        margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Hour (Mountain time)',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Pool Price ($)',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0

        }}
        enableArea={true}
        areaOpacity={0.2}
        enableGridY={true}
        enableGridX={true}
        colors={my_colors}
        enablePoints={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        theme = {{
            "text": {
                "fontSize": 12,
                "fill": "#111827",
            },
            "grid": {
                "line": {
                    "stroke": "#FAF9F6",
                    "strokeWidth": 0.1
                }
            },
            "tooltip": {
                "wrapper": {},
                "container": {
                    "background": "#1f1f1f",
                    "color": "#FAF9F6",
                    "fontSize": 12
                },
                "basic": {},
   
                "table": {},
                "tableCell": {},
                "tableCellValue": {}
            },
            "axis": {
                "domain": {
                    "line": {
                        "stroke": "#111827",
                        "strokeWidth": 1
                    }
                },
                "legend": {
                    "text": {
                        "fontSize": 16,
                        "fill": "#111827",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                },
                "ticks": {
                    "line": {
                        "stroke": "#111827",
                        "strokeWidth": 1
                    },
                    "text": {
                        "fontSize": 11,
                        "fill": "#111827",
                        "outlineWidth": 0,
                        "outlineColor": "transparent"
                    }
                }
            },


        }}
        /*
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .6)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
            */
    />
        </Container>
    );
}