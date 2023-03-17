
import React, { useEffect, useRef, useState, useReducer } from 'react';
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
    TextInput,
    Animated,
    FlatList,
    Modal,
    Alert,
    ScrollView,
    SectionList
} from 'react-native';
import { Input, Divider, HamburgerIcon, CheckIcon, Select, Button, Menu, Square, AspectRatio, Center, Heading, NativeBaseProvider, Box, Stack, HStack, VStack, Spacer, Avatar, Text, IconButton, Icon, Progress } from "native-base";
import Ionicons from '@expo/vector-icons/Ionicons';
import ListWithSearching from './list-search';
import RightSlide from './food-right-slide';
import { useNavigation } from '@react-navigation/native';
const tables = [
    {
        id: 1,
        name: 'Table 1',
        table_bill: 0.00,
        customers: [
            {
                id: 1,
                name: 'C1', bill: 0,
                orders: [
                    {
                        id: 1,
                        name: "Pizza",
                        price: 11.11,
                        qty: 1
                    },
                    {
                        id: 2,
                        name: "Pasta",
                        price: 11.11,
                        qty: 1
                    },
                    {
                        id: 3,
                        name: "Cake",
                        price: 11.11,
                        qty: 1
                    }

                ]
            },
            {
                id: 2,
                name: 'C2', bill: 0,
                orders: [
                    {
                        id: 1,
                        name: "Pizza",
                        price: 11.11,
                        qty: 1
                    },
                    {
                        id: 2,
                        name: "Pasta",
                        price: 11.11,
                        qty: 1
                    },
                    {
                        id: 3,
                        name: "Cake",
                        price: 11.11,
                        qty: 1
                    }

                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Table 2',
        table_bill: 0.00,
        customers: [
            {
                id: 1,
                name: 'C1', bill: 0,
                orders: [
                    {
                        id: "",
                        name: "Pasta putaneska",
                        price: 11.11,
                        qty: 1,
                        status: {
                            title: "Lost Report",
                            // cancelation: ["Cusotmer", "Waiter", "Chef"]
                            preparation_time: 15,
                            qty: 1,
                            canceled_by: "Customer",
                            paid: "no",
                            cacelation_reason: "too salty",
                            time_order: new Date().toISOString(),
                            waiter_id: 'Big Johny',
                            order: "Pasta putaneska",
                            price: '11.11',
                            table_id: 2,
                            financial_lost: '50%'
                        },
                        meta: {
                            food_id: "1",
                            cost: 5,
                            food_name: "Pasta putaneska",
                            qties: [
                                ["water", 0.5, 0.33],
                                ["Salt", 0.5, 0.33],
                                ["Olive oil", 0.5, 0.33],
                                ["Alici", 300, 0.33],
                                ["cheese", 50, 0.33]
                            ]
                        }
                    }

                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Table 3',
        table_bill: 0.00,
        customers: [
            {
                id: 1,
                name: 'C1', bill: 0,
                orders: [

                ]
            }
        ]
    },
];



const FoodSearchModal = function ({ setModalVisible, modalVisible }) {


    return <Box flex={1}>
        <HStack>
            <Text>close</Text>
            <Spacer></Spacer>
            <Text>ahoj</Text>
        </HStack>
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={{
                marginTop: 40,
                padding: 11
            }}>


            </View>
        </Modal>

    </Box>
}

const TableListItem = (props) => {

    return <View></View>

}

const CustomerListItem = (props) => {

    return <View></View>

}

const reducer = function (
    state,
    action = { type: "", payload: null }
) {
    switch (action?.type) {
        case "ADD_TABLE":
            return [
                ...state,
                {
                    id: state.length + 1,
                    name: `Table ${state.length + 1}`,
                    customers: []
                }
            ];

        case "REMOVE_TABLE":
            return [...state].slice(action.payload, 1);

        case "ADD_CUSTOMER_TO_TABLE":
            {
                const table = state.find((table) => table.id === action.payload);

                if (table) {
                    table.customers.push({
                        id: table.customers.length,
                        name: `${table.name} C ${table.customers.length}`,
                        bill: 0,
                        orders: []
                    });
                }
            }

            return [...state];

        case "REMOVE_CUSTOMER_FROM_TABLE_BY_TABLEID": {
            const tableFoundById = state.find(
                (table) => table.id === action.payload.tableId
            );

            const custIndex = tableFoundById?.customers.findIndex(
                (cust) => cust.id === action.payload.custId
            );

            tableFoundById.customers.splice(custIndex, 1);

            return [...state];
        }

        case "ADD_ORDER_TO_CUSTOMER_BY_TABLE_CUST_ID": {
            const tableFoundById = state.find(
                (table) => table.id === action.payload.tableId
            );

            // const custIndex = table?.customers.findIndex(
            //   (cust) => cust.id === action.payload.custId
            // );
            // arr.splice(2, 0, 'grapefruit');

            const customerFoundById = tableFoundById.customers.find(
                (cust) => cust.id === action.payload.custId
            );
            customerFoundById.orders.push({
                ...action.payload.order,
                id: customerFoundById.orders.length + 1
            });

            return [...state];
        }

        case "REMOVEALL_CUSTOMER_ORDER_BY_TABBLEID_CUSTID": {
            const tableFoundById = state.find(
                (table) => table.id === action.payload.tableId
            );
            const customerFoundById = tableFoundById.customers.find(
                (cust) => cust.id === action.payload.custId
            );

            customerFoundById.orders.length = 0;
            return [...state];
        }

        case "EDIT_CUSTOMER_ORDER_TABLEID_CUSTID": {
            return [];
        }

        default:
            return state;
    }
};



const TableHeader = () => {
    return
}


const TablesView = ({ header, footer, data = [], renderItem }) => {

    return <>
        {header}
        {
            data.map((item, tableIndex) => {
                return <View key={tableIndex}>{renderItem && renderItem({ item })}</View>
            })
        }
        {footer}
    </>
}


const AccordionList = (props) => {
    tables
    const [tableState, dispatchTableUpdate] = useReducer(reducer, tables);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    return (
        <>
            <ScrollView
                style={{
                    backgroundColor: '#fff'
                }}
                bounces={false}
                nestedScrollEnabled={true}>
                <TablesView data={tableState} renderItem={({ item }) => {
                    return <VStack borderColor="coolGray.200" borderWidth="1" >
                        <HStack bg="primary.500" p={'11'}>
                            <Text>{item.name}</Text>
                            <Spacer />
                            <Button.Group isAttached colorScheme="blue" mx={{
                                base: "auto",
                                md: 0
                            }} size="sm">
                                <Button leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}>
                                </Button>
                            </Button.Group>
                        </HStack>
                        <TablesView
                            data={item.customers} renderItem={({ item }) => <VStack pr="0" pl="11" mb={"11"} borderColor="coolGray.200" borderWidth="1">

                                <VStack>
                                    <TablesView header={
                                        <HStack justifyContent={"space-between"} borderWidth={1} p="11" mb="22" style={{

                                        }}>
                                            <Button variant="outline" leftIcon={<Icon as={Ionicons} name="trash" size="sm" />} />
                                            <VStack>
                                                <Text>CUSTOMER {item.name}  ORDER</Text>
                                                <Text>33.33 Euro to pay</Text>
                                            </VStack>
                                            <Button onPress={() => navigation.navigate("Details", {
                                                params: {
                                                    renderComp: "search-food"
                                                }
                                            })} variant="outline" leftIcon={<Icon as={Ionicons} name="add" size="sm" />} >
                                                {/* <FoodSearchModal modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
                                            </Button>
                                        </HStack>
                                    } data={item.orders} renderItem={({ item }) => {
                                        return <VStack mb="28" borderWidth={1} borderColor="#ccc">

                                            <HStack borderBottomColor={"#ccc"} borderBottomWidth="1">
                                                <Text> Order accepted, in progress, wait 7 min</Text>
                                            </HStack>
                                            <Progress colorScheme="warning" value={65} />
                                            <HStack p="2" mb="18">
                                                <VStack>
                                                    <Text style={{
                                                        fontSize: 22,
                                                        fontWeight: "600"
                                                    }}>{item.name}</Text>
                                                    <Text style={{
                                                        fontSize: 18,
                                                        fontWeight: "400"
                                                    }}> {item.price} Eur</Text>
                                                </VStack>
                                                <Spacer />
                                                <Button ml="4" mr="4" variant="outline" leftIcon={<Icon as={Ionicons} name="remove" size="sm" />} />
                                                <Text>{0}</Text>
                                                <Button ml="4" variant="outline" leftIcon={<Icon as={Ionicons} name="add" size="sm" />} />
                                            </HStack>
                                            <Input type="text" w="100%" py="0" borderRadius={"0"} InputRightElement={<Button colorScheme="secondary" variant="outline" size="xs" rounded="none" w="1/5" h="full" onPress={() => null}>
                                                <Icon as={Ionicons} name="remove-circle" size="sm" color={"#ccc"} />
                                            </Button>} placeholder="add note for chef" />
                                            <VStack pl="2" mt="2" borderBottomColor={"#ccc"} borderBottomWidth="1">
                                                {
                                                    item?.status && Object.keys(item?.status)?.map((key) => {

                                                        return <HStack key={key.replace("_", " ")}>
                                                            <Box fontWeight={"600"} flex as="text">{key.replace("_", " ").toUpperCase()}</Box>
                                                            <Box flex as="text">{item?.status[key]}</Box>
                                                        </HStack>
                                                    })
                                                }
                                            </VStack>
                                            <VStack>
                                                <HStack borderWidth={1}><Box as="text">Recepie QTies</Box></HStack>
                                                <HStack justifyContent={"space-around"}>
                                                    <Box>name</Box>
                                                    <Box>qiantiy per item</Box>
                                                    <Box>cost</Box>
                                                </HStack>
                                                {
                                                    item?.meta?.qties.map((item, index) => {
                                                        return <HStack justifyContent={"space-around"}>
                                                            <Box as="text">{item[0]}</Box>
                                                            <Box as="text">{item[1]}</Box>
                                                            <Box as="text">{item[2]}</Box>
                                                        </HStack>
                                                    })
                                                }
                                            </VStack>
                                        </VStack>
                                    }} />
                                </VStack>
                            </VStack>

                            } />

                    </VStack>
                }} />


            </ScrollView>
        </>
    );
};

// status: {
//     // cancelation: ["Cusotmer", "Waiter", "Chef"]
//     preparation_time: 15,
//     cancelation: ["Customer"],
//     time_order: new Date(),
//     waiter_id: 'Big Johny'
// }




export default () => <AccordionList data={tables} />


// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, CheckBox } from 'react-native';

// const data = [
//   { id: '1', name: 'Item 1' },
//   { id: '2', name: 'Item 2' },
//   { id: '3', name: 'Item 3' },
//   { id: '4', name: 'Item 4' },
//   { id: '5', name: 'Item 5' },
// ];

// const App = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleItemSelection = (item) => {
//     const index = selectedItems.findIndex((selected) => selected.id === item.id);
//     if (index === -1) {
//       setSelectedItems([...selectedItems, item]);
//     } else {
//       const newSelectedItems = [...selectedItems];
//       newSelectedItems.splice(index, 1);
//       setSelectedItems(newSelectedItems);
//     }
//   };

//   const renderItem = ({ item }) => {
//     const isSelected = selectedItems.some((selected) => selected.id === item.id);

//     return (
//       <TouchableOpacity onPress={() => handleItemSelection(item)}>
//         <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
//           <Text>{item.name}</Text>
//           <CheckBox value={isSelected} onValueChange={() => handleItemSelection(item)} />
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//   };

//   const filteredData = data.filter((item) => {
//     return item.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   return (
//     <View style={{ flex: 1 }}>
//       <TextInput
//         style={{ padding: 16 }}
//         placeholder="Search"
//         onChangeText={(text) => handleSearch(text)}
//         value={searchQuery}
//       />
//       <FlatList
//         data={filteredData}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedItems}
//       />
//     </View>
//   );
// };

// export default App;
