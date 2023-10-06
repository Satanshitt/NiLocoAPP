import React from "react";
import { StyleSheet, Image, Text, View, Pressable } from "react-native";
import { ALL_COLORS } from "../func/colors";

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={{
                uri: 'https://i.imgur.com/1DaUST8.png'
            }} style={styles.img} />
            <Text style={styles.title}>Ni loco</Text>
            <Text style={styles.subtitle}>
                Una app para divertirse entre amigos. Si te gusta beber y divertirte al mismo tiempo, esta es tu app.
            </Text>
            <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.play}>¡Jugar ahora!</Text>
            </Pressable>
        </View>
    );
};

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: ALL_COLORS.background,
    },
    img: {
        height: '50%',
        width: '80%',
        maxWidth: '100%',
    },
    title: {
        color: ALL_COLORS.primary,
        fontWeight: '200',
        fontSize: 30,
        marginTop: 20,
    },
    subtitle: {
        color: ALL_COLORS.grey,
        fontSize: 15,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 20,
        marginTop: 5,
        fontWeight: '200',
    },
    btn: {
        marginTop: 40,
        backgroundColor: "#8E234E",
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 20,
    },
    play: {
        fontSize: 30,
        color: ALL_COLORS.white,
        fontWeight: '200',
    },
});
