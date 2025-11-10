import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Projects() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Projects</Text>
        <View style={styles.underline} />

        {/* Project 1: E-commerce App */}
        <View style={styles.card}>
          <Text style={styles.title}>E-commerce Mobile App</Text>
          <Text style={styles.description}>
            A seamless online shopping experience featuring product browsing,
            cart management, and secure checkout. Built with modern UI and
            scalable backend.
          </Text>
        </View>

        {/* Project 2: Movies Streaming Website */}
        <View style={styles.card}>
          <Text style={styles.title}>Movies Streaming Website</Text>
          <Text style={styles.description}>
            A platform for users to explore and watch movies with an intuitive
            interface and smooth streaming. Includes categories, search, and
            recommendations.
          </Text>
        </View>

        {/* Project 3: Coffee Shop App */}
        <View style={styles.card}>
    
          <Text style={styles.title}>Coffee Shop App</Text>
          <Text style={styles.description}>
            A mobile app for discovering and ordering specialty coffee, complete
            with a clean UI and smooth onboarding experience.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fafafa" },
  container: { alignItems: "center", padding: 24 },
  heading: { fontSize: 34, fontWeight: "800", color: "#222" },
  underline: {
    width: 60,
    height: 4,
    backgroundColor: "#007AFF",
    marginVertical: 10,
    borderRadius: 3,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 18,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 14,
    marginBottom: 12,
    backgroundColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
    color: "#222",
  },
  description: { fontSize: 16, color: "#555", lineHeight: 22 },
});


