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

export function ListFoodFullDbDetail({ route }) {
  const { data } = route.params;
  const [appState, setAppState] = useAppContext();
  const navigation = useNavigation();

  return (
    <VStack flex>
      <HStack p="4">
        <Button onPress={() => navigation.goBack()}>back</Button>
      </HStack>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        {Object.keys(data).map((key, keyIndex) => {
          return (
            <HStack>
              <Text>{key}</Text>
            </HStack>
          );
        })}
        <Text>{JSON.stringify(data, null, 2)}</Text>
      </ScrollView>
    </VStack>
  );
}

export default function ListFoodFullDb({}) {
  const navigation = useNavigation();
  const [appState, setAppState] = useAppContext();

  return (
    <VStack>
      <HStack py="4">
        {/* <Text>a</Text> */}
        <Spacer />
        <Button
          onPress={() =>
            navigation.navigate("AddMenuItem", {
              data: [],
            })
          }
          leftIcon={<Icon as={Ionicons} name="add" size="sm" />}
          size="sm"
        ></Button>
      </HStack>
      <ScrollView
        style={{
          backgroundColor: "#fff",
          paddingBottom: 300,
        }}
      >
        {Array.isArray(appState.menu) &&
          appState.menu.map((food, foodIndex) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("ListFoodFullDbDetail", {
                    data: food,
                  })
                }
                key={foodIndex}
              >
                <HStack
                  borderBottomWidth="1"
                  borderBottomColor="#ccc"
                  py="3"
                  px="2"
                >
                  <Text mr="4">{foodIndex}</Text>
                  <Text>
                    {food.name.length > 40
                      ? food.name.substring(0, 30) + "..."
                      : food.name}
                  </Text>
                  <Spacer />
                  <Button
                    variant="outline"
                    onPress={() => {}}
                    leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
                    size="sm"
                  ></Button>
                </HStack>
              </Pressable>
            );
          })}
      </ScrollView>
    </VStack>
  );
}
