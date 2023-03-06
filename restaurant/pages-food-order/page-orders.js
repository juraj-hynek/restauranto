import React, { useEffect, useRef, useState, useReducer } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
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
import { useAppContext } from "./context";

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

function TableListHeader({ handleNavigate }) {
  return (
    <HStack py="4" flex>
      <Text>Table</Text>
      <Spacer />
      <Button
        onPress={() => handleNavigate()}
        variant="outline"
        leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
      />
    </HStack>
  );
}

function TableListItem({ orderIndex, handleNavigate, order }) {
  return (
    <Pressable key={orderIndex} onPress={() => handleNavigate(order)}>
      <VStack
        style={{
          width: Dimensions.get("window").width / 3 - 1,
          height: Dimensions.get("window").width / 3,
          backgroundColor: "#ccc",
          borderWidth: 1,
          borderColor: "#fff",
        }}
      >
        <Text>{order.name}</Text>
      </VStack>
    </Pressable>
  );
}

const TableCustomerOrder = ({ route }) => {
  const [appState, setAppState] = useAppContext();

  const navigation = useNavigation();
  // const routeData = useRoute();

  const TableCustomerOrderParams = route.params;

  console.log("TableCustomerOrderParams", TableCustomerOrderParams);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleNavigate = (data) => {
    navigation.navigate("TableFoodSearch", {
      data: data,
      navigatedFrom: "TableCustomerOrder",
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {}, [route.params]);

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
      <TableListHeader
        setAppState={setAppState}
        handleNavigate={handleNavigate}
      />
      <VStack flexDirection="row" flexWrap="wrap">
        {route?.params?.selectedItems?.map((order, orderIndex) => {
          return (
            <TableListItem
              handleNavigate={handleNavigate}
              orderIndex={orderIndex}
              order={order}
            />
          );
        })}
      </VStack>
    </ScrollView>
  );
};

export default TableCustomerOrder;
