import React from "react";
import { View, TextInput, Text } from "react-native";
import { s } from "./input.Style";

export function Input({ onChange, isFahrenheit }) {
  const unit = isFahrenheit ? "°F" : "°C"; // Switch between °F and °C based on state

  return (
    <View style={s.root}>
      <TextInput
        maxLength={3}
        style={s.input}
        placeholder="Enter a Temperature"
        onChangeText={(text) => {
          onChange(text); // Handle input change
        }}
      />
      <Text style={s.unit}> {unit} </Text> {/* Display the current unit */}
    </View>
  );
}
