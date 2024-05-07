import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100%",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#f0f0f0",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: "100%",
    },
});

export default Task;