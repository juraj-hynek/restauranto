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
  Modal,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

// const foodStock = [
//   {
//     name: "apple",
//     quantity: 10,
//     price: 0.5,
//     status: "ok",
//     storage: "Storage 1",
//   },
//   { name: "banana", quantity: 20, price: 0.25, status: "more than expected" },
//   { name: "carrot", quantity: 15, price: 0.3, status: "ok" },
//   { name: "bread", quantity: 5, price: 2.5, status: "damaged" },
//   { name: "cheese", quantity: 8, price: 3.0, status: "less than expected" },
//   { name: "chicken", quantity: 12, price: 5.0, status: "ok" },
//   { name: "lettuce", quantity: 7, price: 1.5, status: "ok" },
//   { name: "milk", quantity: 3, price: 2.0, status: "ok" },
//   { name: "orange", quantity: 18, price: 0.6, status: "ok" },
//   { name: "potato", quantity: 25, price: 0.2, status: "ok" },
//   { name: "salmon", quantity: 4, price: 12.0, status: "less than expected" },
// ].map((item) => {
//   return {
//     ...item,
//     subsection: {
//       animation: new Animated.Value(0),
//     },
//   };
// });

//    animation: new Animated.Value(0),
export function PageStorageWithItems({ route }) {
  const { data } = route.params;
  const [listStock, setListStock] = useState([]);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const itemToView = Object.keys(data?.items).map((key, keyIndex) => {
    return (
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
      <Center>
        <Modal
          justifyContent="flex-start"
          mt="4"
          safeAreaTop={true}
          avoidKeyboard={true}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <Modal.Content maxWidth="350px">
            <Modal.CloseButton />
            <Modal.Header>Item inventory</Modal.Header>
            <Modal.Body>
              <FormControl>
                {/* <FormControl.Label>Name</FormControl.Label> */}
                <VStack>
                  <Text>Inventory type</Text>
                  <Select defaultValue="" flex={2}>
                    {["Untouched", "Touched"].map((value, index) => (
                      <Select.Item
                        label={value}
                        value={value}
                        key={index}
                      ></Select.Item>
                    ))}
                  </Select>
                </VStack>
                <VStack>
                  <Text>Status</Text>
                  <Select defaultValue="" flex={2}>
                    {[
                      "Missing",
                      "Missplaced",
                      "Damaged",
                      "More",
                      "Less",
                      "Expired",
                      "Unknown",
                    ].map((value, index) => (
                      <Select.Item
                        label={value}
                        value={value}
                        key={index}
                      ></Select.Item>
                    ))}
                  </Select>
                </VStack>
                <VStack mb="4">
                  <Text>Case(s) qty</Text>
                  <Input
                    defaultValue="1"
                    returnKeyType="done"
                    keyboardType="numeric"
                    flex
                    placeholder=""
                  />
                </VStack>
                <VStack mb="4">
                  <Text>Pack(s) qty per Case:</Text>
                  <Input
                    defaultValue="1"
                    returnKeyType="done"
                    keyboardType="numeric"
                    flex
                    placeholder=""
                  />
                </VStack>
                <VStack mb="4">
                  <Text>Inner pack qty</Text>
                  <Input
                    defaultValue="1"
                    returnKeyType="done"
                    keyboardType="numeric"
                    flex
                    placeholder=""
                  />
                </VStack>
                <VStack>
                  <Text>Unit QTY</Text>
                  <Input
                    returnKeyType="done"
                    keyboardType="numeric"
                    flex
                    placeholder=""
                    mb="2"
                  />
                  <Text>Select item Unit</Text>
                  <Select defaultValue="" flex={2}>
                    {[
                      "kg",
                      "gram",
                      "ml",
                      "liter",
                      "EA(Each)",
                      "Piece(s)",
                      "Slice(s)",
                      "Cap(s)",
                      "Spoon",
                    ].map((value, index) => (
                      <Select.Item
                        label={value}
                        value={value}
                        key={index}
                      ></Select.Item>
                    ))}
                  </Select>
                </VStack>
              </FormControl>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
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

export default function PageSelectStorage({}) {
  const navigation = useNavigation();
  const [stockData, setStockData] = useState(() => stocks);

  const deleteStockItem = ({}) => {};
  const editStockItem = () => {};
  const addStorage = () => {};

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
          m="1"
          // alignItems="center"
          // justifyContent="center"
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
    <VStack flex>
      <HStack>
        <Text>a</Text>
        <Spacer />
        <Button onPress={() => console.log("")}>+</Button>
      </HStack>
      <ScrollView
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
        contentContainerStyle={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {listToView}
      </ScrollView>
    </VStack>
  );
}
