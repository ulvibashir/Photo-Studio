import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import { signUp, signIn } from "../../store/auth";
import { Field, RadioBtn, Btn } from "../../components";

const options = ["Sign In", "Sign Up"];

export const Auth = connect(null, { signUp, signIn })(({ signUp, signIn }) => {
  const [signType, setSignType] = useState(options[0]);
  const [fields, setFields] = useState({
    email: "test7@test.com",
    password: "123qwert",
    name: "",
    surname: "",
    repassword: "",
  });

  const handleFieldChange = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };
  const submit = () => {
    if (signType == "Sign In") {
      signIn(fields);
    } else {
      signUp(fields);
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
            onChangeText={(v) => {
              handleFieldChange("password", v);
            }}
            placeholder="Password"
          />
        </>
      )}
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
});
