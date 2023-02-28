import * as React from 'react';
import { View, Button, Image, ScrollView, KeyboardAvoidingView,Platform, Text } from 'react-native';

import { Card, CardConent, CardHeader, CardSubtitle, CardTitle } from '../build_card';
import { NavigationView, DatePicker, HStack, VStack, Picker, List, Form, Spacer, AsyncImage, Label, Stepper, GroupBox, TextInput, Divider } from "../build_elements";


export default  function PageDetailStockItem({ pageTitle = ""}) {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{
        flex: 1
    }}>
    <ScrollView style={{}}>
      <Card style={{
        borderWidth: 0,
        backgroundColor: '#fff',
        borderRadius: 0
      }}>
        <CardHeader>
   
          <Image
            source={{
              uri: "https://picsum.photos/id/1/200",
            }}
            style={{
              width: null,
              height: 280
            }}
            resizeMode="cover"
          />
          <CardTitle style={{
            fontSize: 22
          }}>Item Card</CardTitle>
          <CardSubtitle>All item information recorder</CardSubtitle>
        </CardHeader>
        <CardConent style={{

        }}>

          <List data={{ id: '123', name: 'Tuna', QTY: 123, stock: 'room1', temperatrue: '100Cel' }} >
            {({ label, value }) => {
              console.log(label, value)
              return <HStack>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 11
                  }}
                  source={{
                    uri: 'https://picsum.photos/id/1/200'
                  }} />
                <Text>{label}</Text>
                <Spacer />
                <Text>{value}</Text>
                <Button style={{
                
                }}  title='edit'/>
              </HStack>
            }}
          </List>
        </CardConent>
      </Card>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}