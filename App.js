import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { s } from './App.Style';
import ColdBackground from "./assets/cold.png";
import HotBackground from "./assets/hot.png";
import { Input } from './components/input/input';
import { DisplayTemp } from './components/displayTemp/displayTemp';
import { ConvertBtn } from './components/convertBtn/convertBtn';

export default function App() {
  const [inputValue, setInputValue] = useState(0); 
  const [isFahrenheit, setIsFahrenheit] = useState(true); 
  const [background, setBackground] = useState(HotBackground)

  const handlePressed = () => {
    setIsFahrenheit((prev) => !prev); 
  };

  return (
    <ImageBackground style={s.background} source={background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemp 
              setBackground={setBackground} 
              temperature={inputValue} 
              isFahrenheit={isFahrenheit} 
            />

            <Input onChange={setInputValue} isFahrenheit={isFahrenheit}/>

            <ConvertBtn pressed={handlePressed} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}