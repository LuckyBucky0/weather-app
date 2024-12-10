import React, { useEffect } from "react";
import { Text } from "react-native";
import { s } from "./displayTemp.Style";
import ColdBackground from "../../assets/cold.png"; // Going up two levels to find the assets folder
import HotBackground from "../../assets/hot.png"; // Same for hot.png
import { Input } from "../input/input";

export function DisplayTemp({ temperature, isFahrenheit, setBackground }) {
  const convertedTemp = isFahrenheit
    ? ((temperature - 32) * 5) / 9
    : (temperature * 9) / 5 + 32;
  const unit = isFahrenheit ? "°C" : "°F";

  useEffect(() => {
    console.log("Converted Temp:", convertedTemp); // Log converted temperature
    if (isFahrenheit) {
      // If temperature is in Fahrenheit, check if it's below or equal to 32°F
      if (temperature <= 32) {
        console.log("Setting cold background");
        setBackground(ColdBackground); // Set cold background if temperature is <= 32°F
      } else {
        console.log("Setting hot background");
        setBackground(HotBackground); // Set hot background if temperature is > 32°F
      }
    } else {
      // If temperature is in Celsius, check if it's below or equal to 0°C
      if (temperature <= 0) {
        console.log("Setting cold background");
        setBackground(ColdBackground); // Set cold background if temperature is <= 0°C
      } else {
        console.log("Setting hot background");
        setBackground(HotBackground); // Set hot background if temperature is > 0°C
      }
    }
  }, [convertedTemp, setBackground]);
  return <Text style={s.text}>{`${Math.round(convertedTemp)} ${unit}`}</Text>;
}
