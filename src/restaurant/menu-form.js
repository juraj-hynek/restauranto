import { HStack, Spacer } from "native-base";
import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { VStack, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { StackView } from "./stack.view";

function FormAddItemToListIngrediences({
  addFoodIngredienceToList,
  foodIng,
  setFoodIng,
}) {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleNameChange = (key, value) => {
    setFoodIng((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleInput1Submit = () => {
    input2Ref.current.focus();
  };

  const handleInput2Submit = () => {
    input3Ref.current.focus();
  };

  const handleInput3Submit = () => {
    console.log("Form submitted");
    // Add logic to handle form submission here
  };

  useEffect(() => {
    // input1Ref.current.focus();
  }, []);
  return (
    <>
      <HStack mt="8">
        <Text>Food ingredients</Text>
        <Spacer />
        <Button title="Add" onPress={addFoodIngredienceToList} />
      </HStack>
      <StackView horizontal bWidth={1} bc="#ccc" p="10" br={5}>
        <TextInput
          onChangeText={(inputValue) => handleNameChange("name", inputValue)}
          ref={input1Ref}
          autoCorrect={false}
          defaultValue={foodIng.name}
          onSubmitEditing={(text) => handleInput1Submit()}
          placeholder="Ingredience"
          style={styles.input}
        />
        <TextInput
          onChangeText={(inputValue) => handleNameChange("qty", inputValue)}
          ref={input2Ref}
          autoCorrect={false}
          keyboardType="numeric"
          defaultValue={foodIng.qty}
          onSubmitEditing={(text) => handleInput2Submit()}
          placeholder="Quantity"
          style={styles.input}
          returnKeyType="done"
        />
        <TextInput
          onChangeText={(inputValue) => handleNameChange("cost", inputValue)}
          ref={input3Ref}
          autoCorrect={false}
          keyboardType="numeric"
          defaultValue={foodIng.cost}
          onSubmitEditing={(text) => handleInput3Submit()}
          placeholder="Cost"
          style={styles.input}
          returnKeyType="done"
        />
      </StackView>
    </>
  );
}

function ListOfFoodIngrediences({ listIngrediences, handleDeleteItemFromIng }) {
  return (
    <VStack>
      {listIngrediences.map((item, itemIndex) => {
        return (
          <HStack
            borderRadius={5}
            p="1"
            borderWidth={1}
            borderColor="#ccc"
            mb="3"
            justifyContent={"space-between"}
          >
            <Text>{item.name}</Text>
            <Text>{item.qty}</Text>
            <Text>{item.cost}</Text>
            <Icon
              size={28}
              name="cancel"
              onPress={() => handleDeleteItemFromIng(itemIndex)}
            />
          </HStack>
        );
      })}
    </VStack>
  );
}

const alertActionView = ({
  title = "N/A",
  subtitle = "N/A",
  leftTex = "N/A",
  rightText = "N/A",
  leftCallback = () => null,
  rightCallback = () => null,
  cancelable = false,
  leftStyle = "cancel",
}) => {
  Alert.alert(
    title,
    subtitle,
    [
      {
        text: leftTex,
        onPress: leftCallback,
        style: leftStyle,
      },
      {
        text: rightText,
        onPress: rightCallback,
      },
    ],
    { cancelable: cancelable }
  );
};

const MenuForm = () => {
  const [foodId, setFoodId] = useState("");
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  //
  const [listIngrediences, setListIngrediences] = useState([]);
  const [foodIng, setFoodIng] = useState({});

  const handleFoodIdChange = (value) => {
    setFoodId(value);
  };

  const handleFoodNameChange = (value) => {
    setFoodName(value);
  };

  const handleFoodPriceChange = (value) => {
    setFoodPrice(value);
  };

  const handleDeleteFoodId = () => {
    setFoodId("");
  };

  const handleDeleteFoodName = () => {
    setFoodName("");
  };

  const handleDeleteFoodPrice = () => {
    setFoodPrice("");
  };

  const handleInput1Submit = () => {
    input2Ref.current.focus();
  };

  const handleInput2Submit = () => {
    input3Ref.current.focus();
  };

  const handleInput3Submit = () => {
    console.log("Form submitted");
    // Add logic to handle form submission here
  };

  const handleSubmit = () => {
    if (!foodId || !foodName || !foodPrice) {
      alertActionView({
        title: "Empty Food form cannot be submited",
        subtitle: "Enter food id, name and cost",
        leftStyle: "cancel",
        leftCallback: () => null,
        rightCallback: () => null,
        rightText: "Confirm",
        leftTex: "Cancel",
      });
    }

    console.log(
      `Food ID: ${foodId}, Food Name: ${foodName}, Food Price: ${foodPrice}`
    );
    // Add logic to handle form submission here
  };

  const handleDeleteItemFromIng = (index) => {
    alertActionView({
      title: "Confirmation",
      subtitle: "Are you sure you want to delete item?",
      leftStyle: "cancel",
      leftCallback: () => null,
      rightCallback: () => {
        const copy = [...listIngrediences];
        copy.splice(index, 1);
        setListIngrediences(copy);
      },
      rightText: "Confirm",
      leftTex: "Cancel",
    });
  };

  const addFoodIngredienceToList = () => {
    if (Object.values(foodIng).length > 0) {
      setListIngrediences([...listIngrediences, foodIng]);
      setFoodIng({});
    } else {
      Alert.alert(
        "Atantion",
        "Form for Add recepie cannot be empty",
        [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
    console.log("no item form");
  };
  useEffect(() => {
    // input1Ref.current.focus();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <HStack>
          <Text>Add Menu Item</Text>
          <Spacer />
          <Button title="Submit" onPress={handleSubmit} />
        </HStack>
        <View style={styles.inputContainer}>
          <Icon name="restaurant" size={20} style={styles.inputIcon} />
          <TextInput
            onSubmitEditing={(text) => handleInput1Submit()}
            ref={input1Ref}
            autoCorrect={false}
            style={styles.input}
            placeholder="Enter Food ID"
            value={foodId}
            onChangeText={handleFoodIdChange}
          />
          {foodId !== "" && (
            <Icon
              name="cancel"
              size={20}
              style={styles.deleteIcon}
              onPress={handleDeleteFoodId}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon name="fastfood" size={20} style={styles.inputIcon} />
          <TextInput
            onSubmitEditing={(text) => handleInput2Submit()}
            ref={input2Ref}
            autoCorrect={false}
            style={styles.input}
            placeholder="Enter Food Name"
            value={foodName}
            onChangeText={handleFoodNameChange}
          />
          {foodName !== "" && (
            <Icon
              name="cancel"
              size={20}
              style={styles.deleteIcon}
              onPress={handleDeleteFoodName}
            />
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon name="attach-money" size={20} style={styles.inputIcon} />
          <TextInput
            onSubmitEditing={(text) => handleInput3Submit()}
            ref={input3Ref}
            autoCorrect={false}
            style={styles.input}
            placeholder="Enter Food Price"
            value={foodPrice}
            onChangeText={handleFoodPriceChange}
            keyboardType="numeric"
            returnKeyType="done"
          />
          {foodPrice !== "" && (
            <Icon
              name="cancel"
              size={20}
              style={styles.deleteIcon}
              onPress={handleDeleteFoodPrice}
            />
          )}
        </View>
        <FormAddItemToListIngrediences
          {...{ addFoodIngredienceToList, foodIng, setFoodIng }}
        />
        <ListOfFoodIngrediences
          {...{ handleDeleteItemFromIng, listIngrediences }}
        />
      </View>
    </ScrollView>
  );
};

export default MenuForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  spacer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    width: "100%",
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 8
  },
  deleteIcon: {
    marginLeft: 10,
  },
});
