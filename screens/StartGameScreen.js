import { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Colors from "../utils/colours";
import Title from "../components/UI/Title";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // Show an alert or error message here
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "OK", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    // Proceed with the valid chosen number
    onPickNumber(chosenNumber);
    resetInputHandler();
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  numberInput: {
    minHeight: 50,
    width: 50,
    padding: 8,
    fontSize: 24,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
