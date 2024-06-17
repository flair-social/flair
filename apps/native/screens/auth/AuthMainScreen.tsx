import {Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {SafeView} from "../../components/SafeView";

export function AuthMainScreen() {
  const insets = useSafeAreaInsets();
  return <>
    <SafeView/>
    <Text>Auth screen</Text>
  </>;
}
