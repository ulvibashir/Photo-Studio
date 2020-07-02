import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";

import {
  signUp,
  signIn,
  selectUserInfo,
  selectAuthName,
} from "../../store/auth";
import { Field, RadioBtn, Btn } from "../../components";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../styles";

const options = ["Sign In", "Sign Up"];

export const Auth = connect(null, { signUp, signIn })(({ signUp, signIn }) => {
  const [error, setError] = useState("");
  const [signType, setSignType] = useState(options[0]);
  const [fields, setFields] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    repassword: "",
  });

  const validation = () => {
    const keys = Object.keys(fields);
    if (signType == "Sign In") {
      if (fields.email.trim() === "") {
        setError(`Please, write your email.`);
        return false;
      }
      if (fields.password.trim() === "") {
        setError(`Please, write your password.`);
        return false;
      }
    } else {
      for (let key of keys) {
        if (fields[key].trim() === "") {
          setError(`Please, write your ${key}.`);
          return false;
        }
      }
    }
    if (fields.password !== fields.repassword && signType == "Sign Up") {
      setError("Confirm your password.");
      return false
    }
    return true;
  };
  const handleFieldChange = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };
  const submit = () => {
    if (validation()) {
      if (signType == "Sign In") {
        signIn(fields);
      } else {
        signUp(fields);
      }
    }
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <LinearGradient
        style={styles.bgGradient}
        colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
        start={[0, 0.5]}
        end={[1, 0.5]}
      />
          <RadioBtn
            style={styles.radioBtn}
            value={signType}
            options={options}
            onValueChange={(v) => setSignType(v)}
          />
          {signType == "Sign In" ? (
            <>
              <Field
                value={fields.email}
                onChangeText={(v) => {
                  handleFieldChange("email", v);
                }}
                placeholder="Email"
              />
              <Field
                value={fields.password}
                secureTextEntry={true}
                onChangeText={(v) => {
                  handleFieldChange("password", v);
                }}
                placeholder="Password"
              />
            </>
          ) : (
            <>
              <Field
                value={fields.email}
                onChangeText={(v) => {
                  handleFieldChange("email", v);
                }}
                placeholder="Email"
              />
              <Field
                value={fields.name}
                onChangeText={(v) => {
                  handleFieldChange("name", v);
                }}
                placeholder="Name"
              />
              <Field
                value={fields.surname}
                onChangeText={(v) => {
                  handleFieldChange("surname", v);
                }}
                placeholder="Surname"
              />
              <Field
                value={fields.password}
                secureTextEntry={true}
                onChangeText={(v) => {
                  handleFieldChange("password", v);
                }}
                placeholder="Password"
              />
              <Field
                value={fields.repassword}
                secureTextEntry={true}
                onChangeText={(v) => {
                  handleFieldChange("repassword", v);
                }}
                placeholder="Rewrite Password"
              />
            </>
          )}
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity
              style={styles.btn}
              onPress={() => {
               submit()
              }}
            >
              <LinearGradient
                style={styles.bgGradient}
                colors={[COLORS.BTN_GRADIENT_1, COLORS.BTN_GRADIENT_2]}
                start={[0, 0.5]}
                end={[1, 0.5]}
              />
              
              <Text style={styles.btnTitle} weight="medium">
                {signType}
              </Text>
            </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  
  },
  bgGradient:{
...StyleSheet.absoluteFill

  },
  radioBtn: {
    justifyContent: "space-around",
    fontSize: 23,
    paddingBottom: 12,
  },
  error: {
    marginTop: 10,
    fontSize: 16,
    color: 'white',
  },
  btn: {
    height: 45,
    borderRadius: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    overflow: "hidden",
    marginBottom: 16,
  },
  btnTitle: {
      fontSize: 15,
      color: 'white'
  },
});
