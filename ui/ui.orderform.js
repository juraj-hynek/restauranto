
import React, { useEffect, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image
} from 'react-native';



const BuildOrderForm = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        let items = Array.apply(null, Array(60)).map((v, i) => {
            return {
                id: i,
                src: 'https://unsplash.it/400/400?image=' + (i + 1)
            };
        });
        setDataSource(items);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={dataSource}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            margin: 1
                        }}>
                        <Image
                            style={styles.imageThumbnail}
                            source={{ uri: item.src }}
                        />
                    </View>
                )}
                //Setting the number of column
                numColumns={3}
                keyExtractor={(item, index) => index}
            />
        </SafeAreaView>
    );
};
export default BuildOrderForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});