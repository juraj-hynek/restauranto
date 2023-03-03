import "react-native-gesture-handler";
import React, {
  useEffect,
  useRef,
  useState,
  useReducer,
  useLayoutEffect,
} from "react";
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
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Input, Divider, HamburgerIcon, CheckIcon, Select, Button, Menu, Square, AspectRatio, Center, Heading, NativeBaseProvider, Box, Stack, HStack, VStack, Spacer, Avatar, Text, IconButton, Icon } from "native-base";

import BuildSearchDropDown from './build_ui/build_search_dropdown';
import PageGeneral from './AppGeneralPage';
// import BuildSearchDropDown from './build_ui/build_search_dropdown';
import SectionListWithFixedHeader from './restaurant/section-list';

import BuildOrderForm from './ui/ui.orderform';
import { ScrollView } from 'react-native-gesture-handler';
import { Headline, Body, Title1, Title2, Title3, Footnote, Callout, Caption2, Caption1 } from "./ui-ios-style/texts";
// import { VStack, HStack,  Spacer, Form, ForEach, Section, } from "./ui-ios-style/index"
import AccordionList from './restaurant';
import MenuForm from "./restaurant/menu-form";
import ListOrdersChef from "./restaurant/list-order-chef";

const Drawer = createDrawerNavigator();
const StackNavigation = createStackNavigator();

function BuildMainStack() {
  return (
    <StackNavigation.Navigator
      options={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen name="MainPage" component={ListOrdersChef} />
      {/* <StackNavigation.Screen name="MainPage" rende component={(props) => <PageGeneral pageName="MainPage" {...props} />} /> */}
      <StackNavigation.Screen
        name="Details" component={PageGeneral} />
    </StackNavigation.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BuildBottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        headerShown: false,
      }} name="HomePage" component={BuildMainStack} />
      <Tab.Screen name="StockTable" component={PageGeneral} />
      {/* <Tab.Screen name="StockForm" component={PageGeneral} />
      <Tab.Screen name="InventoryForm" component={PageGeneral} />
      <Tab.Screen name="InventoryTable" component={PageGeneral} />
      <Tab.Screen name="SupplierForm" component={PageGeneral} />
      <Tab.Screen name="SupplierTable" component={PageGeneral} /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  return <NativeBaseProvider>
    <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen options={{
              headerShown: false,
            }} name="Home" component={BuildBottomNav} />
            <Drawer.Screen name="Detail" component={PageGeneral} />
          </Drawer.Navigator>
        </NavigationContainer> 
  </NativeBaseProvider>
  }


// export default function App() {

//   const [value, setValue] = React.useState("");
//   const [list, setList] = React.useState([1]);

//   const handlesetList = () => {
//     setList((prev) => ([...prev, ""]))
//   }

//   useEffect(() => {
//     handlesetList()
//   }, [value]);

//   return <View style={{
//     flex: 1,
//     marginTop: 40
//   }}>
//     {list.map((item, index) => {
//       return <TextInput key={index}
//         // value={value} causing loosing focus on enter field
//         defaultValue={value}
//         placeholder='Juraj'
//         onChangeText={(textVal) => setValue(textVal)}
//         style={{
//           padding: 16,
//           borderWidth: 1
//         }} />
//     })}
//   </View>

//   // return <BuildSearchDropDown ></BuildSearchDropDown>
// }
