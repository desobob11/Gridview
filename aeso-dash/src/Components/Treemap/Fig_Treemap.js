import {Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useEffect, useState } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap'
import '../../Pages/Homepage/Homepage.css'



export default function Fig_Treemap(props) {




    return (
        <Container style={{height:"50vh", width:"50vw", marginTop:"10vh"}}>
            <h1  class="text-figtitle">{props.title}</h1>
       

            <ResponsiveTreeMap
                data={props.figData}
                identity="name"
                value="loc"
                valueFormat=".02s"
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                colors={{ scheme: 'blue_green' }}
                labelSkipSize={12}
                labelTextColor="#FAF9F6"
                parentLabelTextColor="black"
                enableParentLabel={true}
                orientLabel={false}

                theme={{
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

                parentLabelPosition="top"

                borderColor={{
                    from: 'color',
                    modifiers: [
                        [
                            'darker',
                            0.1
                        ]
                    ]
                }}

            />

        </Container>
    );
}