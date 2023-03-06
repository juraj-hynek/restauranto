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


import ListSuppliers from "./list-supplier";
import MenuForm from "./menu-form";
import ListOrdersChef from "./list-order-chef";
import AccordionList from "./section-list";
import ListWithSearching from "./list-search";

const { width } = Dimensions.get("window");

export default function HomePageScrollTab({}) {
  const [tabIndex, setTabIndex] = useState(0);
  const scrolRef = useRef();
  const pageRef1 = useRef();
  const pageRef2 = useRef();
  const pageRef3 = useRef();
  const pageRef4 = useRef();
  const pageRef5 = useRef();

  const selectScreen = (pageRef) => {
    pageRef.current.measure((x, y, width, height, pageX, pageY) => {
      scrolRef.current.scrollTo({ x: x, y: 0, animated: true });
    });
  };

  const listRefs = [pageRef1, pageRef2, pageRef3, pageRef4, pageRef5];

  return (
    <View style={[styles.conatainer]}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrolRef}
      >
        <View style={[styles.page]} ref={pageRef1}>
          <ListSuppliers />
        </View>
        <View style={[styles.page]} ref={pageRef2}>
          {/* <MenuForm /> */}
        </View>
        <View style={[styles.page]} ref={pageRef3}>
          <ListOrdersChef />
        </View>
        <View style={[styles.page]} ref={pageRef4}>
          <AccordionList />
        </View>
        <View style={[styles.page]} ref={pageRef5} >
            <ListWithSearching />
        </View>
      </ScrollView>
      <HStack mb="15" justifyContent={"space-evenly"}>
        {["Suplier", "Menu", "Chef", "Waiter", "Search" ].map((item, index) => {
          return (
            <Button
              onPress={() => selectScreen(listRefs[index])}
              variant="ghost"
              flex={1}
              key={item}
            >
              {item}
            </Button>
          );
        })}
      </HStack>
    </View>
  );
}

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  page: {
    flex: 1,
    width: width,
    height: "100%",
    borderWidth: 1,
  },
});
