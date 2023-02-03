import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';;
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity
} from 'react-native';

import styled, { ThemeProvider } from 'styled-components/native';
import theme from 'styled-theming'

import { Provider as PaperProvider, Appbar } from 'react-native-paper';

import BuildPage from './build_ui/build_page';
import BuildItemStockForm from "./build_ui/build_itemForm";
import { Grid, Row, Col } from "./build_ui/build_grid"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


function BuildCostFormHeader({ }) {

  return <Grid style={{
    padding: 11,
    backgroundColor: '#F3F4F6'
  }}>
    <Row>
      <Col size={1}>
        <Col size={1}><Text>Menu Item</Text></Col>
        <Col size={1}><TextInput style={{
          borderWidth: 1,
          width: '100%',

        }} /></Col>
      </Col>
      <Col size={1}>
        <Col size={1}><Text>Date</Text></Col>
        <Col size={1}><TextInput style={{
          borderWidth: 1,
          width: '100%'
        }} /></Col>
      </Col>
    </Row>
  </Grid>
}

function BuildCostFormBody({ callback = (data) => null }) {

  const [form, setForm] = useState({
    Ingredient: '',
    Quantity: 0,
    Cost_per_unit: 0
  });

  const addDataToFormState = (inputName, inputValue) => {
    setForm((prevState) => ({
      ...prevState,
      [inputName]: inputValue
    }))
  }


  const handleCallback = () => {
    callback(form);
    setForm({
      Ingredient: '',
      Quantity: 0,
      Cost_per_unit: 0
    })

  }

  return <Grid style={{
    borderWidth: 1,
    padding: 11
  }}>
    <Row>
      <Col size={1}>
        <Text>Ingredient</Text>
      </Col>
      <Col size={1}><TextInput
        onChangeText={(valu7) => addDataToFormState("Ingredient", valu7)}
        style={{
          borderWidth: 1,
          width: '100%'
        }} /></Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>Quantity</Text>
      </Col>
      <Col size={1}>
        <TextInput
          keyboardType="numeric"
          onChangeText={(value) => addDataToFormState("Quantity", parseFloat(value))}
          style={{
            borderWidth: 1,
            width: '100%'
          }} /></Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>Cost per Unit (100g)</Text>
      </Col>
      <Col size={1}><TextInput
        keyboardType="numeric"
        onChangeText={(value) => addDataToFormState("Cost_per_unit", parseFloat(value))}
        style={{
          borderWidth: 1,
          width: '100%'
        }} /></Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>Total Cost</Text>
      </Col>
      <Col size={1}>
        <Text>{form.Quantity * form.Cost_per_unit || "0"}</Text>
      </Col>
    </Row>
    <Row style={{
      marginTop: 20
    }}>
      <TouchableOpacity onPress={handleCallback}>
        <Text style={{
          borderWidth: 1,
          backgroundColor: 'red'
        }}>Save</Text>
      </TouchableOpacity>
    </Row>
  </Grid>
}

function FormBody({ table = [] }) {

  return <ScrollView>
    <Grid style={{
    
  }}>
    <Row style={{
      borderWidth: 1
    }}>
    <Col style={{
      borderWidth: 1
    }} size={1}>
        <Text>Ingredient</Text>
      </Col>
      <Col style={{
      borderWidth: 1
    }} size={1}>
        <Text>Quantity</Text>
      </Col>
      <Col style={{
      borderWidth: 1
    }} size={1}>
        <Text>Cost per unit</Text>
      </Col>
    </Row>
    {
      table.map((item, index) => {
        return <Row key={index}>
          <Col style={{
      borderWidth: 1
    }} size={1}>
            <Text>{item.Ingredient}</Text>
          </Col>
          <Col style={{
      borderWidth: 1
    }} size={1}>
            <Text>{item.Quantity}</Text>
          </Col>
          <Col style={{
      borderWidth: 1
    }} size={1}>
            <Text>{item.Cost_per_unit}</Text>
          </Col>
        </Row>
      })
    }
  </Grid>
  </ScrollView>
}

// columns
// SKU
// Description
// Pack Size
// QTY
// QTY Expanded
// Cost Pack
// Total Cost 
// Cost per piece

const data = [{
  title: 'Inventory System',
  subtitle: '',
  data: [
    {
      SKU: '',
      DESCRIPTION: 'Coca-Cola',
      PACK_SIZE: '24',
      QTY: "",
      QTY_Expanded: '',
      COST_PACK: '',
      TOTAL_COST: '',
      COST_PER_PIECE: ''
    },
    {
      SKU: '',
      DESCRIPTION: '',
      PACK_SIZE: '',
      QTY: "",
      QTY_Expanded: '',
      COST_PACK: '',
      TOTAL_COST: '',
      COST_PER_PIECE: ''
    },
    {
      SKU: '',
      DESCRIPTION: '',
      PACK_SIZE: '',
      QTY: "",
      QTY_Expanded: '',
      COST_PACK: '',
      TOTAL_COST: '',
      COST_PER_PIECE: ''
    }
  ]
}];




export default function App() {
  const [table, setTable] = useState([]);

  const addItemToTable = (data) => {
    setTable(table.concat(data))
  }
  return (
    <PaperProvider>
      <SafeAreaView style={{
        flex: 1
      }}>
        <BuildCostFormHeader />
        <BuildCostFormBody callback={addItemToTable} />
        <FormBody table={table} />
      </SafeAreaView>
    </PaperProvider>
  );
}
