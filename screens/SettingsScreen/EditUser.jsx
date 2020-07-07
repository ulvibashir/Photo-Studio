import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Layout } from "../../commons";
import { CustomText, Form } from "../../components";
import { COLORS } from "../../styles";
import { selectUserData, updateUser } from "../../store/auth";
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
    paddingBottom: 10
  },
  bgGradient: { ...StyleSheet.absoluteFill },
});
