import React, { useEffect, useRef, useState, useReducer } from "react";
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
  SectionList,
} from "react-native";

import {
  Input,
  Divider,
  HamburgerIcon,
  CheckIcon,
  Select,
  Button,
  Menu,
  Square,
  AspectRatio,
  Center,
  Heading,
  NativeBaseProvider,
  Box,
  Stack,
  HStack,
  VStack,
  Spacer,
  Avatar,
  Text,
  IconButton,
  Icon,
  Progress,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const tables = [
  {
    id: 1,
    name: "Table 1",
    table_bill: 0.0,
    data: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [
          {
            id: 1,
            name: "Pizza",
            price: 11.11,
            qty: 1,
          },
          {
            id: 2,
            name: "Pasta",
            price: 11.11,
            qty: 1,
          },
          {
            id: 3,
            name: "Cake",
            price: 11.11,
            qty: 1,
          },
        ],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [
          {
            id: 1,
            name: "Pizza",
            price: 11.11,
            qty: 1,
          },
          {
            id: 2,
            name: "Pasta",
            price: 11.11,
            qty: 1,
          },
          {
            id: 3,
            name: "Cake",
            price: 11.11,
            qty: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Table 2",
    table_bill: 0.0,
    data: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [
          {
            id: "",
            name: "Pasta putaneska",
            price: 11.11,
            qty: 1,
            order_status: {
              title: "Lost Report",
              // cancelation: ["Cusotmer", "Waiter", "Chef"]
              preparation_time: 15,
              qty: 1,
              canceled_by: "Customer",
              paid: "no",
              cacelation_reason: "too salty",
              time_order: new Date().toISOString(),
              waiter_id: "Big Johny",
              order: "Pasta putaneska",
              price: "11.11",
              table_id: 2,
              financial_lost: "50%",
            },
            meta: {
              food_id: "1",
              cost: 5,
              food_name: "Pasta putaneska",
              recepie_qty: [
                ["water", 0.5, 0.33],
                ["Salt", 0.5, 0.33],
                ["Olive oil", 0.5, 0.33],
                ["Alici", 300, 0.33],
                ["cheese", 50, 0.33],
              ],
            },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Table 3",
    table_bill: 0.0,
    data: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [
          {
            id: "",
            name: "Pasta putaneska",
            price: 11.11,
            qty: 1,
            order_status: {
              title: "Lost Report",
              // cancelation: ["Cusotmer", "Waiter", "Chef"]
              preparation_time: 15,
              qty: 1,
              canceled_by: "Customer",
              paid: "no",
              cacelation_reason: "too salty",
              time_order: new Date().toISOString(),
              waiter_id: "Big Johny",
              order: "Pasta putaneska",
              price: "11.11",
              table_id: 2,
              financial_lost: "50%",
            },
            meta: {
              food_id: "1",
              cost: 5,
              food_name: "Pasta putaneska",
              recepie_qty: [
                ["water", 0.5, 0.33],
                ["Salt", 0.5, 0.33],
                ["Olive oil", 0.5, 0.33],
                ["Alici", 300, 0.33],
                ["cheese", 50, 0.33],
              ],
            },
          },
        ],
      },
    ],
  },
];

const useParallelFetch = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState([]);
  const urls = [
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3",
  ];

  Promise.all(urls.map((url) => fetch(url).then((response) => response.json())))
    .then((data) => {
      // Data is an array of the responses from each API call
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return {
    data,
    setData,
    error,
    loading,
  };
};

const TablesView = ({ header, footer, data = [], renderItem }) => {
  return (
    <>
      {header}
      {data.map((item, tableIndex) => {
        return (
          <View key={tableIndex}>{renderItem && renderItem({ item })}</View>
        );
      })}
      {footer}
    </>
  );
};

const SectionListWithFixedHeader = ({ screenRole = "" }) => {
  const [stickyHeaderHeight, setStickyHeaderHeight] = useState(0);

  const handleItemLongPress = (itemId) => {
    console.log("Item long pressed:", itemId);
  };
  // const [tables, setTables] = useState(tables);

  const renderSectionHeader = ({ section }) => (
    <HStack style={styles.sectionHeader}>
      <Text>{section.name}</Text>
      <Text> Customer no {section.data.length}</Text>
      <Spacer />
      <Button
        variant="outline"
        leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
      />
      <Button
        onPress={() =>
          showAlert({
            title: "Delete Table ?",
            subtitle: "This action cannot be undone",
            left: "Cancel",
            right: "Delete Selected Table",
          })
        }
        variant="outline"
        leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
      />
    </HStack>
  );

  const renderSectionFooter = ({ section }) => (
    <View style={styles.sectionFooter}>
      <Text>{section.footer}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.stickyHeader}>
      <Text style={styles.stickyHeaderText}>Sticky Header</Text>
    </View>
  );

  const handleSave = () => {
    // Alert.alert('Save Pressed', 'Save was pressed');
  };

  const handleCancel = () => {
    // Alert.alert('Cancel Pressed', 'Cancel was pressed');
  };

  const showAlert = ({ title = "", subtitle = "", left = "", right = "" }) => {
    Alert.alert(
      title,
      subtitle,
      [
        {
          text: left,
          style: "cancel",
          onPress: handleCancel,
        },
        {
          text: right,
          onPress: handleSave,
        },
      ],
      { cancelable: false }
    );
  };

  const renderSection = ({ section, onLongPress }) => (
    <VStack p="0" style={styles.section}>
      {/* <Text>{JSON.stringify(section, null, 2)}</Text> */}
      <TablesView
        data={section.data}
        renderItem={({ item }) => (
          <VStack mb={"11"} borderColor="coolGray.200" borderWidth="0">
            <TablesView
              header={
                <HStack
                  justifyContent={"space-between"}
                  borderWidth={0}
                  mb="22"
                >
                  <VStack>
                    <Text>CUSTOMER {item.name} ORDER</Text>
                  </VStack>
                </HStack>
              }
              data={item.orders}
              renderItem={({ item: oderItem }) => {
                return (
                  <HStack m="2">
                    <VStack mr="1">
                      <Button mb="2" variant="outline">
                        accept
                      </Button>
                      <Button mb="2" variant="outline">
                        (+5)
                      </Button>
                      <Button  onPress={()=>showAlert({
                        title: "Are you sure ?",
                        subtitle: "You are going to reject order, please send message to waiter why",
                        left: "Cancel",
                        right: "Confirm"
                    })} mb="2" variant="outline">
                        Reject
                      </Button>
                    </VStack>

                    <VStack flex p="2">
                      <Text style={{
                        fontSize: 21,
                        fontWeight: "600"
                      }}>{oderItem.name}</Text>
                      <TextInput
                        autoCorrect={false}
                        returnKeyType="done"
                        placeholder="Message for Waiter"
                        style={{
                          borderWidth: 1,
                          borderColor: "#ccc",
                          padding: 11,
                          width: "100%",
                        }}
                      />
                      <Spacer />
                      <Progress
                        colorScheme="warning"
                        value={Math.random() * 100}
                      />
                    </VStack>
                    <Button onPress={()=>showAlert({
                        title: "Food ready ?",
                        left: "Cancel",
                        right: "Confirm"
                    })}>ready</Button>
                  </HStack>
                );
              }}
            />
          </VStack>
        )}
      />

      {/* {renderSectionFooter({ section })} */}
    </VStack>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={tables}
        keyExtractor={(item, index) => index}
        renderSectionHeader={renderSectionHeader}
        renderSectionFooter={renderSectionFooter}
        renderItem={renderSection}
        // ListHeaderComponent={renderHeader}
        stickySectionHeadersEnabled={true}
        onLayout={(event) =>
          setStickyHeaderHeight(event.nativeEvent.layout.height)
        }
        contentContainerStyle={{ paddingBottom: stickyHeaderHeight * 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
  },
  sectionFooter: {
    backgroundColor: "#f2f2f2",
  },
  section: {
    backgroundColor: "#fff",
    marginBottom: 10,

    // flex:1
  },
  items: {},
  item: {
    fontSize: 16,
    // paddingVertical: 5,
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 1,
  },
  stickyHeaderText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SectionListWithFixedHeader;
