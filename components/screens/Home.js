import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Message } from "../view";
import config from "../../config";

class Home extends Component {
    render() {
        const messages = [
            {
                toUser: "Cindy",
                fromUser: "Sergei",
                message: "This is our new messenger",
                dateTime: "15 jan, 2019"
            },
            {
                toUser: "Cindy",
                fromUser: "Sergei",
                message: "This is our new messenger",
                dateTime: "15 jan, 2019"
            },
            {
                toUser: "Cindy",
                fromUser: "Sergei",
                message: "This is our new messenger",
                dateTime: "15 jan, 2019"
            },
            {
                toUser: "Cindy",
                fromUser: "Sergei",
                message: "This is our new messenger",
                dateTime: "15 jan, 2019"
            }
        ];
        return (
            <View style={styles.container}>
                {messages.map((message, index) => {
                    return <Message {...message} />;
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%"
    }
});

export default Home;
