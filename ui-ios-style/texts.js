import React from 'react';
import {  Text, StyleSheet } from 'react-native';

export const LargeTitle = ({ children }) => {
    return <Text style={styles.title1}>{children}</Text>
}

export const Title1 = ({ children }) => {
    return <Text style={styles.title1}>{children}</Text>
}

export const Title2 = ({ children }) => {
    return <Text style={styles.title2}>{children}</Text>
}

export const Title3 = ({ children }) => {
    return <Text style={styles.title3}>{children}</Text>
}

export const Headline = ({ children }) => {
    return <Text style={styles.headline}>{children}</Text>
}

export const Body = ({ children }) => {
    return <Text style={styles.body}>{children}</Text>
}

export const Callout = ({ children }) => {
    return <Text style={styles.callout}>{children}</Text>
}


export const Subhead = ({ children }) => {
    return <Text style={styles.subhead}>{children}</Text>
}


export const Footnote = ({ children }) => {
    return <Text style={styles.largeTitle}>{children}</Text>
}

export const Caption1 = ({ children }) => {
    return <Text style={styles.caption1}>{children}</Text>
}
export const Caption2 = ({ children }) => {
    return <Text style={styles.caption2}>{children}</Text>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        paddingHorizontal: 20,
    },
    largeTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        lineHeight: 41,
        letterSpacing: 0.25,
    },
    title1: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 34,
        letterSpacing: 0.15,
    },
    title2: {
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 28,
        letterSpacing: 0.15,
    },
    title3: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 25,
        letterSpacing: 0,
    },
    headline: {
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 22,
        letterSpacing: -0.41,
    },
    body: {
        fontSize: 17,
        fontWeight: 'normal',
        lineHeight: 22,
        letterSpacing: -0.41,
    },
    callout: {
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 21,
        letterSpacing: -0.32,
    },
    subhead: {
        fontSize: 15,
        fontWeight: 'normal',
        lineHeight: 20,
        letterSpacing: -0.24,
    },
    footnote: {
        fontSize: 13,
        fontWeight: 'normal',
        lineHeight: 18,
        letterSpacing: -0.08,
    },
    caption1: {
        fontSize: 12,
        fontWeight: 'normal',
        lineHeight: 16,
        letterSpacing: 0.16,
    },
    caption2: {
        fontSize: 11,
        fontWeight: 'normal',
        lineHeight: 13,
        letterSpacing: 0.08,
    },
});

