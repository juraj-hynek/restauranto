import React, { useEffect, useRef, useState, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";
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
  Actionsheet,
  useDisclose,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAppContext } from "./context";
import SegmentedForm from "./comp-segments";

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

function TableListHeader({ setAppState }) {
  return (
    <VStack>
      <HStack py="4" flex>
        <Text>Table</Text>
        <Spacer />
        <Button
          onPress={() =>
            setAppState({
              type: "ADD_TABLE",
              payload: {
                name: "Table 123",
              },
            })
          }
          variant="outline"
          leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
        />
      </HStack>
      <SegmentedForm />
    </VStack>
  );
}

function TableListItem({ setAppState, tableIndex, handleNavigate, table }) {
  return (
    <Pressable
      // onLongPress={() =>
      //   setAppState({
      //     type: "RESERVE_TABLE",
      //     payload: {
      //       tableIndex: tableIndex,
      //     },
      //   })
      // }
      key={tableIndex}
      onPress={() =>
        handleNavigate({
          table,
          tableIndex: tableIndex,
        })
      }
    >
      <VStack
        borderRadius="11"
        m="1"
        p="2"
        style={{
          width:( Dimensions.get("window").width / 2) - 9,
          // height: Dimensions.get("window").width / 3,
          backgroundColor: (() => {
            if (table.customers.length > 0) {
              return "#fb923c";
            } else {
              return table.initBgColorTable;
            }
          })(),
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Text>{table.name}</Text>
        <Text>Table bill {table.table_bill}</Text>
        <Text>Customers {table.customers.length}</Text>
        {table.booked ? <Text>booked</Text> : <Text>FREE</Text>}
        <Spacer />
        <HStack>
          <TableAction table={table} setAppState={setAppState} />
          {/* <Spacer />
          <Button
            variant="outline"
            leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
          /> */}
        </HStack>
      </VStack>
    </Pressable>
  );
}

function TableAction({table}) {
  const { isOpen, onOpen, onClose } = useDisclose();

  const handleAction = () => {
    setAppState({
      type: "REMOVE_TABLE",
      payload: {
        index: tableIndex,
      },
    });
  };

  return (
    <>
      <Button flex onPress={onOpen}>
        Action
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <HStack px={4} justifyContent="center">
            <Text
              fontSize="16"
              color="gray.500"
              _dark={{
                color: "gray.300",
              }}
            >
              Table actions
            </Text>
          </HStack>
          <Actionsheet.Item>Add Customer to Table {table.customers.length}</Actionsheet.Item>
          <Actionsheet.Item>Remove Customer from Table {table.customers.length}</Actionsheet.Item>
          <Actionsheet.Item>Book table</Actionsheet.Item>
          <Actionsheet.Item>Customer wants to pay</Actionsheet.Item>
          {/* <Actionsheet.Item isDisabled>Share</Actionsheet.Item> */}
          <Actionsheet.Item>Delete Table</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

const TablesPage = ({}) => {
  const navigation = useNavigation();
  const [appState, setAppState] = useAppContext();

  const handleNavigate = (data) => {
    // console.log("handleNavigate params", JSON.stringify(data, null, 2));

    navigation.navigate("TableCustomers", {
      data: appState.tables[data.tableIndex],
      tableIndex: data.tableIndex,
      screen: "TablesPage",
    });
  };

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

  const styles = StyleSheet.create({
    container: {},
    modalContainer: {
      flex: 1,
      marginTop: 44,
      backgroundColor: '#fff'
    },
    modalHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#eee",
      width: "100%",
    },
    modalBody: {
      padding: 16,
    },
  });
  return (
    <ScrollView contentContainerStyle={{
      backgroundColor: '#fff'
    }} style={styles.container}>
      <TableListHeader setAppState={setAppState} />
      <VStack flexDirection="row" flexWrap="wrap">
        {appState.tables.map((table, tableIndex) => {
          return (
            <TableListItem
              setAppState={setAppState}
              handleNavigate={handleNavigate}
              tableIndex={tableIndex}
              table={table}
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
};

export default TablesPage;
