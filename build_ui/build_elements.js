
import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    Modal
} from 'react-native';

import { ScrollView, TextInput as Input } from 'react-native-gesture-handler';
export function Stepper({
    stepperCallback,
    children,
    style = {},
    label = "Current value: ",
    currentValue = 0,
    minValue

}) {
    const [value, setValue] = useState(currentValue);

    const updateCurrentValue = (type) => {
        if (type === "+") { setValue((prevState) => prevState += 1) }
        else if (type === "-") { setValue((prevState) => prevState -= 1) }
        else {
            console.log('Stepper updateCurrentValue unknown type parameter')
        }
    }

    useEffect(() => {
        stepperCallback && stepperCallback(value)
    }, [value])

    return <HStack style={{ ...style }}>
        <Text>{label}</Text>
        <Spacer />
        <Text>{value}</Text>
        <Spacer size={10} />
        <HStack>
            <TouchableOpacity onPress={() => updateCurrentValue("-")}>
                <Text style={{
                    paddingVertical: 11,
                    paddingHorizontal: 30,
                    backgroundColor: '#ccc',
                    borderRadius: 6,
                    fontSize: 18
                }}>-</Text>
            </TouchableOpacity>
            <View style={{
                margin: 2
            }}></View>
            <TouchableOpacity onPress={() => updateCurrentValue("+")}>
                <Text style={{
                    paddingVertical: 11,
                    paddingHorizontal: 30,
                    backgroundColor: '#ccc',
                    borderRadius: 6,
                    fontSize: 18
                }}>+</Text>
            </TouchableOpacity>
        </HStack>

    </HStack>
}

export function GroupBox({ children, header, footer }) {


    const _mapppedChildren = React.Children.map(children, (child) => {
        return React.cloneElement(child, {
            style: {
                marginBottom: 111,
                ...child?.props?.style
            }
        })
    })

    return <View style={{
        padding: 11,
        backgroundColor: '#f5f5f7',
        borderRadius: 8
    }}>

        {header ? <Text style={{
            fontSize: 22,
            marginBottom: 8,
            fontWeight: "600",
        }}>{header}</Text> : null}


        {_mapppedChildren}


        {footer ? <Text style={{
            marginTop: 8
        }}> {footer}</Text> : null}
    </View>
}


export function AsyncImage(props) {

    const { isImageLoading, setIsImageLoading } = useState(true);

    const handleAsyncLoad = () => {
        setIsImageLoading(!isImageLoading);
    }

    return <View>
        <Image {...props} />
    </View>
}



export function DatePicker({ datePickerCallback = () => null }) {

    const [inputValue, setInputValue] = useState("");

    const handleInputEvent = (value) => {
        // if (value.length === 2) {
        //     setInputValue(value + "/")
        // } else if (value.length === 6) {
        //     setInputValue(value + "/")
        // } else {
        //     setInputValue(value)
        // }
        setInputValue(value)
    };

    useEffect(() => {
        // datePickerCallback(inputValue)
        console.log(inputValue)
    }, [inputValue]);

    return <View style={{
        flex: 1,
        flexDirection: 'row'
    }}>
        <View style={{
            flex: 1,
        }}>
            {false && <Text>DD</Text>}
            <Input

                onEndEditing={() => {

                }}
                onChangeText={(textVal) => handleInputEvent(textVal)}
                value={inputValue}
                maxLength={10}
                placeholder={"DD/MM/YYYY"}
                keyboardType="numeric"
                style={{

                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 11,
                    borderRadius: 8,
                    marginRight: 4
                }} />


        </View>

    </View>
}

export function TextInput(props) {
    const { size, type, placeholder = "Enter Value", style= {} } = props
    const [inputValue, setInputValue] = useState('');

    const _styles = {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 11,
        borderRadius: 8,
        flex: size,
        ...style

    };

    const handleInutValue = (value) => {
        setInputValue(value)
    }

    return <Input
        {...props}
        value={inputValue}
        onChangeText={(text) => handleInutValue(text)}
        placeholder={placeholder}
        style={[_styles]} />
}

TextInput.displayName = "TextInput";

export function HStack({ children, spacing, style = {} }) {

    return <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...style
    }}>
        {children}
    </View>

}
HStack.displayName = "HStack";

export function VStack({ alignment = "space-around", children, spacing, alignemnt, style = {}, size = 0 }) {

    // alignemtn
    // left
    // top
    // bottom
    // right

    return <View style={{
        flexDirection: 'column',
        justifyContent: alignment,
        alignItems: 'center',
        flex: size,
        ...style
    }}>
        {children}
    </View>
}
VStack.displayName = "VStack";


export function ZStack({ children, spacing, style = {} }) {

    return <View>
        {children}
    </View>

}
ZStack.displayName = "ZStack";

export function Section({ children, header, footer }) {
    return <View style={{
        padding: 4
    }}>
        {header}
        {children}
        {footer}
    </View>
}
Section.displayName = "Section";

export function Button({ action, label, style = {} }) {

    return <TouchableOpacity onPress={action}>
        <View>
            <Text>{label}</Text>
        </View>
    </TouchableOpacity>
}


export function Picker({ data = [], children, selectionCallback = () => null, label, style = {} }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const selectAction = ({ index, value }) => {
        console.log(value)
        setSelectedIndex(index);
        selectionCallback({ index, value }); // send selected val upper
    }



    return <View style={{
        flexDirection: 'column',

        ...style
    }}>
        {label}
        <Divider />
        <ScrollView style={{
            height: 100
        }}>

            {Array.isArray(data) && data.length > 0 ? data.map((item, index) => {
                return <TouchableOpacity key={index} onPress={() => selectAction({ index, value: item })}>
                    {React.cloneElement(children(item), {
                        key: index, style: {
                            borderBottomWidth: 1,
                            borderColor: '#ccc',
                            padding: 9
                        }
                    })}
                </TouchableOpacity>


            }) : null}

            {/* {(Array.isArray(data) && typeof children === "function") ? data.map((item, index) => {
                return <TouchableOpacity key={index} onPress={() => selectAction({ index, value: item })}>
                    <HStack style={{}}>
                        {children(item)}
                        <Spacer />
                        <Text>icone {selectedIndex === index ? "selected" : ''}</Text>
                    </HStack>
                </TouchableOpacity>
            }) : <Text>no data</Text>} */}
        </ScrollView>
    </View>
}

export function Label({ left, right, center, style = {} }) {
    return <View style={{
        flexDirection: 'row',
        // alignItems: 'space-between',
        // justifyContent: 'space-around',
        ...style
    }}>
        {typeof left === "string" ? <Text style={{
            fontSize: 18
        }}>{left}</Text> : left}
        <Spacer />
        {typeof right === "string" ? <Text style={{
            fontSize: 18
        }}>{right}</Text> : right}

    </View>
}


export function Form({ children, header, footer, padding, style = {} }) {

    const [formData, setFormData] = useState({});

    const formState = {
        formData,
        setFormData
    }

    return <View style={{
        padding: 11,
        ...style
    }}>
        {typeof header === "string" ? <Text style={{
            fontSize: 22,
            marginBottom: 44
        }}>{header}</Text> : header}

        {typeof children === "function" ? children(formState) : children}
        {typeof footer === "string" ? <Text style={{ fontSize: 18, marginTop: 22 }}>{footer}</Text> : footer}
    </View>
}

export function List({ children, data, header, footer, style = {} }) {

    if (!Array.isArray(data) && typeof data === 'object') {
        return <>
            {Object.keys(data).map((label, index) => {
                return React.cloneElement(children({
                    label: label,
                    value: data[label]
                }), {
                    key: index, style: {
                        ...children(item)?.props?.style,
                        // borderColor: '#ccc',
                        // padding: 9
                    }
                })
            })}</>
    }

    else if (Array.isArray(data)) {
        return <>
            {header}
            {Array.isArray(data) && data.length > 0 ? data.map((item, index) => {
                return React.cloneElement(children(item), {
                    key: index, style: {
                        ...children(item)?.props?.style,
                        // borderBottomWidth: 1,
                        // borderColor: '#ccc',
                        // padding: 9
                    }
                })
            }) : null}
            {footer}
        </>
    }
}


export function Spacer({ style = {}, size = 1 }) {
    return <View style={{
        flex: size,
        ...style
    }}></View>
}

export function Divider({ style = {}, height = 1, margins = [] }) {
    const [top, right, bottom, left] = margins;
    return <View style={{
        width: '100%',
        height: height,
        marginTop: top || 4,
        marginBottom: bottom || 4,
        marginLeft: left || 0,
        marginRight: right || 0,
        backgroundColor: '#ccc'
    }}></View>
}


export function NavigationView({ children, navigationTitle = '', onAppear, renderModalObject }) {

    const [modalOpen, setModalOpen] = useState(false);

    const pageState = {
        modalOpen,
        setModalOpen
    };

    useEffect(() => {
        onAppear ? onAppear() : null
    }, []);

    useEffect(() => {
        console.log('NavigationView state changed')
    }, [pageState]);

    return <SafeAreaView style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }}>

        <ScrollView style={{
            paddingHorizontal: 11
        }}>
            {typeof children === "function" ? children(pageState) : children}
        </ScrollView>
        <Modal style={{
            padding: 11
        }}
            animationType="slide"
            transparent={false}
            visible={modalOpen}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalOpen(!modalOpen);
            }}>
            {
                Object.keys(renderModalObject).map((renderKey, renderItemIndex) => {
                    return <View key={renderItemIndex}>
                        {renderModalObject[renderKey](pageState)}
                    </View>
                })
            }
        </Modal>
    </SafeAreaView>

}
