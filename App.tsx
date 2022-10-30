import { StyleSheet, View } from "react-native";
import { Interpolate } from "./src/Interpolate";
import { PanGestureHandlerDemo } from "./src/PanGestureHandler";
import { SquareRotation } from "./src/SquareRotation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SquareRotation /> */}
      {/* <PanGestureHandlerDemo /> */}
      <Interpolate />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
