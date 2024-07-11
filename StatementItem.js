import React from "react";
import {StyleSheet, Text, View} from "react-native";

const StatementItem = (props) => {
    const { description, amount, date, isCredit} = props;

    const _renderAmount = () => (
        <Text style={isCredit ? styles.statementAmountCredit : styles.statementAmountDebit}>
            {amount}
        </Text>
    );

    return (
        <View style={styles.statementContainer}>
            <Text style={styles.statementDescription}>
                {description}
            </Text>
            <View style={styles.bigContainer}>
            <View style={styles.valueContainer}>
                {_renderAmount()}
                <Text
                    style={styles.statementDate}>
                    {date}
                </Text>
                </View>
            </View>
        </View>
    )
}

const commonStyles =  StyleSheet.create({
    statementAmount: {
        fontSize: 20,
        marginLeft: 40,
    }
});

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
        justifyContent: "space-between"
    },
    statementDescription: {
        fontSize: 20,
        marginLeft: 15,
    },
    statementAmountDebit: {
        ...commonStyles.statementAmount,
        color: "red"
    },
    statementAmountCredit: {
        ...commonStyles.statementAmount,
        color: "green"
    },
    statementDate: {
        fontSize: 14,
        color: "#636363"
    },
    valueContainer: {
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: 15
    }
});

export default StatementItem;