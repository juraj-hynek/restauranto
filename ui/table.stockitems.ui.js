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

import Ionicons from '@expo/vector-icons/Ionicons';
import { Input, Divider, HamburgerIcon, CheckIcon, Select, Button, Menu, Square, AspectRatio, Center, Heading, NativeBaseProvider, Box, Stack, HStack, VStack, Spacer, Avatar, Text, IconButton, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import _uiDescriptionTable from "./table.stockitems.data";


export default function BuildTable({ uiDescriptionTable = [] }) {

  const columnsGroup = Array(uiDescriptionTable).length > 0 && _uiDescriptionTable.map((groupItem, gorupIndex) => {

    return <VStack minW="80" m={2} key={gorupIndex}>
      <Text bold>{groupItem.columnGroup}</Text>
      <HStack>
        {groupItem.fields.map((fieldItem, fieldIndex) => {
          return <VStack key={fieldIndex}>
            <Box p="4" pr={0} borderColor={'#ccc'} borderWidth={1}>
              <Text key={fieldIndex}>{fieldItem.label}</Text>
            </Box>

            {fieldItem.data.map((dataItem, dataIndex) => {
              console.log('dataItem')
              return <Box p="4" pr="0" bg={dataIndex % 2 === 0 ? "warmGray.50" : ''}>
                <Text key={dataIndex}>{dataItem}</Text>

              </Box>
            })}
          </VStack>
        })}

      </HStack>
      <Divider />
    </VStack>
  })

  return <View>
    <StatusBar bg="" barStyle="light-content" />
    <HStack bg="" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
      <HStack alignItems="center">
        <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="grey" />} />
        <Text color="grey" fontSize="22" fontWeight="bold">
          Stock Items
        </Text>
      </HStack>
      <HStack>
        <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="grey" />} />
        <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="grey" />} />
        <IconButton icon={<Icon as={null} name="search" size="sm" color="grey" />} />
      </HStack>
    </HStack>
    <ScrollView horizontal style={{
    }}>
      <ScrollView>
        <HStack>
          {columnsGroup}
        </HStack>
      </ScrollView>
    </ScrollView>
  </View>;

}
