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
import QRCode from 'react-native-qrcode-svg';


// import MenuForm from "./src/restaurant/menu-form";
// import ListOrdersChef from "./src/restaurant/list-order-chef";
// import ListSuppliers from "./src/restaurant/list-supplier";
// import FormAddStockItem from "./src/restaurant/page-stock";

// // import HomePageScrollTab from "./restaurant/home.page.tabs";

// // pages
// import TablesPage from "./src/restaurant/pages-food-order/page-tables";
// import TableCustomers from "./src/restaurant/pages-food-order/page-customers";
// import TableCustomerOrder from "./src/restaurant/pages-food-order/page-orders";
// import TableFoodSearch from "./src/restaurant/pages-food-order/page-food-search";
// import PageCustomerSearchOrder from "./src/restaurant/page-customer-search-order";

// //
// import ListWithSearching from "./src/restaurant/list-search";
// import ListFoodFullDb, {ListFoodFullDbDetail} from "./src/restaurant/page-food-list";
import AppContext from "./src/restaurant/pages-food-order/context";

const Drawer = createDrawerNavigator();
const StackNavigation = createStackNavigator();

// CTX


import Invenoty from "./app/inventory";



const MyQRCode = () => {
  const myObjectString = JSON.stringify(myObject);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <QRCode value={myObjectString} />
    </View>
  );
};

function BuildMainStack() {
  return (
    <StackNavigation.Navigator
      options={{
        headerShown: false,
        
      }}
    >
      {/* <StackNavigation.Screen name="PageCustomerSearchOrder" component={PageSelectStorage} /> */}
      <StackNavigation.Screen name="PageStorageWithItems" component={Invenoty} />
      <StackNavigation.Screen
        name="TableCustomers"
        component={TableCustomers}
      />
      {/* <StackNavigation.Screen
        name="TableCustomerOrder"
        component={TableCustomerOrder}
      />
      <StackNavigation.Screen
        name="TableFoodSearch"
        component={TableFoodSearch}
      />
       <StackNavigation.Screen
         options={{
          headerShown: false,
          
        }}
        name="ListFoodFullDbDetail"
        component={ListFoodFullDbDetail}
      />
         <StackNavigation.Screen
        name="AddMenuItem"
        component={MenuForm}
      /> */}
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
          } else if (route.name === "ListFood") {
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
      {/* <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="ListFood"
        component={ListFoodFullDb}
      />
      <Tab.Screen
        options={{
          headerShown: true,
        }}
        name="ChefPage"
        component={ListOrdersChef}
      />
      <Tab.Screen
        options={{
          headerShown: true,
        }}
        name="ListSuppliers"
        component={ListSuppliers}
      />
      <Tab.Screen
        options={{
          headerShown: true,
        }}
        name="ListWithSearching"
        component={ListWithSearching}
      /> */}
    </Tab.Navigator>
  );
}

export default function App() {

  useEffect(()=>{},[])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "#fff",
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
