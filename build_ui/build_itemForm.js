import React, { useState } from "react";
import { View, ScrollView, TextInput } from "react-native"
import { Avatar, Button, Card, Text, Appbar } from 'react-native-paper';

import {Grid, Row, Col} from "./build_grid";

const data = [
    {
        grid: {
            data: 'row',
            ingredient: 'col',
            quantity: 'çol',
            cost_per_init: 'row'
        },
        data: [
            {
                ingredient: 'Cheese A',
                quantity: 200,
                cost_per_init: 1.5
            },
            {
                ingredient: 'Cheese B',
                quantity: 200,
                cost_per_init: 1.5
            },
            {
                ingredient: 'Cheese C',
                quantity: 200,
                cost_per_init: 1.5
            }
        ]
    }
]

const calcCost = (quantity, cost_per_init) => {
    return quantity * cost_per_init
}


const BuildItemStockForm = () => {
    const [formState, setFormState] = React.useState({});


    const actionOnChange = () => {
        setFormState()
    }

    return (
        <View style={{
            flex: 1
        }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { }} />
                <Appbar.Content title={"RECIPE COSTING FORM "} />
                <Appbar.Action icon="plus" onPress={() => { }} />
                <Appbar.Action icon="magnify" onPress={() => { }} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={{
                padding: 11,

            }} scrollEnabled={true}>
                <Grid>
                    <Row size={10} style={{
                        borderWidth: 1
                    }}>
                        <Text>RECIPE COST FORM</Text>
                    </Row>
                    <Row size={10}

                        style={{
                            borderWidth: 1
                        }}

                    >
                        <Col size={5}>
                            <Text>Menu item</Text>
                        </Col>
                        <Col size={5}>
                            <Text>Date</Text>
                        </Col>
                    </Row>
                    <Row style={{
                        borderWidth: 1
                    }}
                    >
                        <Col style={{

                        }}
                            size={1}><Text>Ingrediens</Text></Col>
                        <Col style={{

                        }}
                            size={1}><Text>Quantity</Text></Col>
                        <Col style={{

                        }}
                            size={1}><Text>Cost per unit (cost per 100g)</Text></Col>
                        <Col size={1}><Text>Total COst</Text></Col>
                    </Row>
                    <Row>
                        <Col size={1}>
                            <TextInput style={{
                                borderWidth: 1,
                                width: '100%'
                            }} />
                        </Col>
                        <Col size={1}>
                            <TextInput style={{
                                borderWidth: 1,
                                width: '100%'
                            }} />
                        </Col>
                        <Col size={1}>
                            <TextInput style={{
                                borderWidth: 1,
                                width: '100%'
                            }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col size={6}>
                            <Text>Total cost</Text>
                        </Col>
                        <Col size={4}>
                            <Text>120</Text>
                        </Col>
                    </Row>
                    {
                        data[0].data.map((item, index) => {
                            return <Row style={{
                                borderWidth: 1
                            }} key={index}>
                                <Col size={1}><TextInput value={item.ingredient} /></Col>
                                <Col size={1}><Text>{item.quantity}</Text></Col>
                                <Col size={1}><Text>{item.cost_per_init}</Text></Col>
                                <Col size={1}><Text>{calcCost(item.quantity, item.cost_per_init)}</Text></Col>
                            </Row>

                        })
                    }
                </Grid>
            </ScrollView>
        </View>
    );
};

export default BuildItemStockForm;

// <Grid>
// {
//     [...Array(200)].map((item, index) => {
//         return <Row key={index} style={{
//             backgroundColor: 'pink'
//         }}>
//             <Col size={1}>
//                 <Text>Header {index} </Text>
//             </Col>
//             <Col size={1}>
//                <TextInput style={{
//                 width: '100%'
//                }} />
//             </Col>
//         </Row>
//     })
// }
// </Grid>