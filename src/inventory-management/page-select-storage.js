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
  Alert,
  ScrollView,
  SectionList,
  Modal,
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
  FormControl,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import BarCodeScanner from "../utils/barcode-reader";

const windowWidth = Dimensions.get("window").width;

export function PageStorageWithItems({ route }) {
  const { data } = route.params;
  const [listStock, setListStock] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const itemToView = Object.keys(data?.items).map((key, keyIndex) => {
    return (
      <VStack flex>
        <TouchableOpacity key={keyIndex} onPress={() => setShowModal(true)}>
          <VStack p="4" borderBottomColor="#ccc" borderBottomWidth={1}>
            <HStack mb="4">
              <Text bold>{key}</Text>
              <Spacer />
            </HStack>
            <HStack py="4" px="2" borderColor="#ccc">
              <Text>Last order qty 20kg</Text>
              <Spacer />
              <Text>Exp. 12/12/2025</Text>
            </HStack>
          </VStack>
        </TouchableOpacity>
      </VStack>
    );
  });

  return (
    <VStack backgroundColor="#fff" flex>
      <HStack p="2" borderBottomWidth="1" borderBottomColor="#ccc">
        <Text>{new Date().toLocaleDateString()}</Text>
        <Spacer />
        <Button variant="outline">Finish Inventory</Button>
      </HStack>
      <ScrollView
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
        contentContainerStyle={{
          flex: 1,
        }}
      >
        {itemToView}
      </ScrollView>
    </VStack>
  );
}

const stocks = {
  "Storage 1": {
    items_count: 10,
    last_inventory_date: new Date().toDateString(),
    items: {
      banana: {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
      apple: {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
      "coca-cola-0.33": {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
      "coca-cola-0.75": {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
      Pomodoro: {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
      "Chocolate cake": {
        quantity: 20,
        price: 0.25,
        status: "more than expected",
      },
    },
  },
  "Storage 2": {
    items_count: 10,
    last_inventory_date: new Date().toDateString(),
    items: {},
  },
  "Storage 3": {
    items_count: 10,
    last_inventory_date: new Date().toDateString(),
    items: {},
  },
  "Storage 4": {
    items_count: 10,
    last_inventory_date: new Date().toDateString(),
    items: {},
  },
  "Storage 5": {
    items_count: 10,
    last_inventory_date: new Date().toDateString(),
    items: {},
  },
};



const PageHeader = ({ setOpenBarCode, openBarCode }) => {
  return (
    <HStack>
      <Button variant="outline" onPress={() => setOpenBarCode(!openBarCode)}>
        Scan Bar code
      </Button>
      <Spacer />
      <Button onPress={() => console.log("")}>+</Button>
    </HStack>
  );
};

export default function PageSelectStorage({}) {
  const navigation = useNavigation();
  const [stockData, setStockData] = useState(() => stocks);
  const [openBarCode, setOpenBarCode] = useState(false);

  const listToView = Object.keys(stockData).map((key, itemIndex) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("PageStorageWithItems", {
            data: stocks[key],
          })
        }
      >
        <VStack
          key={itemIndex}
          style={{
            width: windowWidth / 3 - 8,
            height: windowWidth / 3 - 1,
          }}
          p="2"
          borderWidth={1}
          borderColor="#ccc"
          m="1"
        >
          <Text>{key}</Text>
          <Spacer />
          <VStack>
            <Text>12</Text>
            <Text>13/02/2023</Text>
          </VStack>
        </VStack>
      </TouchableOpacity>
    );
  });

  return (
    <>
      <VStack backgroundColor="#fff" flex>
        <PageHeader />
        {openBarCode ? (
          <BarCodeScanner
            openBarCode={openBarCode}
            setOpenBarCode={setOpenBarCode}
          />
        ) : (
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {listToView}
          </ScrollView>
        )}
      </VStack>
      {/* <ModalWithInventoryForm showModal={showModal} setShowModal={setShowModal} /> */}
    </>
  );
}
