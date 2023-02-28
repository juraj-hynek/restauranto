import React, { useEffect, useState } from 'react';

import { Text, View, Button, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Card, CardConent, CardHeader, CardSubtitle, CardTitle } from '../build_card';
import { NavigationView, DatePicker, HStack, VStack, Picker, List, Form, Spacer, AsyncImage, Label, Stepper, GroupBox, TextInput, Divider } from "../build_elements";
import { Col, Grid, Row } from '../build_grid';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PageDetailSupplier({ pageTitle = "" }) {

  const [inputsDisabled, setInputDisabled] = useState(true)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={{
       backgroundColor: '#d3137'
      }}>
        <Card style={{
          borderWidth: 0,
          backgroundColor: '#fff',
          borderRadius: 0,
          flex: 1
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
            }}>Cool Pesca LTD</CardTitle>
            <CardSubtitle>Supplier details and contact details</CardSubtitle>
          </CardHeader>
          <Divider />
          <CardConent style={{
          }}>
            <Grid>
              <Row>
                <Col>
                 <Button title={inputsDisabled ? 'Edit': 'Done'} onPress={()=>setInputDisabled(!inputsDisabled)} />
                </Col>
              </Row>
              <Row>
                <Divider />
              </Row>
              <List data={{ id: "sup1", name: "Cool Pesca", tel: '+412654987', email: 'coolpesca@gmail.com', 'minimum order': '1000 euro' }} >
                {({ label, value }) => {
                  console.log(label, value)
                  return <Row>
                    <Col>
                      <Image
                        style={{
                          width: 40,
                          height: 40,
                          marginRight: 11
                        }}
                        source={{
                          uri: 'https://picsum.photos/id/1/200'
                        }} />
                    </Col>
                    <Col size={2}>
                      <Text>{label}</Text>
                    </Col>
                    <Col size={2}>
                      <TextInput editable={!inputsDisabled} placeholder={value} style={{
                        borderWidth: 0
                      }} />
                    </Col>
                  </Row>
                }}
              </List>
            </Grid>
          </CardConent>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

{/* <HStack>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 11
                  }}
                  source={{
                    uri: 'https://picsum.photos/id/1/200'
                  }} />
                <TextInput placeholder={label} style={{
                  borderWidth: 0
                }} size={9} />
              </HStack> */}