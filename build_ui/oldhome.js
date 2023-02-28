import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';;
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';


import BuildPage from './build_ui/build_page';
import BuildItemStockForm from "./build_ui/build_itemForm";
import { Grid, Row, Col } from "./build_ui/build_grid"
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TextInput } from 'react-native-gesture-handler';




const foodCategories = {
  "Fish": {
    "purchase unit cost": "",
    units: '',
    count: ''

  },
  "Meat": "",
  "Multi Portion": "",
  "Sweets and Desserts": "",
  "Fruits and veg": '',
  "hearbs and spices": "",
  "souces and dressungs": '',
  "dry food": "",
  "Bakery": "",
  "diary": ""


}

const columns = {
  "SKU": "",
  "Location": "Row 2, Slot 1",
  "Bar Code": "",
  Category: "",
  Item: 'Each, Box(10), Package (5)',
  Unit: '',
  "Unit type": "piece(s), bag(s), can, vacum, package(s)",
  "Unit Price": '',
  "Bar": "",
  Cooler: "",
  "Dry Storage": "",
  Total: "",
  "Total Value": "12E",
  Purchages: 'date',
  "Used by": "date",
  "Supplier": '',
  QTY: "",
  "Reorder QTY": "",
  Cost: "30 eur",
  "Inventory Value": "",
  "web link": "www.abc.com",
  "lead time in days": '',
  contact: {
    contactName: "",
    email: "",
    phone: ""
  }

}

function BuildCostFormHeader({ }) {

  return <Grid style={{
    padding: 11,
    backgroundColor: '#F3F4F6',
    marginBottom: 11
  }}>
    <Row>
      <Col size={1} style={{

      }}>
        <Col size={1}><Text>Menu Item</Text></Col>
        <Col size={1}><TextInput style={{

          width: '100%',

        }} /></Col>
      </Col>
      <Col size={1}>
        <Col size={1}><Text>Date</Text></Col>
        <Col size={1}><TextInput style={{

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
      Cost_per_unit: 0,
      base_amount: 100
    })

  }

  const calcCost = (recipieAmount, unitCost, baseAmount) => {
    return (recipieAmount * unitCost) / baseAmount;
  }

  useEffect(() => {
    const { Quantity, Cost_per_unit, base_amount } = form;
    console.log()
  }, [form]);

  const { Quantity, Cost_per_unit, base_amount } = form;
  return <Grid style={{
    backgroundColor: '#F3F4F6',
    padding: 11,
    marginBottom: 11
  }}>
    <Row>
      <Col size={1}>
        <Text>Ingredient</Text>
      </Col>
      <Col size={1}><TextInput
        onChangeText={(valu7) => addDataToFormState("Ingredient", valu7)}
        style={{

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

            width: '100%'
          }} /></Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>Base amount of ingredient (100g)</Text>
      </Col>
      <Col size={1}><TextInput
        keyboardType="numeric"
        onChangeText={(value) => addDataToFormState("base_amount", parseFloat(value))}
        style={{

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

          width: '100%'
        }} /></Col>
    </Row>
    <Row>
      <Col size={1}>
        <Text>Total Cost</Text>
      </Col>
      <Col size={1}>
        <Text>{calcCost(Quantity, Cost_per_unit, base_amount) || "0"}</Text>
      </Col>
    </Row>
    <Row style={{
      marginTop: 20
    }}>
      <TouchableOpacity onPress={handleCallback}>
        <Text style={{

          backgroundColor: 'red'
        }}>Save</Text>
      </TouchableOpacity>
    </Row>
  </Grid>
}

function FormBody({ table = [] }) {

  return <ScrollView>
    <Grid className="divide-y divide-gray-200 bg-white" style={{

    }}>
      <Row style={{

      }}>
        <Col style={{

        }} size={1}>
          <Text>Ingredient</Text>
        </Col>
        <Col style={{

        }} size={1}>
          <Text>Quantity</Text>
        </Col>
        <Col style={{

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



