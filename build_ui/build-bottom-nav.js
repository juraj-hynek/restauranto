import * as React from 'react';
import { View, Button, Image, ScrollView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

//
import BuildSectionList from './build-section-lists';
import PageDetailStockItem from "./build_pages/detail-stock-item";
import PageDetailSupplier from "./build_pages/detail-supplier";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function HomeScreenDrawer({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreenDrawer({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BuildSectionList navigation={navigation} />
    </View>
  );
}

function HomeScreen() {
  return (
    <Stack.Navigator
      options={{
        headerShown: false,
      }}

    >
      <Stack.Screen name="MainPage" component={MainPage} />
      <Stack.Screen name="Details" component={PageDetailStockItem} />
    </Stack.Navigator>
  );
}

function StockScreen() {
  return (
    <View style={{ flex: 1,  }}>
      <PageDetailSupplier />
    </View>
  );
}
function InventoryScreen() {
  return (
    <View style={{ flex: 1,  }}>
      <Text>InventoryScreen!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function BuildBottomNav() {
  return (

    <Tab.Navigator>
      <Tab.Screen options={{
        headerShown: false,
      }} name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Supplier details" component={PageDetailSupplier} />
      <Tab.Screen name="InventoryScreen" component={InventoryScreen} />
    </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={{
          headerShown: false,
        }} name="Home" component={BuildBottomNav} />
        <Drawer.Screen name="Notifications" component={NotificationsScreenDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


// // 3. Bolo v súlade so smernicou rady 93/42/ehs zaradiť dlhodobý implantabilny zdravotnícky prostriedok do rizikovej skupiny IIb, ktory sa skutocne (realne) ciastocne alebo uplne vstrebe do tela pacienta  a zaroven jeho ciastocna alebo uplna absorbovatelnost neplní účel teda, ze sa nepodiela na fungovani daneho dlhodobe implantabilneho zdravotníckeho prostrietku?
// // 3.1 Existuje vobec taky implantat, ktory sa vbstrebe a nesplni svojou aspon ciastocnou vstrebavatelnsotou svoj ucel ?
