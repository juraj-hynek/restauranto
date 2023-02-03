import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableHighlight,
    Image
} from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28basdasa1',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91axfgfa97f632',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571xcvxe29d723',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad5xvcxc3abb28ba4',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbddfgdf91aa97f635',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-dfgdffgdfgddf',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-dfgdfgd',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91gjkhaa97f638',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571ewew29d729',
        title: 'Third Item',
    },
];


const _onPress = () => { }

const BuildFlatList = ({ renderItem = () => null }) => {

    const Item = ({ item, separators, _onPress = () => console.log("BuildFlatList > Item _onPress not defined") }) => {
      return  null
    }
    
    
    return (
        <SafeAreaView style={[{}]}>
            <FlatList
                // scrollToOffset={() => null}
                // scrollToItem={() => null}
                // scrollToIndex={() => null}
                // onRefresh={() => console.log("refresing")}
                // refreshing={false}
                // initialScrollIndex={0}
                horizontal={false}
                data={DATA}
                renderItem={({ item, index, separators }) => <Item index={index} _onPress={_onPress} separators={separators} item={item} />}
                keyExtractor={item => item.id}
                ListFooterComponent={<View>
                    <Text>Footer</Text>
                </View>}

                // ItemSeparatorComponent={<View style={{ borderWidth: 1 }}><Text>Sep</Text></View>}
                ListHeaderComponent={<View>
                    <Text>Header</Text>
                </View>}
                ListHeaderComponentStyle={{}}
                ListFooterComponentStyle={{}}
            />
        </SafeAreaView>
    );
};

export default BuildFlatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
     
    },
    title: {
        fontSize: 32,
    },
    logo: {
        width: 66,
        height: 58,
    },
});



