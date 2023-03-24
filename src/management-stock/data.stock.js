import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Select, Box } from "native-base";

function SelectInput({ label, data, onChange }) {
  return (
    <Box flex>
      <Text>{label}</Text>
      <Select
        selectedValue={""}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: "teal.600",
          //   endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        {data.map((item, index) => {
          return <Select.Item key={index} label={item} value={item} />;
        })}
      </Select>
    </Box>
  );
}

function DateInput({ label, data, onChange }) {
  return null;
}

const uiDescriptionForm = [
  {
    page: "",
    storageKey: "",
    title: "General into",
    subtitle: "",
    state: {},
    uiState: {},
    fields: [
      {
        type: "textInput",
        props: {
          label: "sku",
          placeholder: "",
          data: [],
          isDisabled: false,
          style: {},
        },
      },
      {
        type: "textInput",
        props: {
          label: "description",
          placeholder: "",
          data: [],
          isDisabled: false,
        },
      },
    ],
  },
  {
    title: "Quantities and Units",
    titlesLayout: "space-between",
    titleProps: {},
    subTitleProps: {},
    fieldStyles: {},
    // fieldsHorizontal
    // fielsVertical
    // fieldsGrid
    fields: [
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "Case(s) qty",
          placeholder: "",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          message: "",
        },
      },
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "Pack(s) qty",
          placeholder: "",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      },
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "Item(s) qty",
          placeholder: "",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
      },
      {
        type: "textInput",
        props: {
          isDisabled: false,
          label: "Item volume",
          placeholder: "",
          data: [1],
        },
      },
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "Select unit",
          placeholder: "",
          data: ["Kg", "gram(s)", "liter", "piece(s)", "slice(s)"],
        },
      },
    ],
  },
  {
    title: "Costs, Sales and Supplier",
    fields: [
      {
        type: "SelectInput",
        props: {
          label: "Supplier",
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        },
      },
      {
        type: "textInput",
        props: {
          isDisabled: false,
          label: "buy_price",
          placeholder: "",
          data: [],
        },
      },
      {
        type: "textInput",
        props: {
          isDisabled: false,
          label: "sale_price",
          placeholder: "",
          data: [],
        },
      },
    ],
  },
  {
    title: "Suppliers and category",
    fields: [
      {
        type: "textInput",
        props: {
          isDisabled: false,
          label: "supplier_id",
          placeholder: "",
          data: [],
        },
      },
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "item_category",
          placeholder: "",
          data: ["Fruit", "Vegetable", "Fish", "Drink"],
        },
      },
      {
        type: "textInput",
        props: {
          isDisabled: false,
          label: "min_order",
          placeholder: "",
          data: [],
        },
      },
    ],
  },
  //   {
  //     title: "Dates",
  //     fields: [
  //       {
  //         visible: false,
  //         type: "DateInput",
  //         props: {
  //           isDisabled: false,
  //           label: "Expiration date",
  //           placeholder: "",
  //           data: [new Date()],
  //         },
  //       },
  //       {
  //         visible: false,
  //         type: "DateInput",
  //         props: {
  //           isDisabled: false,
  //           label: "Purchase date",
  //           placeholder: "",
  //           data: [new Date()],
  //         },
  //       },
  //     ],
  //   },
  {
    title: "Stocks and storages",
    fields: [
      {
        type: "SelectInput",
        props: {
          isDisabled: false,
          label: "stock_area",
          placeholder: "",
          data: ["stock A", "stock B", "stock C"],
        },
      },
    ],
  },
];


function FormStock() {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const renderField = (field) => {
    switch (field.type) {
      case "SelectInput":
        return (
          <SelectInput
            label={field.props.label}
            data={field.props.data}
            onChange={(value) => handleFieldChange(field.props.label, value)}
          />
        );
      case "DateInput":
        return (
          <DateInput
            label={field.props.label}
            data={field.props.data}
            onChange={(value) => handleFieldChange(field.props.label, value)}
          />
        );
      case "textInput":
        return (
          <TextInput
            placeholder={field.props.placeholder}
            onChangeText={(value) =>
              handleFieldChange(field.props.label, value)
            }
          />
        );
      default:
        return null;
    }
  };

  const renderFields = (fields) => {
    return fields.map((field, index) => {
      return <View key={index}>{renderField(field)}</View>;
    });
  };

  const renderFormSection = (section) => {
    return (
      <View key={section.title}>
        <Text>{section.title}</Text>
        {renderFields(section.fields)}
      </View>
    );
  };

  return (
    <View>
      {uiDescriptionForm.map((section) => renderFormSection(section))}
    </View>
  );
}

export default FormStock;
