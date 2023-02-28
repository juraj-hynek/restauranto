import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AsyncImage, List, Picker, Spacer, TextInput } from './build_ui/build_elements'

export const SECTIONS = [
    {
        hstack: [
            {
                type: "text",
                data: 'back',
                props: {
                    style: {
                        color: 'red'
                    }
                }
            },
            {
                type: "spacer",
            },
            {
                type: 'text',
                data: 'fuck you'
            }
        ]
    },
    {
        vstack: [
            {
                type: 'picker',
                data: ["juraj", "peter"]

            },
            {
                type: 'list',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9]

            }
        ]
    }


];

function RenderUIElements(props) {
    const { type, data, style = {}} = props;


    if (type === 'text') {
        return <Text>{data}</Text>
    } else if (type === "img") {
        return <AsyncImage
            source={{
                uri: data
            }}
            style={{
                width: 155,
                height: 155
            }} />
    } else if (type === "spacer") {
        return <Spacer />
    } else if (type === "textInput") {
        return <TextInput  {...props} style={style} />
    } else if (type === "picker") {
        return <Picker label={<Text>macks</Text>} data={data} >
            {(data) => <Text>{data}</Text>}
        </Picker>
    } else if (type === 'list') {
        return <List data={data} >
            {(item) => <Text>{item}</Text>}
        </List>
    }

    else {
        return null
    }

}

export default function RenderStack({ data }) {
    return Array.isArray(data)  ? (
        data.map((item, index) => {
            const [stack] = Object.keys(item);
            return (
                <SafeAreaView style={{

                    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
                }}>
                    <View
                        key={Symbol('index').toString()}
                        style={{
                            display: "flex",
                            flexDirection: stack === "hstack" ? "row" : "column",
                            border: "1px solid red"
                        }}
                    >
                        {Array.isArray(item[stack]) && item[stack].length > 0 ? (
                            item[stack].map((stackItem, hstackIndex) => {
                                const [innerStack] = Object.keys(stackItem);
                                if (innerStack.includes("stack")) {
                                    return <RenderStack data={[stackItem]} />;
                                } else {
                                return <RenderUIElements key={hstackIndex} {...stackItem} />;
                                }
                            })
                        ) : (
                            <div>no data inner</div>
                        )}
                    </View>
                </SafeAreaView>



            );
        })
    ) : (
        <View>
            <Text>no data</Text>
        </View>
    );
}