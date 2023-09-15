import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Text, View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";
import coldBackground from "./assets/cold.png";
import { Input } from "./Component/Input/Input";
import { s } from "./WeatherStyle";
import { Button } from "react-native-web";
import { ButtonConvert } from "./Component/Button/ButtonConvert";
import { TextDisplay } from "./Component/DisplayText/TextDisplay";
import { useState } from "react";

import { convertToFahrenheit, convertToCelcius } from "./utils/Temperature";

export default function App() {
  const [input, setInput] = useState(0);

  return (
    <ImageBackground source={hotBackground} style={s.background}>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <TextDisplay suhu={convertToFahrenheit(input)} unit="F" />
            <Input onChange={setInput} />
            <ButtonConvert />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
