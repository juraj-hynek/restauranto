import React, { useState } from "react";
import { View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, List, Text } from 'react-native-paper';


const MyComponent = () => {
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <List.Section title="Accordions">
            {
                [...Array(100)].map((item, index) => {
                    return <List.Accordion key={index}
                        title={"Coca-cola"}
                        left={props => <List.Icon {...props} icon="folder" />}>
                        <List.Item title="PACK SIZE" left={props => <List.Icon {...props} icon="folder" />}
                             right={props => <Text>6</Text>}


                        />
                        <List.Item title="QTY"
                            left={props => <List.Icon {...props} icon="folder" />}
                            right={props => <Text>6 Euro</Text>}

                        />
                        <List.Item title="QTY Expanded"
                            left={props => <List.Icon {...props} icon="folder" />}
                            right={props => <Text>6 Euro</Text>}

                        />
                        <List.Item title="COST PER PACK"
                            left={props => <List.Icon {...props} icon="folder" />}
                            right={props => <Text>6 Euro</Text>}


                        />
                        <List.Item title="COST PER PIECE"
                            left={props => <List.Icon {...props} icon="folder" />}
                            right={props => <Text>6 Euro</Text>}

                            
                            />
                    </List.Accordion>
                })
            }

        </List.Section>
    );
};


const BuildPage = function ({ scrollEnabled = true, renderHeader = true, title = "Stock Items", PageConentComp }) {
    return <View style={{
        flex: 1
    }}>
        {renderHeader ? <Appbar.Header>
            <Appbar.BackAction onPress={() => { }} />
            <Appbar.Content title={title} />
            <Appbar.Action icon="plus" onPress={() => { }} />
            <Appbar.Action icon="magnify" onPress={() => { }} />
        </Appbar.Header> : null}
        <ScrollView scrollEnabled={scrollEnabled}>
            <MyComponent />
        </ScrollView>
    </View>
}


export default BuildPage

// {
//     [...Array(100)].map((item, index) => {
//         return <View key={index} style={{
//             borderWidth: 1,
//             height: 30
//         }}></View>
//     })
// }