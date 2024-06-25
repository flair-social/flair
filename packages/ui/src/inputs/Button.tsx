import { Pressable, StyleSheet } from "react-native";

interface ButtonProps {
  onPress: () => void;
  fullWidth?: boolean;
}

export function Button({ onPress, fullWidth }: ButtonProps) {
  return <Pressable onPress={onPress}></Pressable>;
}

const styles = StyleSheet.create({
  container: {}
});
