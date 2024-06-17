import MapView from 'react-native-maps';
import {StyleSheet} from "react-native";

export function MapMainScreen() {
  return <MapView style={styles.map}/>;
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
