import {useSafeAreaInsets} from "react-native-safe-area-context";
import {View} from "react-native";

export function SafeView() {
  const insets = useSafeAreaInsets();

  return <View style={{
    width : "100%",
    height: insets.top,
  }}/>
}
