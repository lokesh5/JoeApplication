import React from "react";
import {StyleSheet, Text, View} from "react-native";

const StatementItem = (props) => {
    const { description, amount, date} = props;

    return (
        <View style={styles.statementContainer}>
            <Text style={styles.statementDescription}>
                {description}
            </Text>
            <View style={styles.valueContainer}>
            <Text
                style={styles.statementAmount}>
                {amount}
            </Text>
            <Text
                style={styles.statementDate}>
                {date}
            </Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statementContainer: {
        marginBottom: 20,
        height: 75,
        width: 335,
        borderColor: "black",
        borderWidth: 3,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    statementDescription: {
        fontSize: 20,
        marginLeft: 15,
    },
    statementAmount: {
        fontSize: 20,
        marginLeft: 40,
        color: "red"
    },
    statementDate: {
        fontSize: 14,
        color: "#636363"
    },
    valueContainer: {
        flexDirection: "column",
        alignSelf:"flex-start"
    }
});

export default StatementItem;