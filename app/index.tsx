import { Link } from "expo-router";
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
        />

        <ScrollView contentContainerStyle={styles.container}>
          {/* Profile Image Area */}
          <View style={styles.imageWrapper}>
            <Image
              source={require('../assets/images/enock.jpg')}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.greeting}>Welcome 👋</Text>
          <Text style={styles.name}>Enock Langat</Text>
          <Text style={styles.role}>Software Developer</Text>

          <Text style={styles.bio}>
            I build modern and user-friendly mobile applications with clean design and great performance.
          </Text>

          <View style={styles.buttons}>
            <Link href="/projects" asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View My Work</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/about" asChild>
              <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonOutlineText}>About Me</Text>
              </TouchableOpacity>
            </Link>

            <Link href="/contact" asChild>
              <TouchableOpacity style={styles.buttonOutline}>
                <Text style={styles.buttonOutlineText}>Contact Me</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 24 },
  
  imageWrapper: {
    width: 160,
    height: 160,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#1E90FF",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // fallback background
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  greeting: { fontSize: 22, color: "#555" },
  name: { fontSize: 36, fontWeight: "bold", marginVertical: 6 },
  role: { fontSize: 18, color: "#1E90FF", marginBottom: 20 },
  bio: { fontSize: 16, color: "#555", textAlign: "center", lineHeight: 22, marginBottom: 30, paddingHorizontal: 10 },
  buttons: { width: "100%", gap: 14 },
  button: { backgroundColor: "#1E90FF", padding: 16, borderRadius: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontSize: 16, fontWeight: "600" },
  buttonOutline: { borderWidth: 2, borderColor: "#1E90FF", padding: 16, borderRadius: 12 },
  buttonOutlineText: { color: "#1E90FF", textAlign: "center", fontSize: 16 },
});