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
  TextInput,
  Animated,
  FlatList,
  Modal,
  Alert,
  ScrollView,
  SectionList,
  Text,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { faker } from "@faker-js/faker";
import { Button, HStack, Spacer, VStack, Icon } from "native-base";
const suppliers = [];

for (let i = 1; i <= 50; i++) {
  const supplier = {
    id: i,
    taxId: faker.datatype.number({ min: 100000000, max: 999999999 }),
    name: faker.company.companyName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    street: faker.address.streetName(),
    town: faker.address.city(),
    country: faker.address.country(),
    postCode: faker.address.zipCode(),
    // contactPerson: {
    //   firstName: faker.name.firstName(),
    //   lastName: faker.name.lastName(),
    //   email: faker.internet.email(),
    //   phone: faker.phone.phoneNumber(),
    // },
  };
  suppliers.push(supplier);
}

const RenderItemFunc = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  return (
    <VStack>
      <HStack
        justifyContent={"space-between"}
        alignItems="center"
        borderWidth={1}
        p="0"
        borderColor="#ccc"
        mb="4"
      >
        <Button
          onPress={() => {
            setListOpen(false);
            setOpen(!open);
          }}
          mr="2"
          variant="outline"
          leftIcon={<Icon as={Ionicons} name="menu" size="sm" />}
        />
        <Text style={{}}>{item.name}</Text>
        <Spacer></Spacer>
        <Button
          onPress={() => {
            setOpen(false);
            setListOpen(!listOpen);
          }}
          variant="outline"
          leftIcon={<Icon as={Ionicons} name="list" size="sm" />}
        />
      </HStack>

      {listOpen ? (
        <VStack ml="8" p="2" mb="4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <HStack
                borderColor={"#ccc"}
                borderWidth={1}
                justifyContent={"space-between"}
              >
                <Text key={index}>Stock item #{item} </Text>
                <Spacer />
                <Button
                  onPress={() => {}}
                  variant="outline"
                  leftIcon={<Icon as={Ionicons} name="trash" size="sm" />}
                />
              </HStack>
            );
          })}
        </VStack>
      ) : null}

      {open ? (
        <View>
          {Object.keys(item).map((key) => {
            return (
              <HStack ml="8" p="2" mb="4">
                <Text
                  style={{
                    width: 100,
                  }}
                >
                  {key}
                </Text>

                {/* <Text>{item[key]}</Text> */}
                <TextInput
                  style={{
                    flex: 1,
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 4,
                    borderRadius: 4,
                  }}
                  defaultValue={item[key]}
                />
              </HStack>
            );
          })}
        </View>
      ) : null}
      <HStack></HStack>
    </VStack>
  );
};

export default function ListSuppliers() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <RenderItemFunc item={item} />}
        data={suppliers}
      />
      {/* <Text>{JSON.stringify(suppliers, null, 2)}</Text> */}
    </View>
  );
}
