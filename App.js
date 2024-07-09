import {StyleSheet, ScrollView, View} from 'react-native';
import StatementItem from "./StatementItem";
import {creditCardStatement} from "./mockBankData";
import statementItem from "./StatementItem";
export default function App() {
  console.log(creditCardStatement)
  return (
      <ScrollView>
        <View style={styles.container}>
          {creditCardStatement.map((data) => {
                return(
                    <StatementItem description={data.description} amount={data.balance} date={data.date}/>
                )
              }
          )}
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: "center",
    alignItems: "center"
  },
});
