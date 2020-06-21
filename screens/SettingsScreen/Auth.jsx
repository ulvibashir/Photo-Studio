import React, { useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import { connect } from "react-redux";

import { signUp, signIn } from "../../store/auth";
import { Field, RadioBtn, Btn } from "../../components";

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
    for (let key of Object.keys(fields)) {
      if (fields[key].trim() === "") {
        setError(`Please, write your ${key}.`);
        return false;
      }
    }
  
    if (fields.password !== fields.repassword && signType == "Sign Up") {
      setError("Confirm your password.");
    }
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
    <View style={styles.container}>
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
      <Btn title={signType} onPress={() => submit()} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 70,
  },
  radioBtn: {
    justifyContent: "space-around",
    fontSize: 25,
    paddingBottom: 12,
  },
  error: {
    marginTop: 10,
    fontSize: 16,
  }
});
