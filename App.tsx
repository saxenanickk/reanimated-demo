import { StyleSheet, View } from "react-native";
import { ThemeSwitch } from "./src/ThemeSwitch";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SquareRotation /> */}
      {/* <PanGestureHandlerDemo /> */}
      {/* <Interpolate /> */}
      <ThemeSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
