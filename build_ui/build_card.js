import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

/* 

<Card>
<CardHeader>
 <CardTitle></CardTitle>
 <CardSubtitle></CardSubtitle>
</CardHeader>
 <CardContent></CardContent>
</Card>

*/




export function CardHeader({ children }) {
    const style = {
        padding: 8
    }
    return <View style={[style]}>{children}</View>;
}

export function CardTitle({ children, style = {} }) {

    const _style = {
        margin: 0,
        padding: 0,
        fontSize: 18,
        fontWeight: '700',
        ...style
    }
    return <Text style={{ ..._style }}>{children}</Text>
}


export function CardSubtitle({ children }) {
    const style = {
        marginBottom: 4,
        padding: 0,
        fontSize: 12,
        fontWeight: '700',
        color: '#666666'
        // lineHeight: 1.2
    }
    return <Text style={{ ...style }}>{children}</Text>
}


export function CardConent({ children, style = {} }) {
    const _style = {
        paddingHorizontal: 8,
        paddingBottom: 8,
        ...style
    }
    if (typeof children === 'string') { return <Text style={{ ..._style }}>{children}</Text> }
    else {
        return children
    }
}



export function Card({ children, style = {} }) {
    return <View style={{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        ...style


    }}>
        {children}
    </View>
}

