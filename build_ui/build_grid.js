import React, { useState } from "react";
import { View } from "react-native"



export function Grid({ children, style = {}, size = 1 }) {

    const gridStyle = {};

    const ReactMapCallBack = (child) => {

        if (child && child.type && child.type.componentName) {
            if (child.type.componentName === "Row") {
                gridStyle["flexDirection"] = "column";

            } else if (child.type.componentName === "Col") {
                gridStyle["flexDirection"] = "row";
            }
        }

        return React.cloneElement(child, {
            style: {
                ...child?.props?.style,
                flex: child?.props?.size
            }
        });
    };


    const modifiedChildren = React.Children.map(children, ReactMapCallBack);

    return <View style={{
        flex: 0,
        ...gridStyle,
        ...style
    }}>{modifiedChildren}</View>
}

Grid.componentName = "Grid";

export function Row({ children, style = {}, size = 0 }) {

    const gridStyle = {};

    const ReactMapCallBack = (child) => {

        if (child && child.type && child.type.componentName) {
            if (child.type.componentName === "Row") {
                gridStyle["flexDirection"] = "column";

            } else if (child.type.componentName === "Col") {
                gridStyle["flexDirection"] = "row";

            }
        }

        return React.cloneElement(child, {
            style: {
                ...child?.props?.style,
                flex: child?.props?.size
            }
        });
    };


    const modifiedChildren = React.Children.map(children, ReactMapCallBack);

    return <View style={{
        flex: size,
        ...gridStyle,
        ...style
    }}>{modifiedChildren}</View>
}
Row.componentName = "Row";


export function Col({ children, style = {}, size = 0 }) {


    const gridStyle = {};

    const ReactMapCallBack = (child) => {

        if (child && child.type && child.type.componentName) {
            if (child.type.componentName === "Row") {
                gridStyle["flexDirection"] = "column";

            } else if (child.type.componentName === "Col") {
                gridStyle["flexDirection"] = "row";
            }
        }

        return React.cloneElement(child, {
            style: {
                ...child?.props?.style,
                flex: child?.props?.size
            }
        });
    };


    const modifiedChildren = React.Children.map(children, ReactMapCallBack);

    return <View style={{
        flex: size,
        ...gridStyle,
        ...style
    }}>{modifiedChildren}</View>
}
Col.componentName = "Col";