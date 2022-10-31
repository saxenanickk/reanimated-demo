import { StyleSheet, View } from "react-native";
import { PinchGestureHandlerDemo } from "./src/PinchGestureHandlerDemo";
import { ThemeSwitch } from "./src/ThemeSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SquareRotation /> */}
      {/* <PanGestureHandlerDemo /> */}
      {/* <Interpolate /> */}
      {/* <ThemeSwitch /> */}
      <PinchGestureHandlerDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
