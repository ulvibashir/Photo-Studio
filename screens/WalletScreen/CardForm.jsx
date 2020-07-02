import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";

import { Form, CustomText } from "../../components";
import { COLORS } from "../../styles";
import { Layout } from "../../commons";
import { updateUserCards } from "../../store/auth";

const pickerValues = [
  { label: "Visa", value: "Visa" },
  { label: "MasterCard", value: "MasterCard" },
  { label: "Maestro", value: "Maestro" },
];

export const CardForm = connect(null, { updateUserCards })(
  ({ updateUserCards, navigation }) => {
    const [error, setError] = useState("");
    const [fields, setFields] = useState({
      nameOnCard: "",
      number: "",
      expiration: "",
      cvv: "",
      cardType: "Visa",
    });
    const handleFieldChange = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };
    const validation = () => {
      for (let key of Object.keys(fields)) {
        if (fields[key].trim() === "") {
          setError(`Please, write your data correctly.`);
          return false;
        }
      }
      return true;
    };
    const addCard = () => {
      if (validation()) {
        updateUserCards(fields);
        navigation.goBack();
        return true;
      }
      return false;
    };
    const inputs = [
      {
        label: "Name on Card",
        value: "nameOnCard",
        onChangeText: (v) => {
          handleFieldChange("nameOnCard", v);
        },
      },
      {
        label: "Card Number",
        value: "number",
        onChangeText: (v) => {
          handleFieldChange("number", v);
        },
      },
      {
        label: "Expiration Date MM/YY",
        value: "expiration",
        onChangeText: (v) => {
          handleFieldChange("expiration", v);
        },
      },
      {
        label: "CVV",
        value: "cvv",
        onChangeText: (v) => {
          handleFieldChange("cvv", v);
        },
      },
    ];

    return (
      <Layout cancel={true} title="Add Credit Card">
        <View style={styles.container}>
          <LinearGradient
            style={styles.bgGradient}
            colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          />
          <Form inputs={inputs} fields={fields} />
          <DropDownPicker
            items={pickerValues}
            defaultValue={fields.cardType}
            containerStyle={styles.pickerInnerContaier}
            style={styles.picker}
            dropDownStyle={styles.pickerDropDown}
            labelStyle={styles.labelStyle}
            onChangeItem={(item) => handleFieldChange("cardType", item.value)}
          />
          <View>
            <CustomText style={styles.error}>{error}</CustomText>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                addCard();
              }}
            >
              <LinearGradient
                style={styles.bgGradient}
                colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
                start={[0, 0.5]}
                end={[1, 0.5]}
              />

              <Text style={styles.btnTitle} weight="medium">
                Save Card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  bgGradient: {
    ...StyleSheet.absoluteFill,
  },
  btn: {
    height: 45,
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 80,
    overflow: "hidden",
  },
  btnTitle: {
    fontSize: 15,
    color: "white",
  },
  pickerInnerContaier: {
    marginVertical: 20,
    height: 50,
  },
  pickerDropDown: {
    backgroundColor: COLORS.SECONDARY,
    borderWidth: 0,
  },
  picker: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderBottomColor: COLORS.SECONDARY,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  labelStyle: {
    color: "white",
    fontFamily: "RobotoRegular",
    fontSize: 14,
  },
  error: {
    color: 'white',
    fontFamily: 'RobotoMedium',
    fontSize: 15,
  }
});
