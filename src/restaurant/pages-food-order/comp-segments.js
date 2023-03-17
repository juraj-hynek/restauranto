import React, { useState } from "react";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

export default function SegmentedForm() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Option 1");

  const handleSelectionChange = (index) => {
    setSelectedIndex(index);
    setSelectedValue(`Option ${index + 1}`);
  };
  return (
    <SegmentedControl
      values={["Free", "Reserved", "Occupied"]}
      selectedIndex={0}
      onChange={(event) => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        setSelectedValue(
          `Option ${event.nativeEvent.selectedSegmentIndex + 1}`
        );
      }}
    />
  );
}
