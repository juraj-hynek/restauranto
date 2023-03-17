import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Text, Spacer, HStack, Button } from "native-base";
import { useAppContext } from "./context";

const TableFoodSearch = ({ route, callback, selectedItems }) => {
  const [appState, setAppState] = useAppContext();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");


  // props
  // const { data, screen } = route?.params;

  const selectFoodItems = (item) => {
    const index = selectedItems.findIndex(
      (selected) => selected.id === item.id
    );
    if (index === -1) {
      callback([...selectedItems, item]);
      // setAppState({
      //   type: "ADD_ORDER",
      //   payload: {
      //     tableIndex: 0,
      //     customerIndex: 0,
      //     order: [...selectedItems, item],
      //   },
      // });
    } else {
      const newSelectedItems = [...selectedItems];
      newSelectedItems.splice(index, 1);
      callback(newSelectedItems);
      // setAppState({
      //   type: "ADD_ORDER",
      //   payload: {
      //     tableIndex: 0,
      //     customerIndex: 0,
      //     order: newSelectedItems,
      //   },
      // });
    }
  };

  const renderItem = ({ item, index }) => {
    const isSelected = selectedItems.some(
      (selected) => selected.id === item.id
    );

    return (
      <TouchableOpacity onPress={() => selectFoodItems(item)}>
        <View
          style={{
            padding: 16,
            backgroundColor: isSelected ? "lightblue" : "white",
            borderBottomWidth: 1,
            borderBottomColor: "lightblue",
          }}
        >
          <Text bold>{item.name}</Text>
          <Spacer />
          <Text>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = appState.menu.filter((item) => {
    if (!searchQuery) {
      return true;
    } else {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  // useEffect(() => {
  //   console.log("selectedItems", JSON.stringify(selectedItems, null, 2));
  // }, [selectedItems]);

  return (
    <View style={{ flex: 1, }}>
      <HStack></HStack>
      <TextInput
        style={{ padding: 16 }}
        placeholder="Search"
        onChangeText={(text) => handleSearch(text)}
        value={searchQuery}
      />
      {/* <Text>{JSON.stringify(menuItaliano, null, 2)}</Text> */}
      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        style={{
          flex: 1,
        }}
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedItems}
      />
    </View>
  );
};

export default TableFoodSearch;
