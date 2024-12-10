import { View, TextInput, Text, Button, TouchableOpacity } from "react-native";
import { s } from "./convertBtn.Style";

export function ConvertBtn({ pressed }) {
  return (
    <View style={s.buttonShape}>
      <TouchableOpacity onPress={pressed}>
        <Text style={s.font}>Press To Change Conversion</Text>
      </TouchableOpacity>
    </View>
  );
}
