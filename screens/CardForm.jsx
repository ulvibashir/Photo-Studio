import React, { useState } from "react";
import { StyleSheet, View, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import { connect } from "react-redux";

import { Form, CustomText as Text, GradientBTN } from "../components";
import { COLORS } from "../styles";
import { Layout } from "../commons";
import { updateUserCards, selectUsersCards } from "../store/auth";

const pickerValues = [
  { label: "Visa", value: "Visa" },
  { label: "MasterCard", value: "MasterCard" },
  { label: "Maestro", value: "Maestro" },
];

export const CardForm = connect(null, { updateUserCards })(
  ({ updateUserCards, navigation,  }) => {
  
    const [error, setError] = useState("");
    const [fields, setFields] = useState({
      nameOnCard: "",
      number: "",
      expiration: "",
      cvv: "",
      cardType: "Visa",
    });
    const [preferred, setPreferred] = useState(false);
    const checkIsNaN = (name, value) => {
      const checkName = name !== "nameOnCard" && "cardType";
      if (+value < 0 || (isNaN(value) && checkName)) return;
      return true;
    };
    const handleExpirationDate = ( value) => {
      if (value.length === 2 && !value.includes("/")) {
        value += "/";
      }

      setFields((fields) => ({
        ...fields,
        expiration: value,
      }));
    };

    const handleFieldChange = (name, value) => {
      if (checkIsNaN(name,value)) {
        setFields((fields) => ({
          ...fields,
          [name]: value,
        }));
      }
      return false
    };
    const validation = () => {
      for (let key of Object.keys(fields)) {
        if (
          (key !== "cardType" && fields[key].trim() === "") ||
          fields.number.length < 16 ||
          fields.cvv.length < 3
        ) {
          setError(`Please, write your data correctly.`);
          return false;
        }
      }

      if (+fields.expiration.slice(0, 2) > 31) {
        setError("Invalid date, please try again.");
        return false;
      }
      return true;
    };
    const addCard = () => {
      if (validation()) {
        updateUserCards({ ...fields, preferred });
        navigation.goBack();
        return true;
      }
      return false;
    };
    const inputs = [
      {
        label: "Name on Card",
        value: "nameOnCard",
        keyboardType: "default",
        onChangeText: (v) => {
          handleFieldChange("nameOnCard", v);
        },
      },
      {
        label: "Card Number",
        value: "number",
        maxLength: 16,
        keyboardType: "numeric",
        onChangeText: (v) => {
          handleFieldChange("number", v);
        },
      },
      {
        label: "Expiration Date MM/YY",
        value: "expiration",
        maxLength: 5,
        keyboardType: "numeric",
        onChangeText: (v) => {
          handleExpirationDate( v);
        },
      },
      {
        label: "CVV",
        value: "cvv",
        maxLength: 3,
        keyboardType: "numeric",
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

          <View>
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
          </View>
          <View style={styles.row}>
            <Text style={styles.labelStyle}>Preferred</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#fff" }}
              thumbColor={preferred ? COLORS.BTN_GRADIENT_1 : "white"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setPreferred((v) => !v)}
              value={preferred}
            />
          </View>
          <Text style={styles.error}>{error}</Text>

          <GradientBTN
            style={styles.btn}
            title="Save Card"
            onPress={() => addCard()}
          />
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
    marginTop: 30,
  },
  pickerInnerContaier: {
    marginVertical: 20,
    height: 40,
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
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  error: {
    marginTop: 20,
    color: "white",
    fontFamily: "RobotoMedium",
    fontSize: 15,
  },
});
