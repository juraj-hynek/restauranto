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
// import Realm from "realm";
// import * as Realm from 'expo-realm';

// const InventorySchema = {
//   name: "Invenoty",
//   properties: {
//     id: "string",
//     sku: "string",
//     description: "string",
//     inventory_type: "string",
//     item_status: "string",
//     case_qty: "int",
//     pack_qty_per_case: "int",
//     inner_pack_qrt: "int",
//     unit_of_qty: "string",
//     storage_name: "string",
//   },
// };

function Header() {
  return (
    <HStack>
      <Text>left</Text>
      <Spacer></Spacer>
      <Text>Right</Text>
    </HStack>
  );
}

function MainContent({ content, header }) {
  return (
    <>
      {header}
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        {content}
      </ScrollView>
    </>
  );
}

function InventoryListHistory() {
  return <FlatList data={[]} renderItem={() => null} />;
}

function InventoryForm() {
  const [showModal, setShowModal] = useState();
  return (
    <Modal
      animationType="slide"
      visible={showModal}
      onRequestClose={() => setShowModal(!showModal)}
    >
      <FormControl>
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
    </Modal>
  );
}

function useRealmDb({ Invenoty }, InventorySchema) {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Realm.open({ schema: [InventorySchema] })
    //   .then((dbRealm) => {
    //     setList(dbRealm.objects(Invenoty));
    //   })
    //   .catch((error) => {
    //     console.log("dbrealm error", error);
    //   });
  }, []);

  return [list, setList];
}

export default function Invenoty() {
  const [inventoryList, setInventoryList] = useRealmDb({
    InventorySchema: InventorySchema,
    Invenoty: "Invenoty",
  });

  return (
    <VStack flex>
      <MainContent
        header={<Header left="" middle="" right="" callback={() => null} />}
        content={
          <VStack>
            <Text>ao</Text>
          </VStack>
        }
      />
    </VStack>
  );
}
