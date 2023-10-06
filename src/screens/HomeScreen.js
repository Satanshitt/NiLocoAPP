import React from 'react';
import { StyleSheet, Text, Image, View, Linking } from 'react-native';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { ALL_COLORS } from '../func/colors';

import GamesList from '../components/GamesList';

const HomeScreen = () => {
  const handleOnPress = () => {
    Linking.openURL('https://satanshitt.vercel.app')
  }

  return (
    <GestureHandlerRootView>
      <ScrollView style={{ backgroundColor: ALL_COLORS.background }}>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://i.imgur.com/1DaUST8.png' }}
            style={[styles.image, { alignSelf: 'center' }]}
          />
        </View>
        <Text style={styles.title}>
          ¡Bienvenido a Ni Loco!
        </Text>
        <Text style={styles.subtitle}>Elige uno de los tantos juegos que tenemos para vos</Text>
        <Text style={styles.games}>Juegos disponibles</Text>

        <GamesList
          img='https://i.imgur.com/LqtzG0A.png'
          title="Verdad o Reto"
          bg={ALL_COLORS.purple}
        />
        <GamesList
          img='https://i.imgur.com/gio7O6U.png'
          title="Yo nunca"
          bg={ALL_COLORS.purple}
        />
        <GamesList
          img='https://i.imgur.com/1DaUST8.png'
          title="Proximamente"
          bg={ALL_COLORS.purple}
        />
        <GamesList
          img='https://i.imgur.com/1DaUST8.png'
          title="Proximamente"
          bg={ALL_COLORS.purple}
        />
        <GamesList
          img='https://i.imgur.com/1DaUST8.png'
          title="Proximamente"
          bg={ALL_COLORS.purple}
        />
        <GamesList
          img='https://i.imgur.com/1DaUST8.png'
          title="Proximamente"
          bg={ALL_COLORS.purple}
        />

        <Text style={styles.footer}>Desarrollado por <Text onPress={handleOnPress}>Satanshitt</Text> © {new Date().getFullYear()}.</Text>

      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image: {
    width: '60%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 15,
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 35,
    marginTop: 20,
    color: ALL_COLORS.secondary,
    textAlign: 'center',
    fontWeight: '200',
  },
  subtitle: {
    color: ALL_COLORS.grey,
    fontSize: 20,
    paddingHorizontal: 20,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '200',
  },
  games: {
    color: ALL_COLORS.primary,
    fontSize: 20,
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '200',
  },
  footer: {
    color: ALL_COLORS.grey,
    fontSize: 15,
    paddingHorizontal: 20,
    marginTop: 25,
    textAlign: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: ALL_COLORS.grey,
    fontWeight: '200',
  }
});
