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

function TableAction({}) {
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

          <Actionsheet.Item>Remove Customer</Actionsheet.Item>
          <Actionsheet.Item>Customer wants to pay</Actionsheet.Item>
          {/* <Actionsheet.Item isDisabled>Share</Actionsheet.Item> */}
          <Actionsheet.Item></Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

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

function TableListHeader({ setAppState, tableIndex }) {
  return (
    <HStack py="4" flex>
      <Text>Table</Text>
      <Spacer />
      <Button
        onPress={() =>
          setAppState({
            type: "ADD_CUSTOMER",
            payload: {
              tableIndex: tableIndex,
            },
          })
        }
        variant="outline"
        leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
      />
    </HStack>
  );
}

function TableListItem({
  tableIndex,
  customerIndex,
  handleNavigate,
  customer,
  setAppState,
}) {
  return (
    <Pressable
      onPress={() =>
        handleNavigate({
          customer,
          tableIndex: tableIndex,
          customerIndex: customerIndex,
        })
      }
    >
      <VStack
        style={{
          width: Dimensions.get("window").width / 3 - 1,
          height: Dimensions.get("window").width / 3,
          backgroundColor: "#fb923c",
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Text>{customer.name}</Text>

        <Spacer />
        <HStack>
          <TableAction table={customer} setAppState={setAppState} />
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

const TableCustomers = ({ route }) => {
  const [appState, setAppState] = useAppContext();
  const navigation = useNavigation();
  const { tableIndex, data, screen } = route.params;

  const handleNavigate = (screenParams) => {
    // console.log("param", {
    //   customer:
    //     appState.tables[tableIndex].customers[screenParams.customerIndex],
    //   tableIndex: tableIndex,
    //   customerIndex: screenParams.customerIndex,
    // });
    navigation.navigate("TableCustomerOrder", {
      customer:
        appState.tables[tableIndex].customers[screenParams.customerIndex],
      tableIndex: tableIndex,
      customerIndex: screenParams.customerIndex,
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
    <ScrollView style={styles.container}>
      <TableListHeader setAppState={setAppState} tableIndex={tableIndex} />
      <VStack flexDirection="row" flexWrap="wrap">
        {appState.tables[tableIndex].customers.map(
          (customer, customerIndex) => {
            return (
              <TableListItem
                setAppState={setAppState}
                tableIndex={tableIndex}
                handleNavigate={handleNavigate}
                customerIndex={customerIndex}
                customer={customer}
              />
            );
          }
        )}
      </VStack>
    </ScrollView>
  );
};

export default TableCustomers;
