import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const BuildSwitch = ({
    trackColor = "",
    thumbColor = "",
    ios_backgroundColor = "",
    isEnabled = true,
    callback = () => null
}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        callback(isEnabled)
    }

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

export default BuildSwitch