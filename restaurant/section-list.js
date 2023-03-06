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
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const tables = [
  {
    id: 1,
    name: "Table 1",
    table_bill: 0.0,
    customers: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [],
      },
    ],
  },
  {
    id: 2,
    name: "Table 2",
    table_bill: 0.0,
    customers: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [],
      },
    ],
  },
  {
    id: 2,
    name: "Table 3",
    table_bill: 0.0,
    customers: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [],
      },
    ],
  },
  {
    id: 2,
    name: "Table 4",
    table_bill: 0.0,
    customers: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [],
      },
    ],
  },
  {
    id: 2,
    name: "Table 5",
    table_bill: 0.0,
    customers: [
      {
        id: 1,
        name: "C1",
        bill: 0,
        orders: [],
      },
      {
        id: 2,
        name: "C2",
        bill: 0,
        orders: [],
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

const ParentModal = ({
  parentComp,
  childComp,
  toggleVisible,
  toggleChildVisible,
  visible,
  childVisible,
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Modal visible={visible} onRequestClose={toggleVisible}>
        <View
          style={{
            flex: 1,
          }}
        >
          {parentComp}
        </View>
      </Modal>
      <Modal visible={childVisible} onRequestClose={toggleChildVisible}>
        <View
          style={{
            flex: 1,
          }}
        >
          {childComp}
        </View>
      </Modal>
    </View>
  );
};

const SectionListWithFixedHeader = ({ screenRole = "" }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [childVisible, setChildVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState([]);

  const toggleVisible = (table) => {
    setSelectedTable(table);
    setVisible(!visible);
  };

  const toggleChildVisible = (customer) => {
    setSelectedCustomer(customer);
    setChildVisible(!childVisible);
  };

  const handleNavigate = (data) => {
    navigation.navigate("Details", { data: data, screen: "customers" });
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
      <HStack py="4" flex>
        <Text>Table</Text>
        <Spacer />
        <Button
          variant="outline"
          leftIcon={<Icon as={Ionicons} name="list" size="sm" />}
        />
      </HStack>
      <VStack flexDirection="row" flexWrap="wrap">
        {tables.map((table, tableIndex) => {
          return (
            <Pressable onPress={() => handleNavigate(table)}>
              <VStack
                style={{
                  width: Dimensions.get("window").width / 3 - 1,
                  height: Dimensions.get("window").width / 3,
                  backgroundColor: "#ccc",
                  borderWidth: 1,
                  borderColor: "#fff",
                }}
                key={tableIndex}
              >
                <Text>{table.name}</Text>
                <Text>{table.table_bill}</Text>
              </VStack>
            </Pressable>
          );
        })}
      </VStack>
      {/* <ParentModal
        visible={visible}
        childVisible={childVisible}
        parentComp={
          <View
            style={{
              flex: 1,
              marginTop: 44,
            }}
          >
            <HStack justifyContent={"space-between"}>
              <Button onPress={() => setVisible(false)}>Close</Button>
              <Text>Close</Text>
              <Text>Close</Text>
            </HStack>
            {selectedTable.map((customer, customerIndex) => {
              return (
                <Pressable
                  onPress={() => {
                    setVisible(false);
                    toggleChildVisible(customer.orders);
                  }}
                >
                  <HStack borderWidth={1} key={customerIndex}>
                    <Text>{customer.name}</Text>
                  </HStack>
                </Pressable>
              );
            })}
          </View>
        }
        childComp={
          <View
            style={{
              flex: 1,
              marginTop: 44,
            }}
          >
            <HStack justifyContent={"space-between"}>
              <Button onPress={() => setChildVisible(false)}>Close</Button>
              <Text>Close</Text>
              <Text>Close</Text>
            </HStack>
            <Text>{JSON.stringify(selectedCustomer, null, 2)}</Text>
            {selectedCustomer.map((customer, customerIndex) => {
              return (
                <HStack borderWidth={1} key={customerIndex}>
                  <Text>{customer.name}</Text>
                </HStack>
              );
            })}
          </View>
        }
      /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1
    marginTop: 44,
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
  },
  sectionFooter: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  section: {
    backgroundColor: "#fff",
    marginBottom: 10,
    // flex:1
  },
  items: {
    padding: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 5,
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
