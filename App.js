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
import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import PageGeneral from "./AppGeneralPage";
// import BuildSearchDropDown from './build_ui/build_search_dropdown';
// import SectionListWithFixedHeader from "./restaurant/section-list";

// import BuildOrderForm from "./ui/ui.orderform";
// import { ScrollView } from "react-native-gesture-handler";

// // import { VStack, HStack,  Spacer, Form, ForEach, Section, } from "./ui-ios-style/index"
// import AccordionList from "./restaurant";
import MenuForm from "./restaurant/menu-form";
import ListOrdersChef from "./restaurant/list-order-chef";
import ListSuppliers from "./restaurant/list-supplier";
import FormStock from "./management-stock/data.stock";

// import HomePageScrollTab from "./restaurant/home.page.tabs";

// pages
import TablesPage from "./restaurant/pages-food-order/page-tables";
import TableCustomers from "./restaurant/pages-food-order/page-customers";
import TableCustomerOrder from "./restaurant/pages-food-order/page-orders";
import TableFoodSearch from "./restaurant/pages-food-order/page-food-search";

//
import ListWithSearching from "./restaurant/list-search";

const Drawer = createDrawerNavigator();
const StackNavigation = createStackNavigator();

// CTX
import AppContext from "./restaurant/pages-food-order/context";

function BuildMainStack() {
  return (
    <StackNavigation.Navigator
      options={{
        headerShown: false,
      }}
    >
      <StackNavigation.Screen name="Tables" component={TablesPage} />
      <StackNavigation.Screen
        name="TableCustomers"
        component={TableCustomers}
      />
      <StackNavigation.Screen
        name="TableCustomerOrder"
        component={TableCustomerOrder}
      />
      <StackNavigation.Screen
        name="TableFoodSearch"
        component={TableFoodSearch}
      />
    </StackNavigation.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BuildBottomNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomePage") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "AddMenuItem") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "ListSuppliers") {
            iconName = focused ? "ios-business" : "ios-business-outline";
          } else if (route.name === "ChefPage") {
            iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
          } else if (route.name === "ListWithSearching") {
            iconName = focused ? "search" : "search-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="HomePage"
        component={BuildMainStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="AddMenuItem"
        component={MenuForm}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="ChefPage"
        component={ListOrdersChef}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="ListSuppliers"
        component={ListSuppliers}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="ListWithSearching"
        component={ListWithSearching}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex:1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <AppContext>
        <NativeBaseProvider>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen
                options={{
                  headerShown: false,
                }}
                name="Home"
                component={BuildBottomNav}
              />
            </Drawer.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </AppContext>
    </SafeAreaView>
  );
}
