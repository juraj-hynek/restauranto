import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState, useReducer } from 'react';;
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    Platform,
    SafeAreaView,
    StatusBar,
    Pressable,
    FlatList
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Divider, HamburgerIcon, CheckIcon, Select, Button, Menu, Square, AspectRatio, Center, Heading, NativeBaseProvider, Box, Stack, HStack, VStack, Spacer, Avatar, Text, IconButton, Icon } from "native-base";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import BuildSearchDropDown from '../build_ui/build_search_dropdown';



const BuildTextInput = (props) => {
    const { writeToStorage, formState, label } = props

    return <Input
        defaultValue={formState[label]}
        {...props}
        InputLeftElement={<Text>{label}</Text>}
        mb="4"
        mx="3"
        onChange={({ nativeEvent }) => {
            writeToStorage(label, nativeEvent.text)
        }}
    />
}

const MBuildTextInputMemo = React.memo(BuildTextInput);


export function usePageAsyncStorage(storageKey) {

    const setItem = async (value = {}) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(storageKey, jsonValue);

        } catch (e) {
            // saving error
        } finally {

        }
    }
    const getItem = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem(storageKey);
            return jsonValue != null ? JSON.parse(jsonValue) : {};
        } catch (e) {
            // error reading value
        } finally {

        }
    }

    useEffect(() => { }, []);

    return { setItem, getItem }
}

// function AppBar({ right }) {
//     return <View>
//         <StatusBar bg="" barStyle="light-content" />
//         <Box safeAreaTop bg="" />
//         <HStack bg="" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
//             <HStack alignItems="center">
//                 <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="grey" />} />
//                 <Text color="grey" fontSize="22" fontWeight="bold">
//                     Dashboard
//                 </Text>
//             </HStack>
//             <HStack>
//                 <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="grey" />} />
//                 <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="grey" />} />
//                 <IconButton icon={<Icon as={null} name="search" size="sm" color="grey" />} />
//             </HStack>
//         </HStack>
//     </View>;
// }


// function ToggleListItemView(props) {
//     const { title, subtitle, data = [1, 2, 3, 4, 5, 6, 7, 8, 9] } = props

//     const [isOpen, setOpening] = useState(false)
//     return <Box p="4" borderColor="coolGray.200" borderWidth="1">
//         <TouchableOpacity onPress={() => setOpening(!isOpen)}>
//             <HStack pb={"11"}>
//                 <Text>{title}</Text>
//                 <Spacer />
//                 <Text mr={"4"}>Bill 10</Text>
//                 <Icon as={Ionicons} name="cloud-upload-outline" size="sm" />
//             </HStack>
//         </TouchableOpacity>
//         {
//             isOpen ? <Box minH={"200"}>
//                 {
//                     data.map((item, index) => {
//                         return <View key={uuid.v4()}>
//                             <View>
//                                 <Text>Header</Text>
//                             </View>
//                             <View>
//                                 {
//                                  data.map(()=> {
//                                     return <View key={uuid.v4()}>
//                                         <Text>ahoj</Text>
//                                     </View>
//                                  })
//                                 }
//                             </View>
//                         </View>
//                     })
//                 }
//             </Box> : null
//         }
//     </Box>
// }

// function ToggleListView(props) {
//     const { data = [1, 2, 3, 4, 5, 6, 7, 8, 9] } = props;

//     return <ScrollView>
//         {
//             data.map((item,) => {
//                 return <ToggleListItemView title="Table header" subtitle="" key={uuid.v4()} />
//             })
//         }
//     </ScrollView>
// }



const AccordionList = ({ data = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handlePress = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <View style={{
            flex: 1
        }}>
            {data.map((item, index) => (
                <View key={item.id}>
                    <TouchableOpacity onPress={() => handlePress(index)}>
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                    {expandedIndex === index && (
                        <Text>{item.content}</Text>
                    )}
                </View>
            ))}
        </View>
    );
};



export default function FormBuilder(props) {
    const { pageName, dataToRender = [], initFormState = {} } = props;
    const formRef = useRef({});
    const [formState, setFormState] = useState({});

    const { setItem, getItem } = usePageAsyncStorage("@p(home)ui(form-stock)");

    const readFromStorage = async () => {
        const formStateInStorage = await getItem();
        setFormState(formStateInStorage);
    };

    const writeToStorage = (label, inputValue) => {
        setFormState({
            ...formState,
            [label]: inputValue
        });


        // formRef.current = {
        //     ...formRef.current,
        //     [label]: inputValue
        // };
        // await setItem(formRef.current);
    };

    useEffect(() => {
        // readFromStorage();
    }, []);

    return <View style={{
        flex:1
    }}>
         <AccordionList />
    </View>


    // return <ScrollView style={{}}>
    //     {dataToRender.map((formSection) => {
    //         return <Box style={[
    //         ]} key={uuid.v4()}>
    //             <Box mb="1" mx="3">
    //                 {formSection.title && <Heading>{formSection.title}</Heading>}
    //                 {formSection.subtitle && <Text>{formSection.subtitle}</Text>}
    //             </Box>
    //             <Box mb="4" mx="3" background={"gray.50"} style={[
    //                 //formSection.fieldsContainerStyle || {}
    //             ]}>
    //                 <ScrollView showsHorizontalScrollIndicator={false} horizontal={false}>
    //                     {
    //                         Array.isArray(formSection.fields) && formSection.fields.map((fieldItem) => {
    //                             const { type, props, visible = true, columnsCount = 1 } = fieldItem;
    //                             const { label = "", placeholder = "", data = [], message = "", style = {}, uiLayout = '', } = props;

    //                             switch (true) {
    //                                 case (type === "grid"):
    //                                     return <Box>
    //                                         <Box>
    //                                             <HStack>
    //                                                 <Heading>
    //                                                     {label}
    //                                                 </Heading>
    //                                                 <Spacer />
    //                                             </HStack>
    //                                         </Box>
    //                                         <View style={{
    //                                             flex: 1,
    //                                             // borderWidth: 1
    //                                         }}>
    //                                             <FlatList
    //                                                 style={{
    //                                                     backgroundColor: '',
    //                                                     flex: 1,
    //                                                     // borderWidth: 1
    //                                                 }}
    //                                                 data={data.map((item, index) => ({
    //                                                     label: item,
    //                                                     index: index
    //                                                 }))}
    //                                                 renderItem={({ item }) => (
    //                                                     <TouchableOpacity onLongPress={() => console.log('long press')} onPress={() => console.log('presed')}>
    //                                                         <Box borderColor="coolGray.200" borderWidth="1"
    //                                                             style={{
    //                                                                 flex: 1
    //                                                                 // flexDirection: 'row',
    //                                                                 // justifyContent: 'space-between',
    //                                                                 // alignItems: 'center',
    //                                                                 // width: (Dimensions.get("window").width /columnsCount) - 14,
    //                                                                 // height: 80,
    //                                                                 // padding: 8,                                                                 
    //                                                                 // backgroundColor: '#ccc',
    //                                                                 // margin: 1
    //                                                             }}>
    //                                                             <AspectRatio w="50%" ratio={16 / 16}>
    //                                                                 <HStack>
    //                                                                     <Text>{item.label}</Text>
    //                                                                     <Text>{props.dataSubLabel}</Text>
    //                                                                 </HStack>
    //                                                             </AspectRatio>
    //                                                         </Box>
    //                                                     </TouchableOpacity>
    //                                                 )}
    //                                                 //Setting the number of column
    //                                                 numColumns={2}
    //                                                 keyExtractor={(item, index) => uuid.v4()}
    //                                             />
    //                                         </View>
    //                                     </Box>


    //                                 case (type === "imageView"):
    //                                     return visible && <Box key={uuid.v4()}></Box>



    //                                 case (type === "buttonView"):
    //                                     return visible && <Box key={uuid.v4()} style={style}>
    //                                         <TouchableOpacity onLongPress={() => console.log('long press')} onPress={() => console.log('presed')}>
    //                                             <Text>{data[0]}</Text>
    //                                         </TouchableOpacity>
    //                                     </Box>


    //                                 case (type === "linkView"):
    //                                     return visible && <Box key={uuid.v4()}></Box>


    //                                 case (type === ""):
    //                                     return visible && <Box key={uuid.v4()}></Box>

    //                                 case type === "boxView":
    //                                     return visible && <TouchableOpacity key={uuid.v4()}>
    //                                         <Box mr="4" style={[style]}>
    //                                             {/* <Icon   style={{ fontSize: 20, color: 'red' }}  name="home" /> */}
    //                                             <Text>{data[0] || "N/A"}</Text>
    //                                         </Box>
    //                                     </TouchableOpacity>

    //                                 case (type === "SearchDropDown"):
    //                                     return <BuildSearchDropDown />

    //                                 case (type === "textInput"):
    //                                     return visible && <Box key={uuid.v4()}>
    //                                         <Input
    //                                             mb="4" mx="3"
    //                                             defaultValue={formState[label]}
    //                                             {...props}
    //                                             InputLeftElement={<Text>{label}</Text>}
    //                                             onChange={({ nativeEvent }) => {
    //                                                 writeToStorage(label, nativeEvent.text)
    //                                             }}
    //                                         />

    //                                         {message && <Text mb="4" mx="3">{message}</Text>}
    //                                     </Box>

    //                                 case (type === "SelectInput"):
    //                                     return visible && <Box key={uuid.v4()}>
    //                                         <Select  {...props} mb="4" mx="3"
    //                                             selectedValue={formState[label]}
    //                                             accessibilityLabel="Choose Category"
    //                                             placeholder={label}
    //                                             mt={1}
    //                                             onValueChange={(value) => console.log(label, value)}
    //                                             _selectedItem={{
    //                                                 bg: "teal.600",
    //                                                 endIcon: <CheckIcon size="5" />
    //                                             }}
    //                                         >
    //                                             {data.map((pickerItem) => {
    //                                                 // console.log('pickerItem', pickerItem)
    //                                                 return <Select.Item key={uuid.v4()} label={pickerItem} value={pickerItem} />
    //                                             })}
    //                                         </Select>
    //                                         {message && <Text mb="4" mx="3">{message}</Text>}
    //                                     </Box>

    //                                 case (type === "DateInput"):
    //                                     return visible && <Box key={uuid.v4()} mb="4" mx="3">
    //                                         <Text>{label}</Text>
    //                                         <DateTimePicker
    //                                             {...props}
    //                                             label={label}
    //                                             onChange={(date) => {
    //                                                 console.log("date", date)
    //                                             }}
    //                                             display=""
    //                                             value={new Date()} mode="date" />
    //                                     </Box>
    //                                 default:
    //                                     return null
    //                             }
    //                         })
    //                     }
    //                 </ScrollView>
    //             </Box>
    //         </Box>
    //     })}
    //     {/* <HStack mb="4" mx="3" justifyContent={'space-between'}>
    //         <Button colorScheme="secondary" leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} size="sm">Cancel</Button>
    //         <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} size="sm">Save</Button>
    //     </HStack> */}
    // </ScrollView>
}






 // const calc = uiDescriptionForm.map((formSection) => {
    //   return formSection.fields.reduce((accum, next) => {
    //     if (next.props.label.includes('QTY')) {
    //       return accum + "1x" + next.props.label

    //     } else {
    //       return accum
    //     }
    //   }, '')
    // }).join(" ");