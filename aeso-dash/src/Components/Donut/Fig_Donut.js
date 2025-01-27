import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import '../../Pages/Homepage/Homepage.css'



export default function Fig_Donut(props) {



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
                colors={{ scheme: 'set3' }}
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
                        "fill": "#FAF9F6",
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
                arcLinkLabelsTextColor="#FAF9F6"
                arcLinkLabelsThickness={2}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#121212"
    
                legends={[
                    {
                        anchor: 'left',
                        direction: 'column',
                        justify: false,
                        translateX: -80,
                        translateY: 0,
                        itemsSpacing: 20,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'right-to-left',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
      
                    }
                ]}
            />

        </Container>
    );
}