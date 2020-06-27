import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";
import { Layout } from "../../commons";
import { CustomText } from "../../components";
import { COLORS } from "../../styles";
import { selectUserData, updateUser } from "../../store/auth";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";

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

    const handleFieldChange = (name, value) => {
      setFields((fields) => ({
        ...fields,
        [name]: value,
      }));
    };

    const handleUpdate = () => {
      updateUser(fields);
      navigation.navigate("settings-screen");
    };
    const inputs = [
      {
        label: "First Name",
        value: "name",
        onChangeText: (v) => {
          handleFieldChange("name", v);
        },
      },
      {
        label: "Last Name",
        value: "surname",
        onChangeText: (v) => {
          handleFieldChange("surname", v);
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
        label: "Password",
        value: "password",
        onChangeText: (v) => {
          handleFieldChange("password", v);
        },
      },
      {
        label: "Image",
        value: "image",
        onChangeText: (v) => {
          handleFieldChange("image", v);
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
<<<<<<< HEAD
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
          <FlatList
            keyboardShouldPersistTaps="always"
            data={inputs}
            renderItem={({ item }) => (
              <View  style={styles.inputWrapper}>
                <CustomText>{item.label}</CustomText>
                <TextInput
                
                  blurOnSubmit={false}
                  key={item.value}
                  keyboardType={
                    item.value == "phone" ? "number-pad" : "default"
                  }
                  secureTextEntry={item.value === "password"}
                  onChangeText={item.onChangeText}
                  value={fields[item.value]}
                  style={styles.input}
                />
              </View>
            )}
            keyExtractor={(item, i) => i.toString()}
          />
        </View>
      </Layout>
    );
  }
);
=======
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
>>>>>>> search-screen

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
