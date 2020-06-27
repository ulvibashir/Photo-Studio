import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { Layout } from "../../commons";
import { CustomText } from "../../components";
import { COLORS } from "../../styles";
import { selectUserData, updateUser } from "../../store/auth";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  user: selectUserData(state),
});
export const EditUser = connect(mapStateToProps,{updateUser})(({user,updateUser}) => {

  const [fields, setFields] = useState({
    firstName: user.name,
    lastName: user.surname,
    password: user.password,
    email: user.email,
    phone: user.phone,
    instagram: user.instagram,
    website: user.website,
    city: user.city,
    speciality: user.speciality,
  });
  console.log(fields);
  const handleFieldChange = (name, value) => {
    setFields((fields) => ({
      ...fields,
      [name]: value,
    }));
  };
  const inputs = [
    {
      label: "First Name",
      value: "firstName",
      onChangeText: (v) => {
        handleFieldChange("firstName", v);
      },
    },
    {
      label: "Last Name",
      value: "lastName",
      onChangeText: (v) => {
        handleFieldChange("lastName", v);
      },
    },
    {
      label: "Password",
      value: "password",
      onChangeText: (v) => {
        handleFieldChange("password", v);
      },
    },
    {
      label: "E-mail",
      value: "email",
      onChangeText: (v) => {
        handleFieldChange("email", v);
      },
    },
    {
      label: "Phone",
      value: "phone",
      onChangeText: (v) => {
        handleFieldChange("phone", v);
      },
    },
    {
      label: "Instagram",
      value: "instagram",
      onChangeText: (v) => {
        handleFieldChange("instagram", v);
      },
    },
    {
      label: "Website",
      value: "website",
      onChangeText: (v) => {
        handleFieldChange("website", v);
      },
    },
    {
      label: "Preffered City",
      value: "city",
      onChangeText: (v) => {
        handleFieldChange("city", v);
      },
    },
    {
      label: "I am a ",
      value: "speciality",
      onChangeText: (v) => {
        handleFieldChange("speciality", v);
      },
    },
  ];
  return (
    <Layout title='Edit User' cancel={true} ok={true} onPressRightIcon={() => {updateUser(fields)}}>
      <View style={styles.container}>
        <FlatList
          data={inputs}
          keyExtractor={(item) => item.label}
          renderItem={({ item }) => (
            <View style={styles.inputWrapper}>
              <CustomText>{item.label}</CustomText>
              <TextInput
                secureTextEntry={item.value === "password"}
                onChangeText={item.onChangeText}
                value={fields[item.value]}
                style={styles.input}
              />
            </View>
          )}
          keyExtractor={(item,i)=> i}
        />
      </View>
    </Layout>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  inputWrapper: {
    marginTop: 12,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: COLORS.PRIMARY,
    width: "100%",
    height: 38,
  },
});
