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
import { useAppContext } from "../pages-food-order/context";
import TableFoodSearch from "../pages-food-order/page-food-search";

export default function PageCustomerSearchOrder(props) {
  const [obCustomer, setCustomer] = useState({});
  const [listCustomers, setCustomers] = useState([
    {
      id: 1,
      name: "C1",
      order: [],
      pay: 0,
    },
    {
      id: 2,
      name: "C2",
      order: [],
      pay: 0,
    },
    {
      id: 3,
      name: "C3",
      order: [],
      pay: 0,
    },
    {
      id: 4,
      name: "C3",
      order: [],
      pay: 0,
    },
  ]);
  const [selectedC, setSelectedC] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [toggleOrderList, setToggleOrderList] = useState(false);
  //   const { data  = []} = route.params;
  const [appState, setAppState] = useAppContext();
  const navigation = useNavigation();

  return (
    <VStack flex>
      <HStack p="4">
        <Text onPress={() => setSelectedC((prev) => --prev)}>Prev</Text>
        <Spacer />
        <Text>{selectedC}</Text>
        <Text onPress={() => setSelectedC((prev) => ++prev)}>Next</Text>
      </HStack>
      <View
        style={{
          flex: 1,
        }}
        horizontal
        pagingEnabled={true}
      >
        {[listCustomers[selectedC]].map((cust, index) => {
          return (
            <HStack
              flex
              style={{
                width: Dimensions.get("window").width,
              }}
              key={index}
              borderBottomWidth={1}
              borderBottomColor="#ccc"
            >
              <VStack flex={4} borderWidth={1}>
                <HStack>
                  <Text>{cust.name}</Text>
                </HStack>
                {toggleOrderList ? (
                  <TableFoodSearch
                    selectedItems={selectedItems}
                    callback={(data) => {
                      setSelectedItems(data);
                    }}
                  />
                ) : (
                  <ScrollView
                    style={{
                      flex: 1,
                    }}
                  >
                    {selectedItems.map((item, key) => (
                      <VStack
                        key={key}
                        p="2"
                        borderBottomWidth={1}
                        borderBottomColor="#ccc"
                      >
                        <Text>{item.name}</Text>
                        <Divider my="4" />
                        <HStack>
                          <Text>${item.price}</Text>
                          <Spacer />
                          <Text> qty: {item.qty}</Text>
                        </HStack>
                      </VStack>
                    ))}
                  </ScrollView>
                )}
              </VStack>
              <VStack>
                <Button
                  variant="outline"
                  onPress={() => setToggleOrderList(!toggleOrderList)}
                  flex
                >
                  Add
                </Button>
                <Button variant="outline" flex>
                  +
                </Button>
                <Button variant="outline" flex>
                  -
                </Button>
                <Button variant="outline" flex>
                  Cancel
                </Button>
                <Button variant="outline" flex>
                  Process
                </Button>
                <Button variant="outline" flex>
                  Pay
                </Button>
              </VStack>
            </HStack>
          );
        })}
      </View>
    </VStack>
  );
}
