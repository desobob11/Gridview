import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import '../../Pages/Homepage/Homepage.css'



export default function Fig_Donut(props) {
    
    const my_colors = ["#08306b", "#08519c", "#2171b5", "#4292c6", "#6baed6", "#9ecae1", "#c6dbef", "#deebf7"];


    return (
        <Container style={{height:"50vh", width:"50vw", marginTop:"10vh"}}>
            <h1  class="text-figtitle">{props.title}</h1>
       

            <ResponsivePie
                data={props.figData}
                margin={{ top: 40, right: 120, bottom: 80, left: 120 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                colors={my_colors}
                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.2
                        ]
                    ]
                }}
                theme={{
                    text: {
                        "fontSize": 12,
                        "fill": "#111827",
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
                    }
        
                }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#111827"
                arcLinkLabelsThickness={2}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#111827"
    
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 20,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 80,
                        itemHeight: 18,
                        itemTextColor: '#111827',
                        itemDirection: 'right-to-left',
                        itemOpacity: 1,
                        symbolSize: 8,
                        symbolShape: 'circle',
      
                    }
                ]}
            />

        </Container>
    );
}