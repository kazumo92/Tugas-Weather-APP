import { Text } from "react-native";
import { s } from "./TextDisplayStyle";
export function TextDisplay({ suhu, unit }) {
  return (
    <Text style={s.textDisplay}>
      {suhu} &deg;{unit}
    </Text>
  );
}
