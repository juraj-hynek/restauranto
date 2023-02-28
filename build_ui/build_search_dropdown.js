// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';

//Item array for the dropdown
// const items = [
//   //name key is must.It is to show the text in front
//   { id: 1, name: 'angellist' },
//   { id: 2, name: 'codepen' },
//   { id: 3, name: 'envelope' },
//   { id: 4, name: 'etsy' },
//   { id: 5, name: 'facebook' },
//   { id: 6, name: 'foursquare' },
//   { id: 7, name: 'github-alt' },
//   { id: 8, name: 'github' },
//   { id: 9, name: 'gitlab' },
//   { id: 10, name: 'instagram' },
// ];

const BuildSearchDropDown = (props) => {
    const { data = [
        //name key is must.It is to show the text in front
        { id: 1, name: 'Pizza Margerita', price: 10 },
        { id: 2, name: 'Pizza Salamy', price: 12 },
        { id: 3, name: 'Coca cola 0.3', price: 10 },
        { id: 4, name: 'Pepsi 0.3', price: 1.5 },
        { id: 5, name: 'Pasta Putanesca', price: 12 },
        { id: 6, name: 'Pasta Garlic', price: 8 },
        { id: 7, name: 'Capucino small', price: 1.8 },
        { id: 8, name: 'Capucino medium', price: 1.8 },
        { id: 9, name: 'Cafe lungo', price: 1.1 },
        { id: 10, name: 'Cafe lungo decofeine', price: 1.3 },
    ], title = "n/a", subtitle = "n/a", placeholder = "" } = props;
    const [selectedList, setSelectedList] = useState([])
    //Data Source for the SearchableDropdown
    //   const [serverData, setServerData] = useState([]);

    //   useEffect(() => {
    //     fetch('https://aboutreact.herokuapp.com/demosearchables.php')
    //       .then((response) => response.json())
    //       .then((responseJson) => {
    //         //Successful response from the API Call
    //         setServerData(responseJson.results);
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
    //   }, []);



    return (
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {title}
                </Text>
                <Text style={styles.headingText}>
                    {subtitle}
                </Text>
                <SearchableDropdown
                    onTextChange={(text) => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={(item) => setSelectedList([...selectedList, item])}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6',
                    }}
                    itemStyle={{
                        //single dropdown item style
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                    }}
                    itemTextStyle={{
                        //text style of a single dropdown item
                        color: '#222',
                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '60%',
                    }}

                    items={data}
                    //mapping of item array
                    // defaultIndex={0}
                    //default selected item index
                    placeholder={placeholder}
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                //To remove the underline from the android input
                />
                {
                    <Text>{JSON.stringify(selectedList, null, 2)}</Text>
                }
                {/* <Text style={styles.headingText}>
          Searchable Dropdown from Dynamic Array from Server
        </Text> */}
                {/* <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => alert(JSON.stringify(item))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={serverData}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="placeholder"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        /> */}
            </View>
    );
};

export default BuildSearchDropDown;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
       
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});
