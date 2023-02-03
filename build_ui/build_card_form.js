
import React, { useState, useRef } from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, Animated, Easing } from 'react-native';
import { Text, Appbar } from "react-native-paper";
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicons from '@expo/vector-icons/Ionicons';


const BuildFLex = ({ }) => {

    return <View>

    </View>
}





const BuildCheckbox = ({ containerStyle = {} }) => {
    const [value, setValue] = useState();

    const actionSetValue = (value) => {
        setValue()
    }
    return <View style={[containerStyle]}>
        <Text></Text>
        <View></View>
        <Ionicons type='font-awesome' name={"chevron-up"} />
    </View>
}


const BuildToggle = ({ containerStyle = {}, checked = false, label = "n/a", toggleStyle = "" }) => {
    const translateX = useRef(new Animated.Value(0)).current;
    const [value, setValue] = useState(false);

    const actionSetValue = () => {
        setValue(!value)
        actionStartAnimation()
    }

    const actionStartAnimation = () => {
        Animated.timing(translateX, {
            toValue: value ? 10 : 0,
            easing: Easing.back(),
            duration: 300,
            useNativeDriver: true,
        }).start();
    }

    if (toggleStyle === "button") {
        return <TouchableWithoutFeedback onPress={actionSetValue}>
            <View style={[containerStyle, {
                borderWidth: 1, marginTop: 20, padding: 20, alignItems: 'center', justifyContent: "center", backgroundColor: value ? "red" : "",
            }]}>
                <Text>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    }

    return <TouchableWithoutFeedback onPress={() => actionSetValue()}>
        <View style={[containerStyle, { borderWidth: 1, marginTop: 20, flexDirection: "row", padding: 20 }]}>
            <Text>{label}</Text>
            <View style={[{ flex: 1 }]}></View>
            <View style={{
                borderWidth: 1,
                width: 200,
                height: 50
            }}>
                <Animated.View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'red',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    transform: [{
                        translateX: translateX,
                    }]
                }} />
            </View>
        </View>
    </TouchableWithoutFeedback>
}


export default () => <BuildToggle toggleStyle="" />


const BuildRadioButton = ({ containerStyle = {} }) => {
    const [value, setValue] = useState();

    const actionSetValue = (value) => {
        setValue()
    }
    return <View style={[containerStyle]}>
        <Text></Text>
        <View></View>
        <Ionicons type='font-awesome' name={"chevron-up"} />
    </View>
}




const Vstack = function ({ children }) {

    return <View style={{
        flex: 1,
        borderWidth: 1
    }}>{children}</View>
}

const __data = [
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
];


function BuildDropDownSelect({ multiSelect = true, label = "Select Item", data = [], callback = () => null, containerStyle = {}, itemStyle = {} }) {


    const [visible, setVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState([])

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const onItemPress = (item) => {
        setSelectedValue(item)
        toggleDropdown(false)
        callback(item)
    }

    const renderItemMultiSelect = ({ item }) => {
        return <View style={[{ flexGrow: 1 }, itemStyle]}>
            <TouchableOpacity style={[styles.item, { flexDirection: "row" }]} onPress={() => onItemPress(item)}>
                <Text>{item.label}</Text>
                <View style={{
                    flex: 1
                }}>
                </View>
                <Ionicons type='font-awesome' name={visible ? "chevron-up" : "chevron-down"} />
            </TouchableOpacity>
        </View>
    }

    const renderItem = ({ item }) => (
        <View style={[itemStyle]}>
            {item.icon ? "" : null}
            <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
                <Text>{item.label}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Vstack>
            <View style={{
                marginTop: 100
            }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={toggleDropdown}
                >
                    <Text style={styles.buttonText}>{label + " " + selectedValue?.label}</Text>
                    <Ionicons type='font-awesome' name={visible ? "chevron-up" : "chevron-down"} />
                </TouchableOpacity>
            </View>
            <FlatList
               horizontal ={true}
                contentContainerStyle={[containerStyle]}
                data={visible ? __data : []}
                renderItem={multiSelect ? renderItemMultiSelect : renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent= {<View></View>}
                ListHeaderComponent = {<View></View>}
                ListHeaderComponentStyle ={{}}
                ListFooterComponentStyle ={{}}
            />
        </Vstack>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#efefef',
        height: 50,
        paddingHorizontal: 10,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
    item: {
        padding: 14,
        marginBottom: 1,
        backgroundColor: '#efefef',
    }
});




const BuildDatePicker = ({ label = "" }) => {
    const [date, setDate] = useState(new Date(Date.now()));

    const onChange = (obEvent, value) => {
        setDate(value);
    };

    return <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "space-between"
    }}>
        <View>
            <Text>{label}</Text>
        </View>
        <View style={{
            flex: 1
        }}></View>
        <View>
            <DateTimePicker value={date}
                onChange={onChange}
                mode={'date'}
            // display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            />
        </View>
    </View>

}

const buildFormData = [

    {

        header: {
            left: 'Basic Item into',
            center: "",
            right: ''
        },
        footer: {},

        containerStyle: {
            flex: 1,
            flexDirection: "row"
        },

        data: [
            {
                id: "",
                __uiType: "input",

            },
            {
                name: "",
                __uiType: "input",


            },
            {
                description: "",
                __uiType: "input",


            },
            {
                icon: "",
                __uiType: "input",


            }
        ]
    },
    {

        header: {
            left: 'Quantities and Units',
            center: "",
            right: ''
        },
        footer: {},

        containerStyle: {
            flex: 1,
            flexDirection: "row"
        },

        data: [
            {
                label: "",
                icon: "",

                __uiType: "input",

            },
            {
                name: "",
                __uiType: "input",


            },
            {
                description: "",
                __uiType: "input",


            },
            {
                icon: "",
                __uiType: "input",


            }
        ]
    }


]


const BuildHeader = ({ title = "" }) => (
    <Appbar.Header>
        <Appbar.BackAction onPress={() => { }} />
        <Appbar.Content title={title} />
        <Appbar.Action icon="calendar" onPress={() => { }} />
        <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
);



const Form = ({ children }) => {
    return <ScrollView>{children}</ScrollView>
}
const Section = ({ children, header = {} }) => {

    return <View style={{
        padding: 11,

    }}>
        <View>
            {header.leftComp}
        </View>
        <View>{children}</View>
    </View>
}


function BuildCardForm() {



    return <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
            flex: 1
        }}>
        <BuildHeader title="Create Stock Card" />
        <Form>
          
        </Form>
    </KeyboardAvoidingView>
}

const card = {
    id: '',
    name: "Pepsi",
    description: "",
    symbol: "bottle",
    last_count: "",
    // kg, liter,
    calories: {
        serving_size: "",
        calories_per_100ml: "",
    },
    discount: {
        amount: "",
        reason: ""
    },
    prices_history: [
        {
            year: 2021,
            price: "10euro/1pack/6",
            supplier_id: '1'
        },
        {
            year: 2022,
            price: "10euro/1pack/6",
            supplier_id: '3'
        },
        {
            year: 2023,
            price: "10euro/1pack/6",
            supplier_id: '3'
        }
    ],
    expiration_date: "30/01/2023",
    purchase_date: "01/01/2022",
    category: "soft_drink",
    location: {
        building: '',
        room: '',
        fridge: ''
    },
    waste: {
        hand_reported_waste: "9kg",
        computed_waste: "10kg",
        time_period: ""
    },
    quantities: {
        packing_type: "package",
        packing_size: 6,

    },
    supplier: {
        id: "",
        name: "",
        contact_person: "Juraj Hynek",
        taxId: '',
        address: "Piscotta Marina",
        email: "juraj.hynek@gmail.com",
        phone: "+44789456123",
    },
}