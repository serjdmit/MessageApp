import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Home from "../screens";

const Message = props => {
    console.log(JSON.stringify(props));
    return (
        <View style={styles.message}>
            <Text>{props.fromUser}</Text>
            <Text>{props.toUser}</Text>
            <Text>{props.message}</Text>
            <Text>{props.dateTime}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    message: {
        width: "100%",
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgb(64, 64, 64)"
    }
});

export default Message;
