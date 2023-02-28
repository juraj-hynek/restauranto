import 'react-native-gesture-handler';
import React, { useEffect, useRef, useState, useReducer } from 'react';;
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  Pressable
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Divider, HamburgerIcon, CheckIcon, Select, Button, Menu, Square, AspectRatio, Center, Heading, NativeBaseProvider, Box, Stack, HStack, VStack, Spacer, Avatar, Text, IconButton, Icon } from "native-base";

import uiDescriptionForm from './form.stockItem.data';


function AppBar({ right }) {
  return <View>
    <StatusBar bg="" barStyle="light-content" />
    <Box safeAreaTop bg="" />
    <HStack bg="" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="grey" />} />
        <Text color="grey" fontSize="22" fontWeight="bold">
          Dashboard
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="grey" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="grey" />} />
        <IconButton icon={<Icon as={null} name="search" size="sm" color="grey" />} />
      </HStack>
    </HStack>
  </View>;
}






  // qty:
  // pack quantity : 1x6
  // packs per case : 6x1




  function FormBuilder({
    uiDescriptionForm = []
  }) {

    const [showDatePicker, setShowDatePicker] = useState(false)
    const [formState, setFormState] = useState({});
    const hsection = []


    const handleFormState = (inputName, inputValue) => {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [inputName]: inputValue
      }))
    };

    useEffect(() => {
      console.log(formState)
    }, [formState]);

    // const calc = uiDescriptionForm.map((formSection) => {
    //   return formSection.fields.reduce((accum, next) => {
    //     if (next.props.label.includes('QTY')) {
    //       return accum + "1x" + next.props.label

    //     } else {
    //       return accum
    //     }
    //   }, '')
    // }).join(" ");


    return <View style={{}}>
      {uiDescriptionForm.map((formSection, indexFormSection) => {
        return <Box key={indexFormSection}>
          <Box mb="4" mx="3">
            {formSection.title && <Text>{formSection.title}</Text>}
            {formSection.subtitle && <Text>{formSection.subtitle}</Text>}
          </Box>
          {/* <Text>{uiDescriptionForm.map((formSection) => {
          return formSection.fields.reduce((accum, next) => {
            if (next.props.label.includes('QTY')) {
              return accum + " "+  formState[next.props.label] + " " + next.props.label
            } else {
              return accum
            }
          }, '')
        }).join(" ")}</Text> */}
          {Array.isArray(formSection.fields) && formSection.fields.map((fieldItem, indexFieldItem) => {
            const { type, props } = fieldItem;
            const { label, placeholder, data, message } = props;

            if (type === "textInput") {
              return <>
                <Input InputLeftElement={null} key={label} mb="4" mx="3" onChangeText={(value) => handleFormState(label, value)} placeholder={label} />
                {message && <Text mb="4" mx="3">{message}</Text>}
              </>
            }
            else if (type === "SelectInput") {
              return <>
                <Select key={indexFieldItem} mb="4" mx="3"
                  selectedValue={formState[label]}
                  accessibilityLabel="Choose Category"
                  placeholder={label}
                  mt={1}
                  onValueChange={(value) => handleFormState(label, value)}
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />
                  }}
                >
                  {data.map((pickerItem) => {
                    return <Select.Item key={pickerItem} label={pickerItem} value={pickerItem} />
                  })}
                </Select>
                {message && <Text mb="4" mx="3">{message}</Text>}
              </>
            } else if (type === "DateInput") {
              return <Box w={''} mb="4" mx="3">
                <Text>{label}</Text>
                <DateTimePicker
                  label={label}
                  onChange={(date) => {
                    console.log("date", date)
                  }}
                  display=""
                  value={new Date()} mode="date" />
              </Box>
            }
          })}
        </Box>

      })}
      <HStack mb="4" mx="3" justifyContent={'space-between'}>
        <Button colorScheme="secondary" leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} size="sm">Cancel</Button>
        <Button leftIcon={<Icon as={Ionicons} name="cloud-upload-outline" size="sm" />} size="sm">Save</Button>
      </HStack>
    </View>
  }


export default function BuildFormStockItem() {

  return <FormBuilder uiDescriptionForm={uiDescriptionForm} />
}

