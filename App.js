import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: 'https://www.shutterstock.com/shutterstock/photos/2322075567/display_1500/stock-photo-devops-software-development-operations-infinity-symbol-web-development-concept-in-isometric-design-2322075567.jpg',

          }}
          style={styles.image}
        >
        </ImageBackground>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    width: '95%',
    height: '70%',
    borderRadius: 10,
    boxShadowColor: '#000',
    boxShadowOffset: {
      width: 0,
      height: 5,
    },
    boxShadowOpacity: 1,
    boxShadowRadius: 10,
    elevation: 11,
  }
});
