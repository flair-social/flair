import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card } from "../../components/PostFlairScreen/Card";
import { useNavigation } from "@react-navigation/native";

export function FlairListScreen() {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('PostStack');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainerWrapper}>
        <Card
          title="2.7.0 toujours plus haut"
          subtitle="Paris trip"
          tags={["voiture", "netflix", "bar à shot", "volleyball"]}
          members={["@kaaris", "@b2oba"]}
          redflagsAmount={2}
          postDate={new Date()}
          description="Nous sommes sur Paris pendant 3 jours venez nous voir on est sympa ! On aime bien sortir et aller dans les bars..."
          distance="A 10 KM"
          time="il y a 2 min."
          imageUri="https://reactnative.dev/img/tiny_logo.png"
          onPress={handleCardPress}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  infoContainerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});
