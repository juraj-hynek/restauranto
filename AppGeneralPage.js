import "react-native-gesture-handler";
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
  ScrollView,
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
} from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FormBuilder from "./ui/form.builder.ui";
import ListWithSearching from "./restaurant/list-search";
import uiDescriptionForm from "./ui/form.stockItem.data";
import ConfigSupplierForm from "./ui/config.supplier.data";
import RecepyCostsForm, { formState } from "./ui/config.reciepycost.data";
import { useNavigation } from "@react-navigation/native";

import ConfigOrderFormData from "./ui/config.orderform";

export function usePageAsyncStorage(storageKey) {
  const setItem = async (value = "") => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storageKey, jsonValue);
    } catch (e) {
      // saving error
    } finally {
    }
  };
  const getItem = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    } finally {
    }
  };

  useEffect(() => {}, []);

  return { setItem, getItem };
}

export default function PageGeneral({ route }) {
    const navigation = useNavigation();
  const { data, screen } = route.params;
  console.log("data", JSON.stringify(data, null, 2));
  const pageRef = useRef({});
  const navigate = useNavigation();

  const [value, setValue] = useState("");
  const handleNavigate = (data) => {
    navigation.push("Details", { data: data, screen: "orders" });
  };

  // const { setItem, getItem } = usePageAsyncStorage('@HomePage');

  // const writeToStorage = async (newValue) => {
  //     await setItem(newValue);
  //     setValue(newValue);
  // };
  // const readFromStorage = async () => {
  //     const item = await getItem();
  //     setValue(item);
  // };

  useEffect(() => {
    // readFromStorage();
    // console.log('formState', formState);
  }, []);

  useEffect(() => {
    // console.log('value', value);
  }, [value]);

  const listCustomers = data.customers.map((customer, customerIndex) => {
    return (
      <HStack onPress={() => {
        handleNavigate(customer)
      }} py="4" key={customerIndex}>
        <Text>{customer.name}</Text>
      </HStack>
    );
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        {listCustomers}
        {/* <Box>
                <FormBuilder initFormState={{}} dataToRender={ConfigOrderFormData} />
                <Box>
                    <Text>{value}</Text>
                </Box>
            </Box> */}
        {/* <ListWithSearching /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

// console.log(Math.random()
//     .toString(36)
//     .substr(2, 5))
