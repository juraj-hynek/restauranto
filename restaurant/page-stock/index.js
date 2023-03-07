import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  VStack,
  Input,
  Button,
  Text,
  View,
  Select,
  HStack,
  Spacer,
  Divider,
} from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";

// const uiDescriptionForm = [
//   {
//     page: "",
//     storageKey: "",
//     title: "General into",
//     subtitle: "",
//     state: {},
//     uiState: {},
//     fields: [
//       {
//         type: "textInput",
//         props: {
//           label: "sku",
//           placeholder: "",
//           data: [],
//           isDisabled: false,
//           style: {},
//         },
//       },
//       {
//         type: "textInput",
//         props: {
//           label: "description",
//           placeholder: "",
//           data: [],
//           isDisabled: false,
//         },
//       },
//     ],
//   },
//   {
//     title: "Quantities and Units",
//     titlesLayout: "space-between",
//     titleProps: {},
//     subTitleProps: {},
//     fieldStyles: {},
//     fields: [
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "Case(s) qty",
//           placeholder: "",
//           data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//           message: "",
//         },
//       },
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "Pack(s) qty",
//           placeholder: "",
//           data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         },
//       },
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "Item(s) qty",
//           placeholder: "",
//           data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         },
//       },
//       {
//         type: "textInput",
//         props: {
//           isDisabled: false,
//           label: "Item volume",
//           placeholder: "",
//           data: [1],
//         },
//       },
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "Select unit",
//           placeholder: "",
//           data: ["Kg", "gram(s)", "liter", "piece(s)", "slice(s)"],
//         },
//       },
//     ],
//   },
//   {
//     title: "Costs, Sales and Supplier",
//     fields: [
//       {
//         type: "SelectInput",
//         props: {
//           label: "Supplier",
//           data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
//         },
//       },
//       {
//         type: "textInput",
//         props: {
//           isDisabled: false,
//           label: "buy_price",
//           placeholder: "",
//           data: [],
//         },
//       },
//       {
//         type: "textInput",
//         props: {
//           isDisabled: false,
//           label: "sale_price",
//           placeholder: "",
//           data: [],
//         },
//       },
//     ],
//   },
//   {
//     title: "Suppliers and category",
//     fields: [
//       {
//         type: "textInput",
//         props: {
//           isDisabled: false,
//           label: "supplier_id",
//           placeholder: "",
//           data: [],
//         },
//       },
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "item_category",
//           placeholder: "",
//           data: ["Fruit", "Vegetable", "Fish", "Drink"],
//         },
//       },
//       {
//         type: "textInput",
//         props: {
//           isDisabled: false,
//           label: "min_order",
//           placeholder: "",
//           data: [],
//         },
//       },
//     ],
//   },
//   {
//     title: "Dates",
//     fields: [
//       {
//         visible: false,
//         type: "DateInput",
//         props: {
//           isDisabled: false,
//           label: "Expiration date",
//           placeholder: "",
//           data: [new Date()],
//         },
//       },
//       {
//         visible: false,
//         type: "DateInput",
//         props: {
//           isDisabled: false,
//           label: "Purchase date",
//           placeholder: "",
//           data: [new Date()],
//         },
//       },
//     ],
//   },
//   {
//     title: "Stocks and storages",
//     fields: [
//       {
//         type: "SelectInput",
//         props: {
//           isDisabled: false,
//           label: "stock_area",
//           placeholder: "",
//           data: ["stock A", "stock B", "stock C"],
//         },
//       },
//     ],
//   },
// ];

const Stepper = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepper}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{value}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "black",
  },
  value: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

const FormAddStockItem = () => {
  const [sku, setSku] = useState("");
  const [description, setDescription] = useState("");
  const [caseQty, setCaseQty] = useState(0);
  const [packQty, setPackQty] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState("Kg");

  const handleSubmit = () => {
    // Do something with the form data
    console.log("SKU:", sku);
    console.log("Description:", description);
    console.log("Case(s) qty:", caseQty);
    console.log("Pack(s) qty:", packQty);
    console.log("Item(s) qty:", itemQty);
    console.log("Selected unit:", selectedUnit);
  };

  return (
    <VStack>
      <HStack p="4">
        <Text>Add item to Stock</Text>
        <Spacer />
        <Text>=</Text>
      </HStack>
      <ScrollView
        style={{
          backgroundColor: "#fff",
        }}
      >
        <VStack p="4" flex>
          <HStack mb="4">
            <Text flex>SKU</Text>
            <Spacer />
            <Input flex placeholder="SKU" />
          </HStack>
          <HStack mb="4">
          <Text flex>Description</Text>
            <Spacer />
            <Input flex placeholder="Description" />
          </HStack>
          <Divider my="6" my="6" />
          <HStack mb="4">
            <Text>Case(s) qty</Text>
            <Spacer />
            <Input flex placeholder="Case(s) qty" />
          </HStack>
          <HStack mb="4">
            <Text>Pack(s) qty:</Text>
            <Spacer />
            <Input flex placeholder="Pack(s) qty:" />
          </HStack>

          <HStack mb="4">
            <Text>Item(s) qty:</Text>
            <Spacer />
            <Input flex placeholder="Item(s) qty:" />
          </HStack>
          <Divider my="6" my="6" my="6"/>
          <HStack mb="4">
            <Text>Selected unit:</Text>
            <Spacer />
            <Select w={"150"}>
              {["Kg", "gram(s)", "liter", "piece(s)", "slice(s)"].map(
                (value) => (
                  <Select.Item
                    label={value}
                    value={value}
                    key={value}
                  ></Select.Item>
                )
              )}
            </Select>
          </HStack>

          <HStack mb="4">
            <Text>Suppliers</Text>
            <Spacer />
            <Select w={"150"}>
              {[...Array(20)].map((value, index) => (
                <Select.Item
                  label={"Supplier id " + index}
                  value={"Supplier id " + index}
                  key={index}
                ></Select.Item>
              ))}
            </Select>
          </HStack>

          <HStack mb="4">
            <Text>Item category</Text>
            <Spacer />
            <Select w={"150"}>
              {["Fruit", "Vegetable", "Fish", "Drink"].map((value, index) => (
                <Select.Item
                  label={value}
                  value={value}
                  key={value}
                ></Select.Item>
              ))}
            </Select>
          </HStack>
          <Divider my="6"  />
          <HStack mb="4">
            <Text>Min order</Text>
            <Spacer />
            <Input flex placeholder="1" />
          </HStack>

          <HStack mb="4">
            <Text>Expiration date</Text>
            <Spacer />
            <Input flex placeholder="12/12/2022" />
          </HStack>

          <HStack mb="4">
            <Text>Purchase date</Text>
            <Spacer />
            <Input flex placeholder="12/12/2022" />
          </HStack>

          <HStack mb="4">
            <Text>Storage place</Text>
            <Spacer />
            <Select w={"150"}>
              {["Room 1", "Room 2", "Room 3"].map((value, index) => (
                <Select.Item
                  label={value}
                  value={value}
                  key={value}
                ></Select.Item>
              ))}
            </Select>
          </HStack>

          <Button mb="100"  block onPress={handleSubmit}>
            <Text>Submit</Text>
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default FormAddStockItem;
