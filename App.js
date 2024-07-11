import {StyleSheet, ScrollView, View, SafeAreaView, FlatList, Text, Button, TouchableOpacity} from 'react-native';
import StatementItem from "./StatementItem";
import {creditCardStatement} from "./mockBankData";
import statementItem from "./StatementItem";
import {useEffect, useState} from "react";
export default function App() {

    const returnTotalBalance = (balance) => {
        let sum = 0;
        balance.forEach((b) => {
            const integerBalance = parseInt(b.balance);
            if (b.isCredit) {
                sum = sum + integerBalance
            } else {
                sum = sum - integerBalance
            }
        })
        return sum;
    }

    const [totalBal, setTotalBal] = useState(returnTotalBalance(creditCardStatement))
    const _handleAdditionPress = () => {
        setTotalBal(totalBal + 1)
    }
    const _handleSubtractionPress = () => {
        setTotalBal(totalBal - 1)
    }


  return (
        <View style={styles.container}>
            <View style={styles.totalBalanceContainer}>
                <View>
                    <Text style={styles.totalBalanceDescriptionText}>
                        Total Balance:
                    </Text>
                </View>
                <View>
                    <Text style={styles.totalBalanceDescription}>
                        {totalBal}
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={_handleAdditionPress}>
                    <Text style={styles.addText}> Add </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={_handleSubtractionPress}>
                    <Text style={styles.subtractText}> Subtract </Text>
                </TouchableOpacity>
            </View>
            <FlatList style={styles.statement} data={creditCardStatement} key={(item,index)=>index.toString()} renderItem={({item}) => <TouchableOpacity onPress={() => console.log(item)}><StatementItem description={item.description} amount={item.balance} date={item.date} isCredit={item.isCredit}/></TouchableOpacity>}/>
        </View>
  );
}

const commonStyles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#ffffff'
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: "center",
    alignItems: "center"
  },
    totalBalanceContainer: {
        marginTop: 100,
        flexDirection: "row",
        height: 75,
        width: 335,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "red",
        justifyContent: "space-between"
    },
    totalBalanceDescriptionText: {
      ...commonStyles.text,
        marginLeft: 15,
    },
    totalBalanceDescription: {
      ...commonStyles.text,
        marginRight: 15
    },
    statement: {
      marginTop: 10
    },
    buttonContainer: {
      flexDirection: "row",
        width: 355,
        justifyContent: "space-between"
    },
    addText: {
      fontSize: 20,
        color: 'green'
    },
    subtractText: {
        fontSize: 20,
        color: 'red'
    }
});
