import { Text } from "react-native";
import { SafeView } from "../../components/SafeView";
import { Button } from "@flair/ui/inputs";

export function AuthMainScreen() {
  return (
    <>
      <SafeView />
      <Button onPress={() => console.log("pressed")} />
      <Text>Auth screen</Text>
    </>
  );
}
