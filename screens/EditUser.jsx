import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Layout } from "../commons";
import { CustomText, Form } from "../components";
import { COLORS } from "../styles";
import { selectUserData, updateUser } from "../store/auth";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const mapStateToProps = (state) => ({
  user: selectUserData(state),
});

export const EditUser = connect(mapStateToProps, { updateUser })(
  ({ user, updateUser }) => {
    const navigation = useNavigation();
    const {
      name,
      surname,
      password,
      email,
      image,
      phone,
      city,
      speciality,
    } = user;
    const [fields, setFields] = useState({
      name,
      surname,
      password,
      email,
      phone,
      image,
      city,
      speciality,
    });
    const checkIsNaN = (name, value) => {
      const checkName = name === "phone";
      if (+value < 0 || (isNaN(value) && checkName)) return;
      return true;
    };
    const handleFieldChange = (name, value) => {
      if(checkIsNaN(name))
     { setFields((fields) => ({
        ...fields,
        [name]: value,
      }));}
      return false
    };

    const handleUpdate = () => {
      updateUser(fields);
      navigation.navigate("settings-screen");
    };
    const inputs = [
      {
        label: "First Name",
        value: "name",
        keyboardType: "default",
        onChangeText: (v) => {
          handleFieldChange("name", v);
        },
      },
      {
        label: "Last Name",
        value: "surname",
        keyboardType: "default",
        onChangeText: (v) => {
          handleFieldChange("surname", v);
        },
      },

      {
        label: "E-mail",
        value: "email",
        keyboardType: 'email-address',
        onChangeText: (v) => {
          handleFieldChange("email", v);
        },
      },
      {
        label: "Password",
        value: "password",
        keyboardType: 'default',
        onChangeText: (v) => {
          handleFieldChange("password", v);
        },
      },
      {
        label: "Image",
        value: "image",
        keyboardType: 'default',
        onChangeText: (v) => {
          handleFieldChange("image", v);
        },
      },
      {
        label: "Phone",
        value: "phone",
        keyboardType: 'numeric',
        onChangeText: (v) => {
          handleFieldChange("phone", v);
        },
      },

      {
        label: "Preferred City",
        value: "city",
        keyboardType: 'default',
        onChangeText: (v) => {
          handleFieldChange("city", v);
        },
      },
      {
        label: "I am a ",
        value: "speciality",
        keyboardType: 'default',
        onChangeText: (v) => {
          handleFieldChange("speciality", v);
        },
      },
    ];
    return (
      <Layout
        title="Edit User"
        cancel={true}
        ok={true}
        onPressRightIcon={() => {
          handleUpdate();
        }}
      >
        <View style={styles.container}>
          <LinearGradient
            style={styles.bgGradient}
            colors={[COLORS.BG_GRADIENT_1, COLORS.BG_GRADIENT_2]}
            start={[0, 0.5]}
            end={[1, 0.5]}
          />
          <Form fields={fields} inputs={inputs} />
        </View>
      </Layout>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  bgGradient: { ...StyleSheet.absoluteFill },
});
