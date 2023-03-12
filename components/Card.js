import { View, Text, Image, StyleSheet } from "react-native";
import Animated, {
  Layout,
  RollInLeft,
  RollOutRight,
  SlideInLeft,
  SlideOutRight,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";

export default function Card(movie) {
  const { id, title, description, posterUrl } = movie;
  return (
    <Animated.View
      layout={Layout.stiffness()}
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.card}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{description}</Text>
      <Image style={styles.poster} source={{ uri: posterUrl }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 28,
    padding: 16,
    marginVertical: 30,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowRadius: 6,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#383838",
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: "#575757",
  },
  poster: {
    height: 375,
    width: "100%",
    marginTop: 20,
    borderRadius: 14,
  },
});
