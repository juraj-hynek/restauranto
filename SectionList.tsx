
import React, { useState } from 'react';

import { TextInput, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import {NumberInput, Assets, Colors, Spacings, Typography, View, Text, Button, Keyboard, Incubator, Picker, DateTimePicker } from 'react-native-ui-lib'; //eslint-disable-line
const { TextField } = Incubator;
const { KeyboardAwareInsetsView } = Keyboard;

export function RenderUIElement({ items = {} }) {
    const { type = "", data, style = {}, props = {} } = items;

    if (type === "img") {
        return <Image
            {...props}
            source={{
                uri: data
            }}
            style={{
                width: 80,
                height: 80
            }}
            resizeMode="cover"
        />
    }
    if (type === "icon") {
        return <View></View>
    }
    if (type === "textinput" || type === "input") {
        return <TextField
            {...props}

            onChangeText={() => null}
      
        />
    }
    if (type === "list") {
        return <View></View>
    }
    if (type === "text") {
        return <Text {...props} style={[style]}>{data}</Text>
    }

    if (type === "search_bar") {
        return <View></View>
    }
    if (type === "spacer") {

        return <View></View>
    }

    if (type === "table") {
        return <View></View>
    }
    if (type === "button") {
        return <View></View>
    }
    if (type === "picker" || type === "select") {
        return <Picker
            value={""}
            {...props}
            onChange={() => console.log('changed')}
        >
            {
                data.map((selectItem, selectIndex) => { return <Picker.Item key={selectItem.value} value={selectItem.value} label={selectItem.label} /> })
            }
        </Picker>
    }

    if (type === "checkbox") {
        return <View></View>
    }
    if (type === "date") {
        return <DateTimePicker {...props} mode={'date'} />
    } 
    if(type==="number"){
        return <NumberInput {...props}  onChangeNumber={()=>{}} />
    }

    else {
        return <View></View>
    }
}

export function RenderStack({ data = [] }) {
    return Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => {
            const [stack] = Object.keys(item);
            return (
                <View
                    key={index}
                    style={{
                        flex: 1,
                        flexDirection: stack === "hstack" ? "row" : "column",
                    }}
                >
                    {Array.isArray(item[stack]) && item[stack].length > 0 ? (
                        item[stack].map((stackItem, hstackIndex) => {
                            const [innerStack] = Object.keys(stackItem);
                            if (innerStack.includes("stack")) {
                                return <RenderStack key={hstackIndex} data={[stackItem]} />;
                            } else {
                                return <RenderUIElement key={hstackIndex} items={stackItem} />;
                            }
                        })
                    ) : (
                        null
                    )}
                </View>
            );
        })
    ) : (
        null
    );
}